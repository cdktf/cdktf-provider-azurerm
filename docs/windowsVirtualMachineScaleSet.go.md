# `windowsVirtualMachineScaleSet` Submodule <a name="`windowsVirtualMachineScaleSet` Submodule" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsVirtualMachineScaleSet <a name="WindowsVirtualMachineScaleSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set azurerm_windows_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSet(scope Construct, id *string, config WindowsVirtualMachineScaleSetConfig) WindowsVirtualMachineScaleSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig">WindowsVirtualMachineScaleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putOsDisk">PutOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putRollingUpgradePolicy">PutRollingUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putScaleIn">PutScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSourceImageReference">PutSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSpotRestore">PutSpotRestore</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSecureBootEnabled">ResetSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSinglePlacementGroup">ResetSinglePlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSourceImageId">ResetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSourceImageReference">ResetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSpotRestore">ResetSpotRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTags">ResetTags</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalCapabilities` <a name="PutAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalCapabilities"></a>

```go
func PutAdditionalCapabilities(value WindowsVirtualMachineScaleSetAdditionalCapabilities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a>

---

##### `PutAdditionalUnattendContent` <a name="PutAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalUnattendContent"></a>

```go
func PutAdditionalUnattendContent(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalUnattendContent.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAutomaticInstanceRepair` <a name="PutAutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticInstanceRepair"></a>

```go
func PutAutomaticInstanceRepair(value WindowsVirtualMachineScaleSetAutomaticInstanceRepair)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticInstanceRepair.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a>

---

##### `PutAutomaticOsUpgradePolicy` <a name="PutAutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticOsUpgradePolicy"></a>

```go
func PutAutomaticOsUpgradePolicy(value WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticOsUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---

##### `PutBootDiagnostics` <a name="PutBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putBootDiagnostics"></a>

```go
func PutBootDiagnostics(value WindowsVirtualMachineScaleSetBootDiagnostics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a>

---

##### `PutDataDisk` <a name="PutDataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putDataDisk"></a>

```go
func PutDataDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putDataDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putExtension"></a>

```go
func PutExtension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putExtension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGalleryApplication` <a name="PutGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putGalleryApplication"></a>

```go
func PutGalleryApplication(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putGalleryApplication.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putIdentity"></a>

```go
func PutIdentity(value WindowsVirtualMachineScaleSetIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putOsDisk"></a>

```go
func PutOsDisk(value WindowsVirtualMachineScaleSetOsDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putPlan"></a>

```go
func PutPlan(value WindowsVirtualMachineScaleSetPlan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a>

---

##### `PutRollingUpgradePolicy` <a name="PutRollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putRollingUpgradePolicy"></a>

```go
func PutRollingUpgradePolicy(value WindowsVirtualMachineScaleSetRollingUpgradePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putRollingUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a>

---

##### `PutScaleIn` <a name="PutScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putScaleIn"></a>

```go
func PutScaleIn(value WindowsVirtualMachineScaleSetScaleIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putScaleIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceImageReference` <a name="PutSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSourceImageReference"></a>

```go
func PutSourceImageReference(value WindowsVirtualMachineScaleSetSourceImageReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a>

---

##### `PutSpotRestore` <a name="PutSpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSpotRestore"></a>

```go
func PutSpotRestore(value WindowsVirtualMachineScaleSetSpotRestore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSpotRestore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a>

---

##### `PutTerminationNotification` <a name="PutTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTerminationNotification"></a>

```go
func PutTerminationNotification(value WindowsVirtualMachineScaleSetTerminationNotification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTerminationNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTimeouts"></a>

```go
func PutTimeouts(value WindowsVirtualMachineScaleSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts">WindowsVirtualMachineScaleSetTimeouts</a>

---

##### `PutWinrmListener` <a name="PutWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putWinrmListener"></a>

```go
func PutWinrmListener(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putWinrmListener.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalCapabilities` <a name="ResetAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAdditionalCapabilities"></a>

```go
func ResetAdditionalCapabilities()
```

##### `ResetAdditionalUnattendContent` <a name="ResetAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAdditionalUnattendContent"></a>

```go
func ResetAdditionalUnattendContent()
```

##### `ResetAutomaticInstanceRepair` <a name="ResetAutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAutomaticInstanceRepair"></a>

```go
func ResetAutomaticInstanceRepair()
```

##### `ResetAutomaticOsUpgradePolicy` <a name="ResetAutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAutomaticOsUpgradePolicy"></a>

```go
func ResetAutomaticOsUpgradePolicy()
```

##### `ResetBootDiagnostics` <a name="ResetBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetBootDiagnostics"></a>

```go
func ResetBootDiagnostics()
```

##### `ResetCapacityReservationGroupId` <a name="ResetCapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetCapacityReservationGroupId"></a>

```go
func ResetCapacityReservationGroupId()
```

##### `ResetComputerNamePrefix` <a name="ResetComputerNamePrefix" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetComputerNamePrefix"></a>

```go
func ResetComputerNamePrefix()
```

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetCustomData"></a>

```go
func ResetCustomData()
```

##### `ResetDataDisk` <a name="ResetDataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetDataDisk"></a>

```go
func ResetDataDisk()
```

##### `ResetDoNotRunExtensionsOnOverprovisionedMachines` <a name="ResetDoNotRunExtensionsOnOverprovisionedMachines" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetDoNotRunExtensionsOnOverprovisionedMachines"></a>

```go
func ResetDoNotRunExtensionsOnOverprovisionedMachines()
```

##### `ResetEdgeZone` <a name="ResetEdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEdgeZone"></a>

```go
func ResetEdgeZone()
```

##### `ResetEnableAutomaticUpdates` <a name="ResetEnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEnableAutomaticUpdates"></a>

```go
func ResetEnableAutomaticUpdates()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEncryptionAtHostEnabled"></a>

```go
func ResetEncryptionAtHostEnabled()
```

##### `ResetEvictionPolicy` <a name="ResetEvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEvictionPolicy"></a>

```go
func ResetEvictionPolicy()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetExtension"></a>

```go
func ResetExtension()
```

##### `ResetExtensionOperationsEnabled` <a name="ResetExtensionOperationsEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetExtensionOperationsEnabled"></a>

```go
func ResetExtensionOperationsEnabled()
```

##### `ResetExtensionsTimeBudget` <a name="ResetExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetExtensionsTimeBudget"></a>

```go
func ResetExtensionsTimeBudget()
```

##### `ResetGalleryApplication` <a name="ResetGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetGalleryApplication"></a>

```go
func ResetGalleryApplication()
```

##### `ResetHealthProbeId` <a name="ResetHealthProbeId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetHealthProbeId"></a>

```go
func ResetHealthProbeId()
```

##### `ResetHostGroupId` <a name="ResetHostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetHostGroupId"></a>

```go
func ResetHostGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetMaxBidPrice` <a name="ResetMaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetMaxBidPrice"></a>

```go
func ResetMaxBidPrice()
```

##### `ResetOverprovision` <a name="ResetOverprovision" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetOverprovision"></a>

```go
func ResetOverprovision()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetPlan"></a>

```go
func ResetPlan()
```

##### `ResetPlatformFaultDomainCount` <a name="ResetPlatformFaultDomainCount" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetPlatformFaultDomainCount"></a>

```go
func ResetPlatformFaultDomainCount()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProvisionVmAgent` <a name="ResetProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetProvisionVmAgent"></a>

```go
func ResetProvisionVmAgent()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetProximityPlacementGroupId"></a>

```go
func ResetProximityPlacementGroupId()
```

##### `ResetRollingUpgradePolicy` <a name="ResetRollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetRollingUpgradePolicy"></a>

```go
func ResetRollingUpgradePolicy()
```

##### `ResetScaleIn` <a name="ResetScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetScaleIn"></a>

```go
func ResetScaleIn()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetSecureBootEnabled` <a name="ResetSecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSecureBootEnabled"></a>

```go
func ResetSecureBootEnabled()
```

##### `ResetSinglePlacementGroup` <a name="ResetSinglePlacementGroup" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSinglePlacementGroup"></a>

```go
func ResetSinglePlacementGroup()
```

##### `ResetSourceImageId` <a name="ResetSourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSourceImageId"></a>

```go
func ResetSourceImageId()
```

##### `ResetSourceImageReference` <a name="ResetSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSourceImageReference"></a>

```go
func ResetSourceImageReference()
```

##### `ResetSpotRestore` <a name="ResetSpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSpotRestore"></a>

```go
func ResetSpotRestore()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTerminationNotification` <a name="ResetTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTerminationNotification"></a>

```go
func ResetTerminationNotification()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetUpgradeMode` <a name="ResetUpgradeMode" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetUpgradeMode"></a>

```go
func ResetUpgradeMode()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetVtpmEnabled` <a name="ResetVtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetVtpmEnabled"></a>

```go
func ResetVtpmEnabled()
```

##### `ResetWinrmListener` <a name="ResetWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetWinrmListener"></a>

```go
func ResetWinrmListener()
```

##### `ResetZoneBalance` <a name="ResetZoneBalance" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetZoneBalance"></a>

```go
func ResetZoneBalance()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetZones"></a>

```go
func ResetZones()
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

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WindowsVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WindowsVirtualMachineScaleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WindowsVirtualMachineScaleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WindowsVirtualMachineScaleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalUnattendContent">AdditionalUnattendContent</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList">WindowsVirtualMachineScaleSetAdditionalUnattendContentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticInstanceRepair">AutomaticInstanceRepair</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticOsUpgradePolicy">AutomaticOsUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference">WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dataDisk">DataDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList">WindowsVirtualMachineScaleSetDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList">WindowsVirtualMachineScaleSetExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplication">GalleryApplication</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList">WindowsVirtualMachineScaleSetGalleryApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference">WindowsVirtualMachineScaleSetIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList">WindowsVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference">WindowsVirtualMachineScaleSetOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference">WindowsVirtualMachineScaleSetPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.rollingUpgradePolicy">RollingUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference">WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleIn">ScaleIn</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference">WindowsVirtualMachineScaleSetScaleInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList">WindowsVirtualMachineScaleSetSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference">WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.spotRestore">SpotRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference">WindowsVirtualMachineScaleSetSpotRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference">WindowsVirtualMachineScaleSetTerminationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference">WindowsVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.winrmListener">WinrmListener</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList">WindowsVirtualMachineScaleSetWinrmListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalCapabilitiesInput">AdditionalCapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalUnattendContentInput">AdditionalUnattendContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticInstanceRepairInput">AutomaticInstanceRepairInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticOsUpgradePolicyInput">AutomaticOsUpgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.bootDiagnosticsInput">BootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.capacityReservationGroupIdInput">CapacityReservationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.computerNamePrefixInput">ComputerNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.customDataInput">CustomDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dataDiskInput">DataDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachinesInput">DoNotRunExtensionsOnOverprovisionedMachinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.edgeZoneInput">EdgeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.enableAutomaticUpdatesInput">EnableAutomaticUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionInput">ExtensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionOperationsEnabledInput">ExtensionOperationsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionsTimeBudgetInput">ExtensionsTimeBudgetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplicationInput">GalleryApplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.healthProbeIdInput">HealthProbeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.hostGroupIdInput">HostGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.instancesInput">InstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.maxBidPriceInput">MaxBidPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.overprovisionInput">OverprovisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.platformFaultDomainCountInput">PlatformFaultDomainCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisionVmAgentInput">ProvisionVmAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.rollingUpgradePolicyInput">RollingUpgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleInInput">ScaleInInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secureBootEnabledInput">SecureBootEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.singlePlacementGroupInput">SinglePlacementGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageIdInput">SourceImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageReferenceInput">SourceImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.spotRestoreInput">SpotRestoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminationNotificationInput">TerminationNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.upgradeModeInput">UpgradeModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.vtpmEnabledInput">VtpmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.winrmListenerInput">WinrmListenerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zoneBalanceInput">ZoneBalanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.customData">CustomData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachines">DoNotRunExtensionsOnOverprovisionedMachines</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.edgeZone">EdgeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionOperationsEnabled">ExtensionOperationsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.healthProbeId">HealthProbeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.hostGroupId">HostGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.instances">Instances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.maxBidPrice">MaxBidPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.overprovision">Overprovision</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.platformFaultDomainCount">PlatformFaultDomainCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secureBootEnabled">SecureBootEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.singlePlacementGroup">SinglePlacementGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageId">SourceImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.upgradeMode">UpgradeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.vtpmEnabled">VtpmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zoneBalance">ZoneBalance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalCapabilities`<sup>Required</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalCapabilities"></a>

```go
func AdditionalCapabilities() WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a>

---

##### `AdditionalUnattendContent`<sup>Required</sup> <a name="AdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalUnattendContent"></a>

```go
func AdditionalUnattendContent() WindowsVirtualMachineScaleSetAdditionalUnattendContentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList">WindowsVirtualMachineScaleSetAdditionalUnattendContentList</a>

---

##### `AutomaticInstanceRepair`<sup>Required</sup> <a name="AutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticInstanceRepair"></a>

```go
func AutomaticInstanceRepair() WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a>

---

##### `AutomaticOsUpgradePolicy`<sup>Required</sup> <a name="AutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticOsUpgradePolicy"></a>

```go
func AutomaticOsUpgradePolicy() WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference</a>

---

##### `BootDiagnostics`<sup>Required</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.bootDiagnostics"></a>

```go
func BootDiagnostics() WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference">WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference</a>

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dataDisk"></a>

```go
func DataDisk() WindowsVirtualMachineScaleSetDataDiskList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList">WindowsVirtualMachineScaleSetDataDiskList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extension"></a>

```go
func Extension() WindowsVirtualMachineScaleSetExtensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList">WindowsVirtualMachineScaleSetExtensionList</a>

---

##### `GalleryApplication`<sup>Required</sup> <a name="GalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplication"></a>

```go
func GalleryApplication() WindowsVirtualMachineScaleSetGalleryApplicationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList">WindowsVirtualMachineScaleSetGalleryApplicationList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.identity"></a>

```go
func Identity() WindowsVirtualMachineScaleSetIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference">WindowsVirtualMachineScaleSetIdentityOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.networkInterface"></a>

```go
func NetworkInterface() WindowsVirtualMachineScaleSetNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList">WindowsVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.osDisk"></a>

```go
func OsDisk() WindowsVirtualMachineScaleSetOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference">WindowsVirtualMachineScaleSetOsDiskOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.plan"></a>

```go
func Plan() WindowsVirtualMachineScaleSetPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference">WindowsVirtualMachineScaleSetPlanOutputReference</a>

---

##### `RollingUpgradePolicy`<sup>Required</sup> <a name="RollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.rollingUpgradePolicy"></a>

```go
func RollingUpgradePolicy() WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference">WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference</a>

---

##### `ScaleIn`<sup>Required</sup> <a name="ScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleIn"></a>

```go
func ScaleIn() WindowsVirtualMachineScaleSetScaleInOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference">WindowsVirtualMachineScaleSetScaleInOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secret"></a>

```go
func Secret() WindowsVirtualMachineScaleSetSecretList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList">WindowsVirtualMachineScaleSetSecretList</a>

---

##### `SourceImageReference`<sup>Required</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageReference"></a>

```go
func SourceImageReference() WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference">WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference</a>

---

##### `SpotRestore`<sup>Required</sup> <a name="SpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.spotRestore"></a>

```go
func SpotRestore() WindowsVirtualMachineScaleSetSpotRestoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference">WindowsVirtualMachineScaleSetSpotRestoreOutputReference</a>

---

##### `TerminationNotification`<sup>Required</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminationNotification"></a>

```go
func TerminationNotification() WindowsVirtualMachineScaleSetTerminationNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference">WindowsVirtualMachineScaleSetTerminationNotificationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timeouts"></a>

```go
func Timeouts() WindowsVirtualMachineScaleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference">WindowsVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `WinrmListener`<sup>Required</sup> <a name="WinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.winrmListener"></a>

```go
func WinrmListener() WindowsVirtualMachineScaleSetWinrmListenerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList">WindowsVirtualMachineScaleSetWinrmListenerList</a>

---

##### `AdditionalCapabilitiesInput`<sup>Optional</sup> <a name="AdditionalCapabilitiesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalCapabilitiesInput"></a>

```go
func AdditionalCapabilitiesInput() WindowsVirtualMachineScaleSetAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a>

---

##### `AdditionalUnattendContentInput`<sup>Optional</sup> <a name="AdditionalUnattendContentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalUnattendContentInput"></a>

```go
func AdditionalUnattendContentInput() interface{}
```

- *Type:* interface{}

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminUsernameInput"></a>

```go
func AdminUsernameInput() *string
```

- *Type:* *string

---

##### `AutomaticInstanceRepairInput`<sup>Optional</sup> <a name="AutomaticInstanceRepairInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticInstanceRepairInput"></a>

```go
func AutomaticInstanceRepairInput() WindowsVirtualMachineScaleSetAutomaticInstanceRepair
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a>

---

##### `AutomaticOsUpgradePolicyInput`<sup>Optional</sup> <a name="AutomaticOsUpgradePolicyInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticOsUpgradePolicyInput"></a>

```go
func AutomaticOsUpgradePolicyInput() WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---

##### `BootDiagnosticsInput`<sup>Optional</sup> <a name="BootDiagnosticsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.bootDiagnosticsInput"></a>

```go
func BootDiagnosticsInput() WindowsVirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a>

---

##### `CapacityReservationGroupIdInput`<sup>Optional</sup> <a name="CapacityReservationGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.capacityReservationGroupIdInput"></a>

```go
func CapacityReservationGroupIdInput() *string
```

- *Type:* *string

---

##### `ComputerNamePrefixInput`<sup>Optional</sup> <a name="ComputerNamePrefixInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.computerNamePrefixInput"></a>

```go
func ComputerNamePrefixInput() *string
```

- *Type:* *string

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.customDataInput"></a>

```go
func CustomDataInput() *string
```

- *Type:* *string

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dataDiskInput"></a>

```go
func DataDiskInput() interface{}
```

- *Type:* interface{}

---

##### `DoNotRunExtensionsOnOverprovisionedMachinesInput`<sup>Optional</sup> <a name="DoNotRunExtensionsOnOverprovisionedMachinesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachinesInput"></a>

```go
func DoNotRunExtensionsOnOverprovisionedMachinesInput() interface{}
```

- *Type:* interface{}

---

##### `EdgeZoneInput`<sup>Optional</sup> <a name="EdgeZoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.edgeZoneInput"></a>

```go
func EdgeZoneInput() *string
```

- *Type:* *string

---

##### `EnableAutomaticUpdatesInput`<sup>Optional</sup> <a name="EnableAutomaticUpdatesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.enableAutomaticUpdatesInput"></a>

```go
func EnableAutomaticUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.encryptionAtHostEnabledInput"></a>

```go
func EncryptionAtHostEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.evictionPolicyInput"></a>

```go
func EvictionPolicyInput() *string
```

- *Type:* *string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionInput"></a>

```go
func ExtensionInput() interface{}
```

- *Type:* interface{}

---

##### `ExtensionOperationsEnabledInput`<sup>Optional</sup> <a name="ExtensionOperationsEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionOperationsEnabledInput"></a>

```go
func ExtensionOperationsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExtensionsTimeBudgetInput`<sup>Optional</sup> <a name="ExtensionsTimeBudgetInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionsTimeBudgetInput"></a>

```go
func ExtensionsTimeBudgetInput() *string
```

- *Type:* *string

---

##### `GalleryApplicationInput`<sup>Optional</sup> <a name="GalleryApplicationInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplicationInput"></a>

```go
func GalleryApplicationInput() interface{}
```

- *Type:* interface{}

---

##### `HealthProbeIdInput`<sup>Optional</sup> <a name="HealthProbeIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.healthProbeIdInput"></a>

```go
func HealthProbeIdInput() *string
```

- *Type:* *string

---

##### `HostGroupIdInput`<sup>Optional</sup> <a name="HostGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.hostGroupIdInput"></a>

```go
func HostGroupIdInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.identityInput"></a>

```go
func IdentityInput() WindowsVirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.instancesInput"></a>

```go
func InstancesInput() *f64
```

- *Type:* *f64

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxBidPriceInput`<sup>Optional</sup> <a name="MaxBidPriceInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.maxBidPriceInput"></a>

```go
func MaxBidPriceInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.osDiskInput"></a>

```go
func OsDiskInput() WindowsVirtualMachineScaleSetOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a>

---

##### `OverprovisionInput`<sup>Optional</sup> <a name="OverprovisionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.overprovisionInput"></a>

```go
func OverprovisionInput() interface{}
```

- *Type:* interface{}

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.planInput"></a>

```go
func PlanInput() WindowsVirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a>

---

##### `PlatformFaultDomainCountInput`<sup>Optional</sup> <a name="PlatformFaultDomainCountInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.platformFaultDomainCountInput"></a>

```go
func PlatformFaultDomainCountInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `ProvisionVmAgentInput`<sup>Optional</sup> <a name="ProvisionVmAgentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisionVmAgentInput"></a>

```go
func ProvisionVmAgentInput() interface{}
```

- *Type:* interface{}

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.proximityPlacementGroupIdInput"></a>

```go
func ProximityPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RollingUpgradePolicyInput`<sup>Optional</sup> <a name="RollingUpgradePolicyInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.rollingUpgradePolicyInput"></a>

```go
func RollingUpgradePolicyInput() WindowsVirtualMachineScaleSetRollingUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a>

---

##### `ScaleInInput`<sup>Optional</sup> <a name="ScaleInInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleInInput"></a>

```go
func ScaleInInput() WindowsVirtualMachineScaleSetScaleIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `SecureBootEnabledInput`<sup>Optional</sup> <a name="SecureBootEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secureBootEnabledInput"></a>

```go
func SecureBootEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SinglePlacementGroupInput`<sup>Optional</sup> <a name="SinglePlacementGroupInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.singlePlacementGroupInput"></a>

```go
func SinglePlacementGroupInput() interface{}
```

- *Type:* interface{}

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `SourceImageIdInput`<sup>Optional</sup> <a name="SourceImageIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageIdInput"></a>

```go
func SourceImageIdInput() *string
```

- *Type:* *string

---

##### `SourceImageReferenceInput`<sup>Optional</sup> <a name="SourceImageReferenceInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageReferenceInput"></a>

```go
func SourceImageReferenceInput() WindowsVirtualMachineScaleSetSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a>

---

##### `SpotRestoreInput`<sup>Optional</sup> <a name="SpotRestoreInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.spotRestoreInput"></a>

```go
func SpotRestoreInput() WindowsVirtualMachineScaleSetSpotRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerminationNotificationInput`<sup>Optional</sup> <a name="TerminationNotificationInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminationNotificationInput"></a>

```go
func TerminationNotificationInput() WindowsVirtualMachineScaleSetTerminationNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `UpgradeModeInput`<sup>Optional</sup> <a name="UpgradeModeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.upgradeModeInput"></a>

```go
func UpgradeModeInput() *string
```

- *Type:* *string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `VtpmEnabledInput`<sup>Optional</sup> <a name="VtpmEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.vtpmEnabledInput"></a>

```go
func VtpmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WinrmListenerInput`<sup>Optional</sup> <a name="WinrmListenerInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.winrmListenerInput"></a>

```go
func WinrmListenerInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneBalanceInput`<sup>Optional</sup> <a name="ZoneBalanceInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zoneBalanceInput"></a>

```go
func ZoneBalanceInput() interface{}
```

- *Type:* interface{}

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `CapacityReservationGroupId`<sup>Required</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.capacityReservationGroupId"></a>

```go
func CapacityReservationGroupId() *string
```

- *Type:* *string

---

##### `ComputerNamePrefix`<sup>Required</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.computerNamePrefix"></a>

```go
func ComputerNamePrefix() *string
```

- *Type:* *string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.customData"></a>

```go
func CustomData() *string
```

- *Type:* *string

---

##### `DoNotRunExtensionsOnOverprovisionedMachines`<sup>Required</sup> <a name="DoNotRunExtensionsOnOverprovisionedMachines" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachines"></a>

```go
func DoNotRunExtensionsOnOverprovisionedMachines() interface{}
```

- *Type:* interface{}

---

##### `EdgeZone`<sup>Required</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.edgeZone"></a>

```go
func EdgeZone() *string
```

- *Type:* *string

---

##### `EnableAutomaticUpdates`<sup>Required</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.enableAutomaticUpdates"></a>

```go
func EnableAutomaticUpdates() interface{}
```

- *Type:* interface{}

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.encryptionAtHostEnabled"></a>

```go
func EncryptionAtHostEnabled() interface{}
```

- *Type:* interface{}

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.evictionPolicy"></a>

```go
func EvictionPolicy() *string
```

- *Type:* *string

---

##### `ExtensionOperationsEnabled`<sup>Required</sup> <a name="ExtensionOperationsEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionOperationsEnabled"></a>

```go
func ExtensionOperationsEnabled() interface{}
```

- *Type:* interface{}

---

##### `ExtensionsTimeBudget`<sup>Required</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionsTimeBudget"></a>

```go
func ExtensionsTimeBudget() *string
```

- *Type:* *string

---

##### `HealthProbeId`<sup>Required</sup> <a name="HealthProbeId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.healthProbeId"></a>

```go
func HealthProbeId() *string
```

- *Type:* *string

---

##### `HostGroupId`<sup>Required</sup> <a name="HostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.hostGroupId"></a>

```go
func HostGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.instances"></a>

```go
func Instances() *f64
```

- *Type:* *f64

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxBidPrice`<sup>Required</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.maxBidPrice"></a>

```go
func MaxBidPrice() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Overprovision`<sup>Required</sup> <a name="Overprovision" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.overprovision"></a>

```go
func Overprovision() interface{}
```

- *Type:* interface{}

---

##### `PlatformFaultDomainCount`<sup>Required</sup> <a name="PlatformFaultDomainCount" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.platformFaultDomainCount"></a>

```go
func PlatformFaultDomainCount() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `ProvisionVmAgent`<sup>Required</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisionVmAgent"></a>

```go
func ProvisionVmAgent() interface{}
```

- *Type:* interface{}

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.proximityPlacementGroupId"></a>

```go
func ProximityPlacementGroupId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SecureBootEnabled`<sup>Required</sup> <a name="SecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secureBootEnabled"></a>

```go
func SecureBootEnabled() interface{}
```

- *Type:* interface{}

---

##### `SinglePlacementGroup`<sup>Required</sup> <a name="SinglePlacementGroup" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.singlePlacementGroup"></a>

```go
func SinglePlacementGroup() interface{}
```

- *Type:* interface{}

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `SourceImageId`<sup>Required</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageId"></a>

```go
func SourceImageId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `UpgradeMode`<sup>Required</sup> <a name="UpgradeMode" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.upgradeMode"></a>

```go
func UpgradeMode() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `VtpmEnabled`<sup>Required</sup> <a name="VtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.vtpmEnabled"></a>

```go
func VtpmEnabled() interface{}
```

- *Type:* interface{}

---

##### `ZoneBalance`<sup>Required</sup> <a name="ZoneBalance" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zoneBalance"></a>

```go
func ZoneBalance() interface{}
```

- *Type:* interface{}

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsVirtualMachineScaleSetAdditionalCapabilities <a name="WindowsVirtualMachineScaleSetAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetAdditionalCapabilities {
	UltraSsdEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_enabled WindowsVirtualMachineScaleSet#ultra_ssd_enabled}. |

---

##### `UltraSsdEnabled`<sup>Optional</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled"></a>

```go
UltraSsdEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_enabled WindowsVirtualMachineScaleSet#ultra_ssd_enabled}.

---

### WindowsVirtualMachineScaleSetAdditionalUnattendContent <a name="WindowsVirtualMachineScaleSetAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetAdditionalUnattendContent {
	Content: *string,
	Setting: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#content WindowsVirtualMachineScaleSet#content}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.property.setting">Setting</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#setting WindowsVirtualMachineScaleSet#setting}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#content WindowsVirtualMachineScaleSet#content}.

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.property.setting"></a>

```go
Setting *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#setting WindowsVirtualMachineScaleSet#setting}.

---

### WindowsVirtualMachineScaleSetAutomaticInstanceRepair <a name="WindowsVirtualMachineScaleSetAutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetAutomaticInstanceRepair {
	Enabled: interface{},
	Action: *string,
	GracePeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#action WindowsVirtualMachineScaleSet#action}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod">GracePeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#grace_period WindowsVirtualMachineScaleSet#grace_period}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#action WindowsVirtualMachineScaleSet#action}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod"></a>

```go
GracePeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#grace_period WindowsVirtualMachineScaleSet#grace_period}.

---

### WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy <a name="WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy {
	DisableAutomaticRollback: interface{},
	EnableAutomaticOsUpgrade: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.disableAutomaticRollback">DisableAutomaticRollback</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disable_automatic_rollback WindowsVirtualMachineScaleSet#disable_automatic_rollback}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.enableAutomaticOsUpgrade">EnableAutomaticOsUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_os_upgrade WindowsVirtualMachineScaleSet#enable_automatic_os_upgrade}. |

---

##### `DisableAutomaticRollback`<sup>Required</sup> <a name="DisableAutomaticRollback" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.disableAutomaticRollback"></a>

```go
DisableAutomaticRollback interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disable_automatic_rollback WindowsVirtualMachineScaleSet#disable_automatic_rollback}.

---

##### `EnableAutomaticOsUpgrade`<sup>Required</sup> <a name="EnableAutomaticOsUpgrade" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.enableAutomaticOsUpgrade"></a>

```go
EnableAutomaticOsUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_os_upgrade WindowsVirtualMachineScaleSet#enable_automatic_os_upgrade}.

---

### WindowsVirtualMachineScaleSetBootDiagnostics <a name="WindowsVirtualMachineScaleSetBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetBootDiagnostics {
	StorageAccountUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri">StorageAccountUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#storage_account_uri WindowsVirtualMachineScaleSet#storage_account_uri}. |

---

##### `StorageAccountUri`<sup>Optional</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri"></a>

```go
StorageAccountUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#storage_account_uri WindowsVirtualMachineScaleSet#storage_account_uri}.

---

### WindowsVirtualMachineScaleSetConfig <a name="WindowsVirtualMachineScaleSetConfig" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdminPassword: *string,
	AdminUsername: *string,
	Instances: *f64,
	Location: *string,
	Name: *string,
	NetworkInterface: interface{},
	OsDisk: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk,
	ResourceGroupName: *string,
	Sku: *string,
	AdditionalCapabilities: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities,
	AdditionalUnattendContent: interface{},
	AutomaticInstanceRepair: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair,
	AutomaticOsUpgradePolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy,
	BootDiagnostics: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics,
	CapacityReservationGroupId: *string,
	ComputerNamePrefix: *string,
	CustomData: *string,
	DataDisk: interface{},
	DoNotRunExtensionsOnOverprovisionedMachines: interface{},
	EdgeZone: *string,
	EnableAutomaticUpdates: interface{},
	EncryptionAtHostEnabled: interface{},
	EvictionPolicy: *string,
	Extension: interface{},
	ExtensionOperationsEnabled: interface{},
	ExtensionsTimeBudget: *string,
	GalleryApplication: interface{},
	HealthProbeId: *string,
	HostGroupId: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity,
	LicenseType: *string,
	MaxBidPrice: *f64,
	Overprovision: interface{},
	Plan: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan,
	PlatformFaultDomainCount: *f64,
	Priority: *string,
	ProvisionVmAgent: interface{},
	ProximityPlacementGroupId: *string,
	RollingUpgradePolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy,
	ScaleIn: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn,
	Secret: interface{},
	SecureBootEnabled: interface{},
	SinglePlacementGroup: interface{},
	SourceImageId: *string,
	SourceImageReference: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference,
	SpotRestore: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore,
	Tags: *map[string]*string,
	TerminationNotification: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts,
	Timezone: *string,
	UpgradeMode: *string,
	UserData: *string,
	VtpmEnabled: interface{},
	WinrmListener: interface{},
	ZoneBalance: interface{},
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#admin_password WindowsVirtualMachineScaleSet#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#admin_username WindowsVirtualMachineScaleSet#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.instances">Instances</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#instances WindowsVirtualMachineScaleSet#instances}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#location WindowsVirtualMachineScaleSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#resource_group_name WindowsVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.additionalUnattendContent">AdditionalUnattendContent</a></code> | <code>interface{}</code> | additional_unattend_content block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.automaticInstanceRepair">AutomaticInstanceRepair</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | automatic_instance_repair block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.automaticOsUpgradePolicy">AutomaticOsUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | automatic_os_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#capacity_reservation_group_id WindowsVirtualMachineScaleSet#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#computer_name_prefix WindowsVirtualMachineScaleSet#computer_name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.customData">CustomData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#custom_data WindowsVirtualMachineScaleSet#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.dataDisk">DataDisk</a></code> | <code>interface{}</code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.doNotRunExtensionsOnOverprovisionedMachines">DoNotRunExtensionsOnOverprovisionedMachines</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines WindowsVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.edgeZone">EdgeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#edge_zone WindowsVirtualMachineScaleSet#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_updates WindowsVirtualMachineScaleSet#enable_automatic_updates}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#encryption_at_host_enabled WindowsVirtualMachineScaleSet#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#eviction_policy WindowsVirtualMachineScaleSet#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extension">Extension</a></code> | <code>interface{}</code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extensionOperationsEnabled">ExtensionOperationsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#extension_operations_enabled WindowsVirtualMachineScaleSet#extension_operations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#extensions_time_budget WindowsVirtualMachineScaleSet#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.galleryApplication">GalleryApplication</a></code> | <code>interface{}</code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.healthProbeId">HealthProbeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#health_probe_id WindowsVirtualMachineScaleSet#health_probe_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.hostGroupId">HostGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#host_group_id WindowsVirtualMachineScaleSet#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#id WindowsVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#license_type WindowsVirtualMachineScaleSet#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.maxBidPrice">MaxBidPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#max_bid_price WindowsVirtualMachineScaleSet#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.overprovision">Overprovision</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#overprovision WindowsVirtualMachineScaleSet#overprovision}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.platformFaultDomainCount">PlatformFaultDomainCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#platform_fault_domain_count WindowsVirtualMachineScaleSet#platform_fault_domain_count}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.priority">Priority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#priority WindowsVirtualMachineScaleSet#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#provision_vm_agent WindowsVirtualMachineScaleSet#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#proximity_placement_group_id WindowsVirtualMachineScaleSet#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.rollingUpgradePolicy">RollingUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a></code> | rolling_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.scaleIn">ScaleIn</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a></code> | scale_in block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.secureBootEnabled">SecureBootEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#secure_boot_enabled WindowsVirtualMachineScaleSet#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.singlePlacementGroup">SinglePlacementGroup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#single_placement_group WindowsVirtualMachineScaleSet#single_placement_group}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sourceImageId">SourceImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#source_image_id WindowsVirtualMachineScaleSet#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.spotRestore">SpotRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a></code> | spot_restore block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#tags WindowsVirtualMachineScaleSet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts">WindowsVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#timezone WindowsVirtualMachineScaleSet#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.upgradeMode">UpgradeMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#upgrade_mode WindowsVirtualMachineScaleSet#upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#user_data WindowsVirtualMachineScaleSet#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.vtpmEnabled">VtpmEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#vtpm_enabled WindowsVirtualMachineScaleSet#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.winrmListener">WinrmListener</a></code> | <code>interface{}</code> | winrm_listener block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.zoneBalance">ZoneBalance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#zone_balance WindowsVirtualMachineScaleSet#zone_balance}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#zones WindowsVirtualMachineScaleSet#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#admin_password WindowsVirtualMachineScaleSet#admin_password}.

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.adminUsername"></a>

```go
AdminUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#admin_username WindowsVirtualMachineScaleSet#admin_username}.

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.instances"></a>

```go
Instances *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#instances WindowsVirtualMachineScaleSet#instances}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#location WindowsVirtualMachineScaleSet#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#network_interface WindowsVirtualMachineScaleSet#network_interface}

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.osDisk"></a>

```go
OsDisk WindowsVirtualMachineScaleSetOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#os_disk WindowsVirtualMachineScaleSet#os_disk}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#resource_group_name WindowsVirtualMachineScaleSet#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}.

---

##### `AdditionalCapabilities`<sup>Optional</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.additionalCapabilities"></a>

```go
AdditionalCapabilities WindowsVirtualMachineScaleSetAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#additional_capabilities WindowsVirtualMachineScaleSet#additional_capabilities}

---

##### `AdditionalUnattendContent`<sup>Optional</sup> <a name="AdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.additionalUnattendContent"></a>

```go
AdditionalUnattendContent interface{}
```

- *Type:* interface{}

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#additional_unattend_content WindowsVirtualMachineScaleSet#additional_unattend_content}

---

##### `AutomaticInstanceRepair`<sup>Optional</sup> <a name="AutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.automaticInstanceRepair"></a>

```go
AutomaticInstanceRepair WindowsVirtualMachineScaleSetAutomaticInstanceRepair
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a>

automatic_instance_repair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#automatic_instance_repair WindowsVirtualMachineScaleSet#automatic_instance_repair}

---

##### `AutomaticOsUpgradePolicy`<sup>Optional</sup> <a name="AutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.automaticOsUpgradePolicy"></a>

```go
AutomaticOsUpgradePolicy WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

automatic_os_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#automatic_os_upgrade_policy WindowsVirtualMachineScaleSet#automatic_os_upgrade_policy}

---

##### `BootDiagnostics`<sup>Optional</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.bootDiagnostics"></a>

```go
BootDiagnostics WindowsVirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#boot_diagnostics WindowsVirtualMachineScaleSet#boot_diagnostics}

---

##### `CapacityReservationGroupId`<sup>Optional</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.capacityReservationGroupId"></a>

```go
CapacityReservationGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#capacity_reservation_group_id WindowsVirtualMachineScaleSet#capacity_reservation_group_id}.

---

##### `ComputerNamePrefix`<sup>Optional</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.computerNamePrefix"></a>

```go
ComputerNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#computer_name_prefix WindowsVirtualMachineScaleSet#computer_name_prefix}.

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.customData"></a>

```go
CustomData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#custom_data WindowsVirtualMachineScaleSet#custom_data}.

---

##### `DataDisk`<sup>Optional</sup> <a name="DataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.dataDisk"></a>

```go
DataDisk interface{}
```

- *Type:* interface{}

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#data_disk WindowsVirtualMachineScaleSet#data_disk}

---

##### `DoNotRunExtensionsOnOverprovisionedMachines`<sup>Optional</sup> <a name="DoNotRunExtensionsOnOverprovisionedMachines" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.doNotRunExtensionsOnOverprovisionedMachines"></a>

```go
DoNotRunExtensionsOnOverprovisionedMachines interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines WindowsVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}.

---

##### `EdgeZone`<sup>Optional</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.edgeZone"></a>

```go
EdgeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#edge_zone WindowsVirtualMachineScaleSet#edge_zone}.

---

##### `EnableAutomaticUpdates`<sup>Optional</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.enableAutomaticUpdates"></a>

```go
EnableAutomaticUpdates interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_updates WindowsVirtualMachineScaleSet#enable_automatic_updates}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled"></a>

```go
EncryptionAtHostEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#encryption_at_host_enabled WindowsVirtualMachineScaleSet#encryption_at_host_enabled}.

---

##### `EvictionPolicy`<sup>Optional</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.evictionPolicy"></a>

```go
EvictionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#eviction_policy WindowsVirtualMachineScaleSet#eviction_policy}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extension"></a>

```go
Extension interface{}
```

- *Type:* interface{}

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#extension WindowsVirtualMachineScaleSet#extension}

---

##### `ExtensionOperationsEnabled`<sup>Optional</sup> <a name="ExtensionOperationsEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extensionOperationsEnabled"></a>

```go
ExtensionOperationsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#extension_operations_enabled WindowsVirtualMachineScaleSet#extension_operations_enabled}.

---

##### `ExtensionsTimeBudget`<sup>Optional</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extensionsTimeBudget"></a>

```go
ExtensionsTimeBudget *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#extensions_time_budget WindowsVirtualMachineScaleSet#extensions_time_budget}.

---

##### `GalleryApplication`<sup>Optional</sup> <a name="GalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.galleryApplication"></a>

```go
GalleryApplication interface{}
```

- *Type:* interface{}

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#gallery_application WindowsVirtualMachineScaleSet#gallery_application}

---

##### `HealthProbeId`<sup>Optional</sup> <a name="HealthProbeId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.healthProbeId"></a>

```go
HealthProbeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#health_probe_id WindowsVirtualMachineScaleSet#health_probe_id}.

---

##### `HostGroupId`<sup>Optional</sup> <a name="HostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.hostGroupId"></a>

```go
HostGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#host_group_id WindowsVirtualMachineScaleSet#host_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#id WindowsVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.identity"></a>

```go
Identity WindowsVirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#identity WindowsVirtualMachineScaleSet#identity}

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#license_type WindowsVirtualMachineScaleSet#license_type}.

---

##### `MaxBidPrice`<sup>Optional</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.maxBidPrice"></a>

```go
MaxBidPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#max_bid_price WindowsVirtualMachineScaleSet#max_bid_price}.

---

##### `Overprovision`<sup>Optional</sup> <a name="Overprovision" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.overprovision"></a>

```go
Overprovision interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#overprovision WindowsVirtualMachineScaleSet#overprovision}.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.plan"></a>

```go
Plan WindowsVirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#plan WindowsVirtualMachineScaleSet#plan}

---

##### `PlatformFaultDomainCount`<sup>Optional</sup> <a name="PlatformFaultDomainCount" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.platformFaultDomainCount"></a>

```go
PlatformFaultDomainCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#platform_fault_domain_count WindowsVirtualMachineScaleSet#platform_fault_domain_count}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#priority WindowsVirtualMachineScaleSet#priority}.

---

##### `ProvisionVmAgent`<sup>Optional</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provisionVmAgent"></a>

```go
ProvisionVmAgent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#provision_vm_agent WindowsVirtualMachineScaleSet#provision_vm_agent}.

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.proximityPlacementGroupId"></a>

```go
ProximityPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#proximity_placement_group_id WindowsVirtualMachineScaleSet#proximity_placement_group_id}.

---

##### `RollingUpgradePolicy`<sup>Optional</sup> <a name="RollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.rollingUpgradePolicy"></a>

```go
RollingUpgradePolicy WindowsVirtualMachineScaleSetRollingUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a>

rolling_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#rolling_upgrade_policy WindowsVirtualMachineScaleSet#rolling_upgrade_policy}

---

##### `ScaleIn`<sup>Optional</sup> <a name="ScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.scaleIn"></a>

```go
ScaleIn WindowsVirtualMachineScaleSetScaleIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a>

scale_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#scale_in WindowsVirtualMachineScaleSet#scale_in}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#secret WindowsVirtualMachineScaleSet#secret}

---

##### `SecureBootEnabled`<sup>Optional</sup> <a name="SecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.secureBootEnabled"></a>

```go
SecureBootEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#secure_boot_enabled WindowsVirtualMachineScaleSet#secure_boot_enabled}.

---

##### `SinglePlacementGroup`<sup>Optional</sup> <a name="SinglePlacementGroup" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.singlePlacementGroup"></a>

```go
SinglePlacementGroup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#single_placement_group WindowsVirtualMachineScaleSet#single_placement_group}.

---

##### `SourceImageId`<sup>Optional</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sourceImageId"></a>

```go
SourceImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#source_image_id WindowsVirtualMachineScaleSet#source_image_id}.

---

##### `SourceImageReference`<sup>Optional</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sourceImageReference"></a>

```go
SourceImageReference WindowsVirtualMachineScaleSetSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#source_image_reference WindowsVirtualMachineScaleSet#source_image_reference}

---

##### `SpotRestore`<sup>Optional</sup> <a name="SpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.spotRestore"></a>

```go
SpotRestore WindowsVirtualMachineScaleSetSpotRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a>

spot_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#spot_restore WindowsVirtualMachineScaleSet#spot_restore}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#tags WindowsVirtualMachineScaleSet#tags}.

---

##### `TerminationNotification`<sup>Optional</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.terminationNotification"></a>

```go
TerminationNotification WindowsVirtualMachineScaleSetTerminationNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#termination_notification WindowsVirtualMachineScaleSet#termination_notification}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.timeouts"></a>

```go
Timeouts WindowsVirtualMachineScaleSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts">WindowsVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#timeouts WindowsVirtualMachineScaleSet#timeouts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#timezone WindowsVirtualMachineScaleSet#timezone}.

---

##### `UpgradeMode`<sup>Optional</sup> <a name="UpgradeMode" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.upgradeMode"></a>

```go
UpgradeMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#upgrade_mode WindowsVirtualMachineScaleSet#upgrade_mode}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#user_data WindowsVirtualMachineScaleSet#user_data}.

---

##### `VtpmEnabled`<sup>Optional</sup> <a name="VtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.vtpmEnabled"></a>

```go
VtpmEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#vtpm_enabled WindowsVirtualMachineScaleSet#vtpm_enabled}.

---

##### `WinrmListener`<sup>Optional</sup> <a name="WinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.winrmListener"></a>

```go
WinrmListener interface{}
```

- *Type:* interface{}

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#winrm_listener WindowsVirtualMachineScaleSet#winrm_listener}

---

##### `ZoneBalance`<sup>Optional</sup> <a name="ZoneBalance" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.zoneBalance"></a>

```go
ZoneBalance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#zone_balance WindowsVirtualMachineScaleSet#zone_balance}.

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#zones WindowsVirtualMachineScaleSet#zones}.

---

### WindowsVirtualMachineScaleSetDataDisk <a name="WindowsVirtualMachineScaleSetDataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetDataDisk {
	Caching: *string,
	DiskSizeGb: *f64,
	Lun: *f64,
	StorageAccountType: *string,
	CreateOption: *string,
	DiskEncryptionSetId: *string,
	Name: *string,
	UltraSsdDiskIopsReadWrite: *f64,
	UltraSsdDiskMbpsReadWrite: *f64,
	WriteAcceleratorEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.caching">Caching</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.lun">Lun</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#lun WindowsVirtualMachineScaleSet#lun}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.createOption">CreateOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#create_option WindowsVirtualMachineScaleSet#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.ultraSsdDiskIopsReadWrite">UltraSsdDiskIopsReadWrite</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_iops_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_iops_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.ultraSsdDiskMbpsReadWrite">UltraSsdDiskMbpsReadWrite</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_mbps_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_mbps_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.caching"></a>

```go
Caching *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}.

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}.

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.lun"></a>

```go
Lun *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#lun WindowsVirtualMachineScaleSet#lun}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.storageAccountType"></a>

```go
StorageAccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}.

---

##### `CreateOption`<sup>Optional</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.createOption"></a>

```go
CreateOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#create_option WindowsVirtualMachineScaleSet#create_option}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId"></a>

```go
DiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `UltraSsdDiskIopsReadWrite`<sup>Optional</sup> <a name="UltraSsdDiskIopsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.ultraSsdDiskIopsReadWrite"></a>

```go
UltraSsdDiskIopsReadWrite *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_iops_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_iops_read_write}.

---

##### `UltraSsdDiskMbpsReadWrite`<sup>Optional</sup> <a name="UltraSsdDiskMbpsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.ultraSsdDiskMbpsReadWrite"></a>

```go
UltraSsdDiskMbpsReadWrite *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_mbps_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_mbps_read_write}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled"></a>

```go
WriteAcceleratorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}.

---

### WindowsVirtualMachineScaleSetExtension <a name="WindowsVirtualMachineScaleSetExtension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetExtension {
	Name: *string,
	Publisher: *string,
	Type: *string,
	TypeHandlerVersion: *string,
	AutomaticUpgradeEnabled: interface{},
	AutoUpgradeMinorVersion: interface{},
	ForceUpdateTag: *string,
	ProtectedSettings: *string,
	ProtectedSettingsFromKeyVault: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault,
	ProvisionAfterExtensions: *[]*string,
	Settings: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#type_handler_version WindowsVirtualMachineScaleSet#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#automatic_upgrade_enabled WindowsVirtualMachineScaleSet#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#auto_upgrade_minor_version WindowsVirtualMachineScaleSet#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#force_update_tag WindowsVirtualMachineScaleSet#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.protectedSettings">ProtectedSettings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#protected_settings WindowsVirtualMachineScaleSet#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#provision_after_extensions WindowsVirtualMachineScaleSet#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.settings">Settings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#settings WindowsVirtualMachineScaleSet#settings}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}.

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.typeHandlerVersion"></a>

```go
TypeHandlerVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#type_handler_version WindowsVirtualMachineScaleSet#type_handler_version}.

---

##### `AutomaticUpgradeEnabled`<sup>Optional</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.automaticUpgradeEnabled"></a>

```go
AutomaticUpgradeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#automatic_upgrade_enabled WindowsVirtualMachineScaleSet#automatic_upgrade_enabled}.

---

##### `AutoUpgradeMinorVersion`<sup>Optional</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion"></a>

```go
AutoUpgradeMinorVersion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#auto_upgrade_minor_version WindowsVirtualMachineScaleSet#auto_upgrade_minor_version}.

---

##### `ForceUpdateTag`<sup>Optional</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.forceUpdateTag"></a>

```go
ForceUpdateTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#force_update_tag WindowsVirtualMachineScaleSet#force_update_tag}.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.protectedSettings"></a>

```go
ProtectedSettings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#protected_settings WindowsVirtualMachineScaleSet#protected_settings}.

---

##### `ProtectedSettingsFromKeyVault`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.protectedSettingsFromKeyVault"></a>

```go
ProtectedSettingsFromKeyVault WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#protected_settings_from_key_vault WindowsVirtualMachineScaleSet#protected_settings_from_key_vault}

---

##### `ProvisionAfterExtensions`<sup>Optional</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.provisionAfterExtensions"></a>

```go
ProvisionAfterExtensions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#provision_after_extensions WindowsVirtualMachineScaleSet#provision_after_extensions}.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.settings"></a>

```go
Settings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#settings WindowsVirtualMachineScaleSet#settings}.

---

### WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault <a name="WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault {
	SecretUrl: *string,
	SourceVaultId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl">SecretUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#secret_url WindowsVirtualMachineScaleSet#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#source_vault_id WindowsVirtualMachineScaleSet#source_vault_id}. |

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl"></a>

```go
SecretUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#secret_url WindowsVirtualMachineScaleSet#secret_url}.

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId"></a>

```go
SourceVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#source_vault_id WindowsVirtualMachineScaleSet#source_vault_id}.

---

### WindowsVirtualMachineScaleSetGalleryApplication <a name="WindowsVirtualMachineScaleSetGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetGalleryApplication {
	VersionId: *string,
	ConfigurationBlobUri: *string,
	Order: *f64,
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.versionId">VersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#version_id WindowsVirtualMachineScaleSet#version_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.configurationBlobUri">ConfigurationBlobUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#configuration_blob_uri WindowsVirtualMachineScaleSet#configuration_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#order WindowsVirtualMachineScaleSet#order}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.tag">Tag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}. |

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#version_id WindowsVirtualMachineScaleSet#version_id}.

---

##### `ConfigurationBlobUri`<sup>Optional</sup> <a name="ConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.configurationBlobUri"></a>

```go
ConfigurationBlobUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#configuration_blob_uri WindowsVirtualMachineScaleSet#configuration_blob_uri}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#order WindowsVirtualMachineScaleSet#order}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}.

---

### WindowsVirtualMachineScaleSetIdentity <a name="WindowsVirtualMachineScaleSetIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#identity_ids WindowsVirtualMachineScaleSet#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#identity_ids WindowsVirtualMachineScaleSet#identity_ids}.

---

### WindowsVirtualMachineScaleSetNetworkInterface <a name="WindowsVirtualMachineScaleSetNetworkInterface" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetNetworkInterface {
	IpConfiguration: interface{},
	Name: *string,
	DnsServers: *[]*string,
	EnableAcceleratedNetworking: interface{},
	EnableIpForwarding: interface{},
	NetworkSecurityGroupId: *string,
	Primary: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.ipConfiguration">IpConfiguration</a></code> | <code>interface{}</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#dns_servers WindowsVirtualMachineScaleSet#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.enableAcceleratedNetworking">EnableAcceleratedNetworking</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enable_accelerated_networking WindowsVirtualMachineScaleSet#enable_accelerated_networking}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enable_ip_forwarding WindowsVirtualMachineScaleSet#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#network_security_group_id WindowsVirtualMachineScaleSet#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.primary">Primary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}. |

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.ipConfiguration"></a>

```go
IpConfiguration interface{}
```

- *Type:* interface{}

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#ip_configuration WindowsVirtualMachineScaleSet#ip_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.dnsServers"></a>

```go
DnsServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#dns_servers WindowsVirtualMachineScaleSet#dns_servers}.

---

##### `EnableAcceleratedNetworking`<sup>Optional</sup> <a name="EnableAcceleratedNetworking" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.enableAcceleratedNetworking"></a>

```go
EnableAcceleratedNetworking interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enable_accelerated_networking WindowsVirtualMachineScaleSet#enable_accelerated_networking}.

---

##### `EnableIpForwarding`<sup>Optional</sup> <a name="EnableIpForwarding" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding"></a>

```go
EnableIpForwarding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enable_ip_forwarding WindowsVirtualMachineScaleSet#enable_ip_forwarding}.

---

##### `NetworkSecurityGroupId`<sup>Optional</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId"></a>

```go
NetworkSecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#network_security_group_id WindowsVirtualMachineScaleSet#network_security_group_id}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}.

---

### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
	Name: *string,
	ApplicationGatewayBackendAddressPoolIds: *[]*string,
	ApplicationSecurityGroupIds: *[]*string,
	LoadBalancerBackendAddressPoolIds: *[]*string,
	LoadBalancerInboundNatRulesIds: *[]*string,
	Primary: interface{},
	PublicIpAddress: interface{},
	SubnetId: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#application_gateway_backend_address_pool_ids WindowsVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#application_security_group_ids WindowsVirtualMachineScaleSet#application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_backend_address_pool_ids WindowsVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids WindowsVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary">Primary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.publicIpAddress">PublicIpAddress</a></code> | <code>interface{}</code> | public_ip_address block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#subnet_id WindowsVirtualMachineScaleSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Optional</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationGatewayBackendAddressPoolIds"></a>

```go
ApplicationGatewayBackendAddressPoolIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#application_gateway_backend_address_pool_ids WindowsVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}.

---

##### `ApplicationSecurityGroupIds`<sup>Optional</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationSecurityGroupIds"></a>

```go
ApplicationSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#application_security_group_ids WindowsVirtualMachineScaleSet#application_security_group_ids}.

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds"></a>

```go
LoadBalancerBackendAddressPoolIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_backend_address_pool_ids WindowsVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}.

---

##### `LoadBalancerInboundNatRulesIds`<sup>Optional</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerInboundNatRulesIds"></a>

```go
LoadBalancerInboundNatRulesIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids WindowsVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}.

---

##### `PublicIpAddress`<sup>Optional</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.publicIpAddress"></a>

```go
PublicIpAddress interface{}
```

- *Type:* interface{}

public_ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#public_ip_address WindowsVirtualMachineScaleSet#public_ip_address}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#subnet_id WindowsVirtualMachineScaleSet#subnet_id}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}.

---

### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
	Name: *string,
	DomainNameLabel: *string,
	IdleTimeoutInMinutes: *f64,
	IpTag: interface{},
	PublicIpPrefixId: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.domainNameLabel">DomainNameLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#domain_name_label WindowsVirtualMachineScaleSet#domain_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#idle_timeout_in_minutes WindowsVirtualMachineScaleSet#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.ipTag">IpTag</a></code> | <code>interface{}</code> | ip_tag block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.publicIpPrefixId">PublicIpPrefixId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#public_ip_prefix_id WindowsVirtualMachineScaleSet#public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `DomainNameLabel`<sup>Optional</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.domainNameLabel"></a>

```go
DomainNameLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#domain_name_label WindowsVirtualMachineScaleSet#domain_name_label}.

---

##### `IdleTimeoutInMinutes`<sup>Optional</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.idleTimeoutInMinutes"></a>

```go
IdleTimeoutInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#idle_timeout_in_minutes WindowsVirtualMachineScaleSet#idle_timeout_in_minutes}.

---

##### `IpTag`<sup>Optional</sup> <a name="IpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.ipTag"></a>

```go
IpTag interface{}
```

- *Type:* interface{}

ip_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#ip_tag WindowsVirtualMachineScaleSet#ip_tag}

---

##### `PublicIpPrefixId`<sup>Optional</sup> <a name="PublicIpPrefixId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.publicIpPrefixId"></a>

```go
PublicIpPrefixId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#public_ip_prefix_id WindowsVirtualMachineScaleSet#public_ip_prefix_id}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}.

---

### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
	Tag: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.tag">Tag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}. |

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}.

---

### WindowsVirtualMachineScaleSetOsDisk <a name="WindowsVirtualMachineScaleSetOsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetOsDisk {
	Caching: *string,
	StorageAccountType: *string,
	DiffDiskSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings,
	DiskEncryptionSetId: *string,
	DiskSizeGb: *f64,
	SecureVmDiskEncryptionSetId: *string,
	SecurityEncryptionType: *string,
	WriteAcceleratorEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.caching">Caching</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#secure_vm_disk_encryption_set_id WindowsVirtualMachineScaleSet#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.securityEncryptionType">SecurityEncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#security_encryption_type WindowsVirtualMachineScaleSet#security_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.caching"></a>

```go
Caching *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.storageAccountType"></a>

```go
StorageAccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}.

---

##### `DiffDiskSettings`<sup>Optional</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diffDiskSettings"></a>

```go
DiffDiskSettings WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#diff_disk_settings WindowsVirtualMachineScaleSet#diff_disk_settings}

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId"></a>

```go
DiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}.

---

##### `SecureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.secureVmDiskEncryptionSetId"></a>

```go
SecureVmDiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#secure_vm_disk_encryption_set_id WindowsVirtualMachineScaleSet#secure_vm_disk_encryption_set_id}.

---

##### `SecurityEncryptionType`<sup>Optional</sup> <a name="SecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.securityEncryptionType"></a>

```go
SecurityEncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#security_encryption_type WindowsVirtualMachineScaleSet#security_encryption_type}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled"></a>

```go
WriteAcceleratorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}.

---

### WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings <a name="WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings {
	Option: *string,
	Placement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option">Option</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#option WindowsVirtualMachineScaleSet#option}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.property.placement">Placement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#placement WindowsVirtualMachineScaleSet#placement}. |

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option"></a>

```go
Option *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#option WindowsVirtualMachineScaleSet#option}.

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.property.placement"></a>

```go
Placement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#placement WindowsVirtualMachineScaleSet#placement}.

---

### WindowsVirtualMachineScaleSetPlan <a name="WindowsVirtualMachineScaleSetPlan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetPlan {
	Name: *string,
	Product: *string,
	Publisher: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#product WindowsVirtualMachineScaleSet#product}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#product WindowsVirtualMachineScaleSet#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}.

---

### WindowsVirtualMachineScaleSetRollingUpgradePolicy <a name="WindowsVirtualMachineScaleSetRollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetRollingUpgradePolicy {
	MaxBatchInstancePercent: *f64,
	MaxUnhealthyInstancePercent: *f64,
	MaxUnhealthyUpgradedInstancePercent: *f64,
	PauseTimeBetweenBatches: *string,
	CrossZoneUpgradesEnabled: interface{},
	MaximumSurgeInstancesEnabled: interface{},
	PrioritizeUnhealthyInstancesEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxBatchInstancePercent">MaxBatchInstancePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#max_batch_instance_percent WindowsVirtualMachineScaleSet#max_batch_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyInstancePercent">MaxUnhealthyInstancePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyUpgradedInstancePercent">MaxUnhealthyUpgradedInstancePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.pauseTimeBetweenBatches">PauseTimeBetweenBatches</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#pause_time_between_batches WindowsVirtualMachineScaleSet#pause_time_between_batches}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.crossZoneUpgradesEnabled">CrossZoneUpgradesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#cross_zone_upgrades_enabled WindowsVirtualMachineScaleSet#cross_zone_upgrades_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maximumSurgeInstancesEnabled">MaximumSurgeInstancesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#maximum_surge_instances_enabled WindowsVirtualMachineScaleSet#maximum_surge_instances_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.prioritizeUnhealthyInstancesEnabled">PrioritizeUnhealthyInstancesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#prioritize_unhealthy_instances_enabled WindowsVirtualMachineScaleSet#prioritize_unhealthy_instances_enabled}. |

---

##### `MaxBatchInstancePercent`<sup>Required</sup> <a name="MaxBatchInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxBatchInstancePercent"></a>

```go
MaxBatchInstancePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#max_batch_instance_percent WindowsVirtualMachineScaleSet#max_batch_instance_percent}.

---

##### `MaxUnhealthyInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyInstancePercent"></a>

```go
MaxUnhealthyInstancePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_instance_percent}.

---

##### `MaxUnhealthyUpgradedInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyUpgradedInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyUpgradedInstancePercent"></a>

```go
MaxUnhealthyUpgradedInstancePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}.

---

##### `PauseTimeBetweenBatches`<sup>Required</sup> <a name="PauseTimeBetweenBatches" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.pauseTimeBetweenBatches"></a>

```go
PauseTimeBetweenBatches *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#pause_time_between_batches WindowsVirtualMachineScaleSet#pause_time_between_batches}.

---

##### `CrossZoneUpgradesEnabled`<sup>Optional</sup> <a name="CrossZoneUpgradesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.crossZoneUpgradesEnabled"></a>

```go
CrossZoneUpgradesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#cross_zone_upgrades_enabled WindowsVirtualMachineScaleSet#cross_zone_upgrades_enabled}.

---

##### `MaximumSurgeInstancesEnabled`<sup>Optional</sup> <a name="MaximumSurgeInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maximumSurgeInstancesEnabled"></a>

```go
MaximumSurgeInstancesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#maximum_surge_instances_enabled WindowsVirtualMachineScaleSet#maximum_surge_instances_enabled}.

---

##### `PrioritizeUnhealthyInstancesEnabled`<sup>Optional</sup> <a name="PrioritizeUnhealthyInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.prioritizeUnhealthyInstancesEnabled"></a>

```go
PrioritizeUnhealthyInstancesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#prioritize_unhealthy_instances_enabled WindowsVirtualMachineScaleSet#prioritize_unhealthy_instances_enabled}.

---

### WindowsVirtualMachineScaleSetScaleIn <a name="WindowsVirtualMachineScaleSetScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetScaleIn {
	ForceDeletionEnabled: interface{},
	Rule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.property.forceDeletionEnabled">ForceDeletionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#force_deletion_enabled WindowsVirtualMachineScaleSet#force_deletion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.property.rule">Rule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#rule WindowsVirtualMachineScaleSet#rule}. |

---

##### `ForceDeletionEnabled`<sup>Optional</sup> <a name="ForceDeletionEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.property.forceDeletionEnabled"></a>

```go
ForceDeletionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#force_deletion_enabled WindowsVirtualMachineScaleSet#force_deletion_enabled}.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#rule WindowsVirtualMachineScaleSet#rule}.

---

### WindowsVirtualMachineScaleSetSecret <a name="WindowsVirtualMachineScaleSetSecret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetSecret {
	Certificate: interface{},
	KeyVaultId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.property.certificate">Certificate</a></code> | <code>interface{}</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#key_vault_id WindowsVirtualMachineScaleSet#key_vault_id}. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.property.certificate"></a>

```go
Certificate interface{}
```

- *Type:* interface{}

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#certificate WindowsVirtualMachineScaleSet#certificate}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#key_vault_id WindowsVirtualMachineScaleSet#key_vault_id}.

---

### WindowsVirtualMachineScaleSetSecretCertificate <a name="WindowsVirtualMachineScaleSetSecretCertificate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetSecretCertificate {
	Store: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.property.store">Store</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#store WindowsVirtualMachineScaleSet#store}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#url WindowsVirtualMachineScaleSet#url}. |

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.property.store"></a>

```go
Store *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#store WindowsVirtualMachineScaleSet#store}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#url WindowsVirtualMachineScaleSet#url}.

---

### WindowsVirtualMachineScaleSetSourceImageReference <a name="WindowsVirtualMachineScaleSetSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetSourceImageReference {
	Offer: *string,
	Publisher: *string,
	Sku: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#offer WindowsVirtualMachineScaleSet#offer}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#offer WindowsVirtualMachineScaleSet#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}.

---

### WindowsVirtualMachineScaleSetSpotRestore <a name="WindowsVirtualMachineScaleSetSpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetSpotRestore {
	Enabled: interface{},
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.property.timeout">Timeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}.

---

### WindowsVirtualMachineScaleSetTerminationNotification <a name="WindowsVirtualMachineScaleSetTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetTerminationNotification {
	Enabled: interface{},
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.property.timeout">Timeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}.

---

### WindowsVirtualMachineScaleSetTimeouts <a name="WindowsVirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#create WindowsVirtualMachineScaleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#delete WindowsVirtualMachineScaleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#read WindowsVirtualMachineScaleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#update WindowsVirtualMachineScaleSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#create WindowsVirtualMachineScaleSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#delete WindowsVirtualMachineScaleSet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#read WindowsVirtualMachineScaleSet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#update WindowsVirtualMachineScaleSet#update}.

---

### WindowsVirtualMachineScaleSetWinrmListener <a name="WindowsVirtualMachineScaleSetWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

&windowsvirtualmachinescaleset.WindowsVirtualMachineScaleSetWinrmListener {
	Protocol: *string,
	CertificateUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#protocol WindowsVirtualMachineScaleSet#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.property.certificateUrl">CertificateUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#certificate_url WindowsVirtualMachineScaleSet#certificate_url}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#protocol WindowsVirtualMachineScaleSet#protocol}.

---

##### `CertificateUrl`<sup>Optional</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.property.certificateUrl"></a>

```go
CertificateUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/windows_virtual_machine_scale_set#certificate_url WindowsVirtualMachineScaleSet#certificate_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference <a name="WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUltraSsdEnabled` <a name="ResetUltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```go
func ResetUltraSsdEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">UltraSsdEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UltraSsdEnabledInput`<sup>Optional</sup> <a name="UltraSsdEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```go
func UltraSsdEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UltraSsdEnabled`<sup>Required</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```go
func UltraSsdEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a>

---


### WindowsVirtualMachineScaleSetAdditionalUnattendContentList <a name="WindowsVirtualMachineScaleSetAdditionalUnattendContentList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetAdditionalUnattendContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetAdditionalUnattendContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference <a name="WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.settingInput">SettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.setting">Setting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `SettingInput`<sup>Optional</sup> <a name="SettingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.settingInput"></a>

```go
func SettingInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.setting"></a>

```go
func Setting() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference <a name="WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetGracePeriod"></a>

```go
func ResetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput"></a>

```go
func GracePeriodInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod"></a>

```go
func GracePeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetAutomaticInstanceRepair
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a>

---


### WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference <a name="WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollbackInput">DisableAutomaticRollbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgradeInput">EnableAutomaticOsUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollback">DisableAutomaticRollback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgrade">EnableAutomaticOsUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableAutomaticRollbackInput`<sup>Optional</sup> <a name="DisableAutomaticRollbackInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollbackInput"></a>

```go
func DisableAutomaticRollbackInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAutomaticOsUpgradeInput`<sup>Optional</sup> <a name="EnableAutomaticOsUpgradeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgradeInput"></a>

```go
func EnableAutomaticOsUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `DisableAutomaticRollback`<sup>Required</sup> <a name="DisableAutomaticRollback" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollback"></a>

```go
func DisableAutomaticRollback() interface{}
```

- *Type:* interface{}

---

##### `EnableAutomaticOsUpgrade`<sup>Required</sup> <a name="EnableAutomaticOsUpgrade" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgrade"></a>

```go
func EnableAutomaticOsUpgrade() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---


### WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference <a name="WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetBootDiagnosticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageAccountUri` <a name="ResetStorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.resetStorageAccountUri"></a>

```go
func ResetStorageAccountUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput">StorageAccountUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri">StorageAccountUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageAccountUriInput`<sup>Optional</sup> <a name="StorageAccountUriInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```go
func StorageAccountUriInput() *string
```

- *Type:* *string

---

##### `StorageAccountUri`<sup>Required</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```go
func StorageAccountUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a>

---


### WindowsVirtualMachineScaleSetDataDiskList <a name="WindowsVirtualMachineScaleSetDataDiskList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetDataDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetDataDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetDataDiskOutputReference <a name="WindowsVirtualMachineScaleSetDataDiskOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetDataDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetDataDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreateOption` <a name="ResetCreateOption" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetCreateOption"></a>

```go
func ResetCreateOption()
```

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetDiskEncryptionSetId"></a>

```go
func ResetDiskEncryptionSetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetUltraSsdDiskIopsReadWrite` <a name="ResetUltraSsdDiskIopsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskIopsReadWrite"></a>

```go
func ResetUltraSsdDiskIopsReadWrite()
```

##### `ResetUltraSsdDiskMbpsReadWrite` <a name="ResetUltraSsdDiskMbpsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskMbpsReadWrite"></a>

```go
func ResetUltraSsdDiskMbpsReadWrite()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```go
func ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput">CreateOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.lunInput">LunInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWriteInput">UltraSsdDiskIopsReadWriteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWriteInput">UltraSsdDiskMbpsReadWriteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.caching">Caching</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.createOption">CreateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.lun">Lun</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWrite">UltraSsdDiskIopsReadWrite</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWrite">UltraSsdDiskMbpsReadWrite</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput"></a>

```go
func CachingInput() *string
```

- *Type:* *string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput"></a>

```go
func CreateOptionInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```go
func DiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.lunInput"></a>

```go
func LunInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput"></a>

```go
func StorageAccountTypeInput() *string
```

- *Type:* *string

---

##### `UltraSsdDiskIopsReadWriteInput`<sup>Optional</sup> <a name="UltraSsdDiskIopsReadWriteInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWriteInput"></a>

```go
func UltraSsdDiskIopsReadWriteInput() *f64
```

- *Type:* *f64

---

##### `UltraSsdDiskMbpsReadWriteInput`<sup>Optional</sup> <a name="UltraSsdDiskMbpsReadWriteInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWriteInput"></a>

```go
func UltraSsdDiskMbpsReadWriteInput() *f64
```

- *Type:* *f64

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```go
func WriteAcceleratorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.caching"></a>

```go
func Caching() *string
```

- *Type:* *string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.createOption"></a>

```go
func CreateOption() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId"></a>

```go
func DiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.lun"></a>

```go
func Lun() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `UltraSsdDiskIopsReadWrite`<sup>Required</sup> <a name="UltraSsdDiskIopsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWrite"></a>

```go
func UltraSsdDiskIopsReadWrite() *f64
```

- *Type:* *f64

---

##### `UltraSsdDiskMbpsReadWrite`<sup>Required</sup> <a name="UltraSsdDiskMbpsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWrite"></a>

```go
func UltraSsdDiskMbpsReadWrite() *f64
```

- *Type:* *f64

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled"></a>

```go
func WriteAcceleratorEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetExtensionList <a name="WindowsVirtualMachineScaleSetExtensionList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetExtensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetExtensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetExtensionOutputReference <a name="WindowsVirtualMachineScaleSetExtensionOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetExtensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetExtensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtectedSettingsFromKeyVault` <a name="PutProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault"></a>

```go
func PutProtectedSettingsFromKeyVault(value WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `ResetAutomaticUpgradeEnabled` <a name="ResetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetAutomaticUpgradeEnabled"></a>

```go
func ResetAutomaticUpgradeEnabled()
```

##### `ResetAutoUpgradeMinorVersion` <a name="ResetAutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersion"></a>

```go
func ResetAutoUpgradeMinorVersion()
```

##### `ResetForceUpdateTag` <a name="ResetForceUpdateTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetForceUpdateTag"></a>

```go
func ResetForceUpdateTag()
```

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings"></a>

```go
func ResetProtectedSettings()
```

##### `ResetProtectedSettingsFromKeyVault` <a name="ResetProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettingsFromKeyVault"></a>

```go
func ResetProtectedSettingsFromKeyVault()
```

##### `ResetProvisionAfterExtensions` <a name="ResetProvisionAfterExtensions" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetProvisionAfterExtensions"></a>

```go
func ResetProvisionAfterExtensions()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetSettings"></a>

```go
func ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabledInput">AutomaticUpgradeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput">AutoUpgradeMinorVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTagInput">ForceUpdateTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVaultInput">ProtectedSettingsFromKeyVaultInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput">ProvisionAfterExtensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.settingsInput">SettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput">TypeHandlerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings">ProtectedSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.settings">Settings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtectedSettingsFromKeyVault`<sup>Required</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVault"></a>

```go
func ProtectedSettingsFromKeyVault() WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a>

---

##### `AutomaticUpgradeEnabledInput`<sup>Optional</sup> <a name="AutomaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabledInput"></a>

```go
func AutomaticUpgradeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="AutoUpgradeMinorVersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput"></a>

```go
func AutoUpgradeMinorVersionInput() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateTagInput`<sup>Optional</sup> <a name="ForceUpdateTagInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTagInput"></a>

```go
func ForceUpdateTagInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtectedSettingsFromKeyVaultInput`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVaultInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVaultInput"></a>

```go
func ProtectedSettingsFromKeyVaultInput() WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput"></a>

```go
func ProtectedSettingsInput() *string
```

- *Type:* *string

---

##### `ProvisionAfterExtensionsInput`<sup>Optional</sup> <a name="ProvisionAfterExtensionsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput"></a>

```go
func ProvisionAfterExtensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.settingsInput"></a>

```go
func SettingsInput() *string
```

- *Type:* *string

---

##### `TypeHandlerVersionInput`<sup>Optional</sup> <a name="TypeHandlerVersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput"></a>

```go
func TypeHandlerVersionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AutomaticUpgradeEnabled`<sup>Required</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabled"></a>

```go
func AutomaticUpgradeEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoUpgradeMinorVersion`<sup>Required</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion"></a>

```go
func AutoUpgradeMinorVersion() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateTag`<sup>Required</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTag"></a>

```go
func ForceUpdateTag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings"></a>

```go
func ProtectedSettings() *string
```

- *Type:* *string

---

##### `ProvisionAfterExtensions`<sup>Required</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions"></a>

```go
func ProvisionAfterExtensions() *[]*string
```

- *Type:* *[]*string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.settings"></a>

```go
func Settings() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion"></a>

```go
func TypeHandlerVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference <a name="WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput">SecretUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl">SecretUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretUrlInput`<sup>Optional</sup> <a name="SecretUrlInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput"></a>

```go
func SecretUrlInput() *string
```

- *Type:* *string

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput"></a>

```go
func SourceVaultIdInput() *string
```

- *Type:* *string

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl"></a>

```go
func SecretUrl() *string
```

- *Type:* *string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId"></a>

```go
func SourceVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---


### WindowsVirtualMachineScaleSetGalleryApplicationList <a name="WindowsVirtualMachineScaleSetGalleryApplicationList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetGalleryApplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetGalleryApplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetGalleryApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetGalleryApplicationOutputReference <a name="WindowsVirtualMachineScaleSetGalleryApplicationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetGalleryApplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetGalleryApplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationBlobUri` <a name="ResetConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resetConfigurationBlobUri"></a>

```go
func ResetConfigurationBlobUri()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUriInput">ConfigurationBlobUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUri">ConfigurationBlobUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationBlobUriInput`<sup>Optional</sup> <a name="ConfigurationBlobUriInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUriInput"></a>

```go
func ConfigurationBlobUriInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationBlobUri`<sup>Required</sup> <a name="ConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUri"></a>

```go
func ConfigurationBlobUri() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetIdentityOutputReference <a name="WindowsVirtualMachineScaleSetIdentityOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a>

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicIpAddress` <a name="PutPublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress"></a>

```go
func PutPublicIpAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationGatewayBackendAddressPoolIds` <a name="ResetApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationGatewayBackendAddressPoolIds"></a>

```go
func ResetApplicationGatewayBackendAddressPoolIds()
```

##### `ResetApplicationSecurityGroupIds` <a name="ResetApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationSecurityGroupIds"></a>

```go
func ResetApplicationSecurityGroupIds()
```

##### `ResetLoadBalancerBackendAddressPoolIds` <a name="ResetLoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds"></a>

```go
func ResetLoadBalancerBackendAddressPoolIds()
```

##### `ResetLoadBalancerInboundNatRulesIds` <a name="ResetLoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerInboundNatRulesIds"></a>

```go
func ResetLoadBalancerInboundNatRulesIds()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPrimary"></a>

```go
func ResetPrimary()
```

##### `ResetPublicIpAddress` <a name="ResetPublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPublicIpAddress"></a>

```go
func ResetPublicIpAddress()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput">ApplicationGatewayBackendAddressPoolIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput">ApplicationSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput">LoadBalancerBackendAddressPoolIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput">LoadBalancerInboundNatRulesIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressInput">PublicIpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress"></a>

```go
func PublicIpAddress() WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a>

---

##### `ApplicationGatewayBackendAddressPoolIdsInput`<sup>Optional</sup> <a name="ApplicationGatewayBackendAddressPoolIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput"></a>

```go
func ApplicationGatewayBackendAddressPoolIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput"></a>

```go
func ApplicationSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerBackendAddressPoolIdsInput`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput"></a>

```go
func LoadBalancerBackendAddressPoolIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerInboundNatRulesIdsInput`<sup>Optional</sup> <a name="LoadBalancerInboundNatRulesIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput"></a>

```go
func LoadBalancerInboundNatRulesIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `PublicIpAddressInput`<sup>Optional</sup> <a name="PublicIpAddressInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressInput"></a>

```go
func PublicIpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Required</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```go
func ApplicationGatewayBackendAddressPoolIds() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationSecurityGroupIds`<sup>Required</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```go
func ApplicationSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Required</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```go
func LoadBalancerBackendAddressPoolIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerInboundNatRulesIds`<sup>Required</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```go
func LoadBalancerInboundNatRulesIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpTag` <a name="PutIpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag"></a>

```go
func PutIpTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDomainNameLabel` <a name="ResetDomainNameLabel" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetDomainNameLabel"></a>

```go
func ResetDomainNameLabel()
```

##### `ResetIdleTimeoutInMinutes` <a name="ResetIdleTimeoutInMinutes" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIdleTimeoutInMinutes"></a>

```go
func ResetIdleTimeoutInMinutes()
```

##### `ResetIpTag` <a name="ResetIpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIpTag"></a>

```go
func ResetIpTag()
```

##### `ResetPublicIpPrefixId` <a name="ResetPublicIpPrefixId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetPublicIpPrefixId"></a>

```go
func ResetPublicIpPrefixId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag">IpTag</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabelInput">DomainNameLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutesInput">IdleTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTagInput">IpTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixIdInput">PublicIpPrefixIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel">DomainNameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId">PublicIpPrefixId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpTag`<sup>Required</sup> <a name="IpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag"></a>

```go
func IpTag() WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a>

---

##### `DomainNameLabelInput`<sup>Optional</sup> <a name="DomainNameLabelInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabelInput"></a>

```go
func DomainNameLabelInput() *string
```

- *Type:* *string

---

##### `IdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutInMinutesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutesInput"></a>

```go
func IdleTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `IpTagInput`<sup>Optional</sup> <a name="IpTagInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTagInput"></a>

```go
func IpTagInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicIpPrefixIdInput`<sup>Optional</sup> <a name="PublicIpPrefixIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixIdInput"></a>

```go
func PublicIpPrefixIdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `DomainNameLabel`<sup>Required</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel"></a>

```go
func DomainNameLabel() *string
```

- *Type:* *string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes"></a>

```go
func IdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicIpPrefixId`<sup>Required</sup> <a name="PublicIpPrefixId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId"></a>

```go
func PublicIpPrefixId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetNetworkInterfaceList <a name="WindowsVirtualMachineScaleSetNetworkInterfaceList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpConfiguration` <a name="PutIpConfiguration" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration"></a>

```go
func PutIpConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetDnsServers"></a>

```go
func ResetDnsServers()
```

##### `ResetEnableAcceleratedNetworking` <a name="ResetEnableAcceleratedNetworking" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableAcceleratedNetworking"></a>

```go
func ResetEnableAcceleratedNetworking()
```

##### `ResetEnableIpForwarding` <a name="ResetEnableIpForwarding" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableIpForwarding"></a>

```go
func ResetEnableIpForwarding()
```

##### `ResetNetworkSecurityGroupId` <a name="ResetNetworkSecurityGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetNetworkSecurityGroupId"></a>

```go
func ResetNetworkSecurityGroupId()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetPrimary"></a>

```go
func ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworkingInput">EnableAcceleratedNetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput">EnableIpForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput">NetworkSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking">EnableAcceleratedNetworking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput"></a>

```go
func DnsServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableAcceleratedNetworkingInput`<sup>Optional</sup> <a name="EnableAcceleratedNetworkingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworkingInput"></a>

```go
func EnableAcceleratedNetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIpForwardingInput`<sup>Optional</sup> <a name="EnableIpForwardingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput"></a>

```go
func EnableIpForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupIdInput`<sup>Optional</sup> <a name="NetworkSecurityGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput"></a>

```go
func NetworkSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `EnableAcceleratedNetworking`<sup>Required</sup> <a name="EnableAcceleratedNetworking" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking"></a>

```go
func EnableAcceleratedNetworking() interface{}
```

- *Type:* interface{}

---

##### `EnableIpForwarding`<sup>Required</sup> <a name="EnableIpForwarding" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```go
func EnableIpForwarding() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```go
func NetworkSecurityGroupId() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference <a name="WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resetPlacement"></a>

```go
func ResetPlacement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput">OptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placementInput">PlacementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option">Option</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placement">Placement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```go
func OptionInput() *string
```

- *Type:* *string

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placementInput"></a>

```go
func PlacementInput() *string
```

- *Type:* *string

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```go
func Option() *string
```

- *Type:* *string

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placement"></a>

```go
func Placement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---


### WindowsVirtualMachineScaleSetOsDiskOutputReference <a name="WindowsVirtualMachineScaleSetOsDiskOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetOsDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetOsDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiffDiskSettings` <a name="PutDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings"></a>

```go
func PutDiffDiskSettings(value WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---

##### `ResetDiffDiskSettings` <a name="ResetDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetDiffDiskSettings"></a>

```go
func ResetDiffDiskSettings()
```

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```go
func ResetDiskEncryptionSetId()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetSecureVmDiskEncryptionSetId` <a name="ResetSecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetSecureVmDiskEncryptionSetId"></a>

```go
func ResetSecureVmDiskEncryptionSetId()
```

##### `ResetSecurityEncryptionType` <a name="ResetSecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetSecurityEncryptionType"></a>

```go
func ResetSecurityEncryptionType()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```go
func ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput">DiffDiskSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput">SecureVmDiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionTypeInput">SecurityEncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.caching">Caching</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionType">SecurityEncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiffDiskSettings`<sup>Required</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings"></a>

```go
func DiffDiskSettings() WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput"></a>

```go
func CachingInput() *string
```

- *Type:* *string

---

##### `DiffDiskSettingsInput`<sup>Optional</sup> <a name="DiffDiskSettingsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```go
func DiffDiskSettingsInput() WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```go
func DiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `SecureVmDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput"></a>

```go
func SecureVmDiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `SecurityEncryptionTypeInput`<sup>Optional</sup> <a name="SecurityEncryptionTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionTypeInput"></a>

```go
func SecurityEncryptionTypeInput() *string
```

- *Type:* *string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput"></a>

```go
func StorageAccountTypeInput() *string
```

- *Type:* *string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```go
func WriteAcceleratorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.caching"></a>

```go
func Caching() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId"></a>

```go
func DiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `SecureVmDiskEncryptionSetId`<sup>Required</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetId"></a>

```go
func SecureVmDiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `SecurityEncryptionType`<sup>Required</sup> <a name="SecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionType"></a>

```go
func SecurityEncryptionType() *string
```

- *Type:* *string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```go
func WriteAcceleratorEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a>

---


### WindowsVirtualMachineScaleSetPlanOutputReference <a name="WindowsVirtualMachineScaleSetPlanOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a>

---


### WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference <a name="WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrossZoneUpgradesEnabled` <a name="ResetCrossZoneUpgradesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetCrossZoneUpgradesEnabled"></a>

```go
func ResetCrossZoneUpgradesEnabled()
```

##### `ResetMaximumSurgeInstancesEnabled` <a name="ResetMaximumSurgeInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaximumSurgeInstancesEnabled"></a>

```go
func ResetMaximumSurgeInstancesEnabled()
```

##### `ResetPrioritizeUnhealthyInstancesEnabled` <a name="ResetPrioritizeUnhealthyInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetPrioritizeUnhealthyInstancesEnabled"></a>

```go
func ResetPrioritizeUnhealthyInstancesEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabledInput">CrossZoneUpgradesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercentInput">MaxBatchInstancePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabledInput">MaximumSurgeInstancesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercentInput">MaxUnhealthyInstancePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercentInput">MaxUnhealthyUpgradedInstancePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatchesInput">PauseTimeBetweenBatchesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabledInput">PrioritizeUnhealthyInstancesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabled">CrossZoneUpgradesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercent">MaxBatchInstancePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabled">MaximumSurgeInstancesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercent">MaxUnhealthyInstancePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercent">MaxUnhealthyUpgradedInstancePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatches">PauseTimeBetweenBatches</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabled">PrioritizeUnhealthyInstancesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossZoneUpgradesEnabledInput`<sup>Optional</sup> <a name="CrossZoneUpgradesEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabledInput"></a>

```go
func CrossZoneUpgradesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxBatchInstancePercentInput`<sup>Optional</sup> <a name="MaxBatchInstancePercentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercentInput"></a>

```go
func MaxBatchInstancePercentInput() *f64
```

- *Type:* *f64

---

##### `MaximumSurgeInstancesEnabledInput`<sup>Optional</sup> <a name="MaximumSurgeInstancesEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabledInput"></a>

```go
func MaximumSurgeInstancesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxUnhealthyInstancePercentInput`<sup>Optional</sup> <a name="MaxUnhealthyInstancePercentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercentInput"></a>

```go
func MaxUnhealthyInstancePercentInput() *f64
```

- *Type:* *f64

---

##### `MaxUnhealthyUpgradedInstancePercentInput`<sup>Optional</sup> <a name="MaxUnhealthyUpgradedInstancePercentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercentInput"></a>

```go
func MaxUnhealthyUpgradedInstancePercentInput() *f64
```

- *Type:* *f64

---

##### `PauseTimeBetweenBatchesInput`<sup>Optional</sup> <a name="PauseTimeBetweenBatchesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatchesInput"></a>

```go
func PauseTimeBetweenBatchesInput() *string
```

- *Type:* *string

---

##### `PrioritizeUnhealthyInstancesEnabledInput`<sup>Optional</sup> <a name="PrioritizeUnhealthyInstancesEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabledInput"></a>

```go
func PrioritizeUnhealthyInstancesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CrossZoneUpgradesEnabled`<sup>Required</sup> <a name="CrossZoneUpgradesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabled"></a>

```go
func CrossZoneUpgradesEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaxBatchInstancePercent`<sup>Required</sup> <a name="MaxBatchInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercent"></a>

```go
func MaxBatchInstancePercent() *f64
```

- *Type:* *f64

---

##### `MaximumSurgeInstancesEnabled`<sup>Required</sup> <a name="MaximumSurgeInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabled"></a>

```go
func MaximumSurgeInstancesEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaxUnhealthyInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercent"></a>

```go
func MaxUnhealthyInstancePercent() *f64
```

- *Type:* *f64

---

##### `MaxUnhealthyUpgradedInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyUpgradedInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercent"></a>

```go
func MaxUnhealthyUpgradedInstancePercent() *f64
```

- *Type:* *f64

---

##### `PauseTimeBetweenBatches`<sup>Required</sup> <a name="PauseTimeBetweenBatches" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatches"></a>

```go
func PauseTimeBetweenBatches() *string
```

- *Type:* *string

---

##### `PrioritizeUnhealthyInstancesEnabled`<sup>Required</sup> <a name="PrioritizeUnhealthyInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabled"></a>

```go
func PrioritizeUnhealthyInstancesEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetRollingUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a>

---


### WindowsVirtualMachineScaleSetScaleInOutputReference <a name="WindowsVirtualMachineScaleSetScaleInOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetScaleInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetScaleInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForceDeletionEnabled` <a name="ResetForceDeletionEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resetForceDeletionEnabled"></a>

```go
func ResetForceDeletionEnabled()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resetRule"></a>

```go
func ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabledInput">ForceDeletionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabled">ForceDeletionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForceDeletionEnabledInput`<sup>Optional</sup> <a name="ForceDeletionEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabledInput"></a>

```go
func ForceDeletionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `ForceDeletionEnabled`<sup>Required</sup> <a name="ForceDeletionEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabled"></a>

```go
func ForceDeletionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetScaleIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a>

---


### WindowsVirtualMachineScaleSetSecretCertificateList <a name="WindowsVirtualMachineScaleSetSecretCertificateList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetSecretCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetSecretCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetSecretCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetSecretCertificateOutputReference <a name="WindowsVirtualMachineScaleSetSecretCertificateOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetSecretCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetSecretCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.storeInput">StoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.store">Store</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StoreInput`<sup>Optional</sup> <a name="StoreInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.storeInput"></a>

```go
func StoreInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.store"></a>

```go
func Store() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetSecretList <a name="WindowsVirtualMachineScaleSetSecretList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetSecretOutputReference <a name="WindowsVirtualMachineScaleSetSecretOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.putCertificate"></a>

```go
func PutCertificate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList">WindowsVirtualMachineScaleSetSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.certificateInput">CertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.certificate"></a>

```go
func Certificate() WindowsVirtualMachineScaleSetSecretCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList">WindowsVirtualMachineScaleSetSecretCertificateList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.certificateInput"></a>

```go
func CertificateInput() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference <a name="WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetSourceImageReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a>

---


### WindowsVirtualMachineScaleSetSpotRestoreOutputReference <a name="WindowsVirtualMachineScaleSetSpotRestoreOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetSpotRestoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetSpotRestoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetSpotRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a>

---


### WindowsVirtualMachineScaleSetTerminationNotificationOutputReference <a name="WindowsVirtualMachineScaleSetTerminationNotificationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetTerminationNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetTerminationNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() WindowsVirtualMachineScaleSetTerminationNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a>

---


### WindowsVirtualMachineScaleSetTimeoutsOutputReference <a name="WindowsVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WindowsVirtualMachineScaleSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetWinrmListenerList <a name="WindowsVirtualMachineScaleSetWinrmListenerList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetWinrmListenerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WindowsVirtualMachineScaleSetWinrmListenerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.get"></a>

```go
func Get(index *f64) WindowsVirtualMachineScaleSetWinrmListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WindowsVirtualMachineScaleSetWinrmListenerOutputReference <a name="WindowsVirtualMachineScaleSetWinrmListenerOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/windowsvirtualmachinescaleset"

windowsvirtualmachinescaleset.NewWindowsVirtualMachineScaleSetWinrmListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WindowsVirtualMachineScaleSetWinrmListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateUrl` <a name="ResetCertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.resetCertificateUrl"></a>

```go
func ResetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.certificateUrlInput"></a>

```go
func CertificateUrlInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.certificateUrl"></a>

```go
func CertificateUrl() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



