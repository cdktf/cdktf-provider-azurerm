# `linuxVirtualMachine` Submodule <a name="`linuxVirtualMachine` Submodule" id="@cdktf/provider-azurerm.linuxVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinuxVirtualMachine <a name="LinuxVirtualMachine" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine azurerm_linux_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachine(scope Construct, id *string, config LinuxVirtualMachineConfig) LinuxVirtualMachine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig">LinuxVirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig">LinuxVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdditionalCapabilities">PutAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdminSshKey">PutAdminSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putBootDiagnostics">PutBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putGalleryApplication">PutGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putOsDisk">PutOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putOsImageNotification">PutOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSourceImageReference">PutSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTerminationNotification">PutTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdditionalCapabilities">ResetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdminSshKey">ResetAdminSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAllowExtensionOperations">ResetAllowExtensionOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAvailabilitySetId">ResetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetBootDiagnostics">ResetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled">ResetBypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetCapacityReservationGroupId">ResetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetComputerName">ResetComputerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetCustomData">ResetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDedicatedHostGroupId">ResetDedicatedHostGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDedicatedHostId">ResetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDisablePasswordAuthentication">ResetDisablePasswordAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDiskControllerType">ResetDiskControllerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEdgeZone">ResetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEvictionPolicy">ResetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetExtensionsTimeBudget">ResetExtensionsTimeBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetGalleryApplication">ResetGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetMaxBidPrice">ResetMaxBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetOsImageNotification">ResetOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPatchAssessmentMode">ResetPatchAssessmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPatchMode">ResetPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPlatformFaultDomain">ResetPlatformFaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetProvisionVmAgent">ResetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetProximityPlacementGroupId">ResetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetRebootSetting">ResetRebootSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSecureBootEnabled">ResetSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageId">ResetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageReference">ResetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTerminationNotification">ResetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVirtualMachineScaleSetId">ResetVirtualMachineScaleSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVmAgentPlatformUpdatesEnabled">ResetVmAgentPlatformUpdatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVtpmEnabled">ResetVtpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalCapabilities` <a name="PutAdditionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdditionalCapabilities"></a>

```go
func PutAdditionalCapabilities(value LinuxVirtualMachineAdditionalCapabilities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

---

##### `PutAdminSshKey` <a name="PutAdminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdminSshKey"></a>

```go
func PutAdminSshKey(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdminSshKey.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBootDiagnostics` <a name="PutBootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putBootDiagnostics"></a>

```go
func PutBootDiagnostics(value LinuxVirtualMachineBootDiagnostics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

---

##### `PutGalleryApplication` <a name="PutGalleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putGalleryApplication"></a>

```go
func PutGalleryApplication(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putGalleryApplication.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putIdentity"></a>

```go
func PutIdentity(value LinuxVirtualMachineIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a>

---

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putOsDisk"></a>

```go
func PutOsDisk(value LinuxVirtualMachineOsDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

---

##### `PutOsImageNotification` <a name="PutOsImageNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putOsImageNotification"></a>

```go
func PutOsImageNotification(value LinuxVirtualMachineOsImageNotification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putOsImageNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification">LinuxVirtualMachineOsImageNotification</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putPlan"></a>

```go
func PutPlan(value LinuxVirtualMachinePlan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceImageReference` <a name="PutSourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSourceImageReference"></a>

```go
func PutSourceImageReference(value LinuxVirtualMachineSourceImageReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

---

##### `PutTerminationNotification` <a name="PutTerminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTerminationNotification"></a>

```go
func PutTerminationNotification(value LinuxVirtualMachineTerminationNotification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTerminationNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTimeouts"></a>

```go
func PutTimeouts(value LinuxVirtualMachineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

---

##### `ResetAdditionalCapabilities` <a name="ResetAdditionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdditionalCapabilities"></a>

```go
func ResetAdditionalCapabilities()
```

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdminPassword"></a>

```go
func ResetAdminPassword()
```

##### `ResetAdminSshKey` <a name="ResetAdminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdminSshKey"></a>

```go
func ResetAdminSshKey()
```

##### `ResetAllowExtensionOperations` <a name="ResetAllowExtensionOperations" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAllowExtensionOperations"></a>

```go
func ResetAllowExtensionOperations()
```

##### `ResetAvailabilitySetId` <a name="ResetAvailabilitySetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAvailabilitySetId"></a>

```go
func ResetAvailabilitySetId()
```

##### `ResetBootDiagnostics` <a name="ResetBootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetBootDiagnostics"></a>

```go
func ResetBootDiagnostics()
```

##### `ResetBypassPlatformSafetyChecksOnUserScheduleEnabled` <a name="ResetBypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```go
func ResetBypassPlatformSafetyChecksOnUserScheduleEnabled()
```

##### `ResetCapacityReservationGroupId` <a name="ResetCapacityReservationGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetCapacityReservationGroupId"></a>

```go
func ResetCapacityReservationGroupId()
```

##### `ResetComputerName` <a name="ResetComputerName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetComputerName"></a>

```go
func ResetComputerName()
```

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetCustomData"></a>

```go
func ResetCustomData()
```

##### `ResetDedicatedHostGroupId` <a name="ResetDedicatedHostGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDedicatedHostGroupId"></a>

```go
func ResetDedicatedHostGroupId()
```

##### `ResetDedicatedHostId` <a name="ResetDedicatedHostId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDedicatedHostId"></a>

```go
func ResetDedicatedHostId()
```

##### `ResetDisablePasswordAuthentication` <a name="ResetDisablePasswordAuthentication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDisablePasswordAuthentication"></a>

```go
func ResetDisablePasswordAuthentication()
```

##### `ResetDiskControllerType` <a name="ResetDiskControllerType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDiskControllerType"></a>

```go
func ResetDiskControllerType()
```

##### `ResetEdgeZone` <a name="ResetEdgeZone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEdgeZone"></a>

```go
func ResetEdgeZone()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEncryptionAtHostEnabled"></a>

```go
func ResetEncryptionAtHostEnabled()
```

##### `ResetEvictionPolicy` <a name="ResetEvictionPolicy" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEvictionPolicy"></a>

```go
func ResetEvictionPolicy()
```

##### `ResetExtensionsTimeBudget` <a name="ResetExtensionsTimeBudget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetExtensionsTimeBudget"></a>

```go
func ResetExtensionsTimeBudget()
```

##### `ResetGalleryApplication` <a name="ResetGalleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetGalleryApplication"></a>

```go
func ResetGalleryApplication()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetMaxBidPrice` <a name="ResetMaxBidPrice" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetMaxBidPrice"></a>

```go
func ResetMaxBidPrice()
```

##### `ResetOsImageNotification` <a name="ResetOsImageNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetOsImageNotification"></a>

```go
func ResetOsImageNotification()
```

##### `ResetPatchAssessmentMode` <a name="ResetPatchAssessmentMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPatchAssessmentMode"></a>

```go
func ResetPatchAssessmentMode()
```

##### `ResetPatchMode` <a name="ResetPatchMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPatchMode"></a>

```go
func ResetPatchMode()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPlan"></a>

```go
func ResetPlan()
```

##### `ResetPlatformFaultDomain` <a name="ResetPlatformFaultDomain" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPlatformFaultDomain"></a>

```go
func ResetPlatformFaultDomain()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProvisionVmAgent` <a name="ResetProvisionVmAgent" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetProvisionVmAgent"></a>

```go
func ResetProvisionVmAgent()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetProximityPlacementGroupId"></a>

```go
func ResetProximityPlacementGroupId()
```

##### `ResetRebootSetting` <a name="ResetRebootSetting" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetRebootSetting"></a>

```go
func ResetRebootSetting()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetSecureBootEnabled` <a name="ResetSecureBootEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSecureBootEnabled"></a>

```go
func ResetSecureBootEnabled()
```

##### `ResetSourceImageId` <a name="ResetSourceImageId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageId"></a>

```go
func ResetSourceImageId()
```

##### `ResetSourceImageReference` <a name="ResetSourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageReference"></a>

```go
func ResetSourceImageReference()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTerminationNotification` <a name="ResetTerminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTerminationNotification"></a>

```go
func ResetTerminationNotification()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetVirtualMachineScaleSetId` <a name="ResetVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVirtualMachineScaleSetId"></a>

```go
func ResetVirtualMachineScaleSetId()
```

##### `ResetVmAgentPlatformUpdatesEnabled` <a name="ResetVmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVmAgentPlatformUpdatesEnabled"></a>

```go
func ResetVmAgentPlatformUpdatesEnabled()
```

##### `ResetVtpmEnabled` <a name="ResetVtpmEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVtpmEnabled"></a>

```go
func ResetVtpmEnabled()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LinuxVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.LinuxVirtualMachine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.LinuxVirtualMachine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.LinuxVirtualMachine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.LinuxVirtualMachine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LinuxVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LinuxVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LinuxVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LinuxVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference">LinuxVirtualMachineAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKey">AdminSshKey</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList">LinuxVirtualMachineAdminSshKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference">LinuxVirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.galleryApplication">GalleryApplication</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList">LinuxVirtualMachineGalleryApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference">LinuxVirtualMachineIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference">LinuxVirtualMachineOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osImageNotification">OsImageNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference">LinuxVirtualMachineOsImageNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference">LinuxVirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddress">PublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddresses">PublicIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList">LinuxVirtualMachineSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference">LinuxVirtualMachineSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference">LinuxVirtualMachineTerminationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference">LinuxVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilitiesInput">AdditionalCapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKeyInput">AdminSshKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperationsInput">AllowExtensionOperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetIdInput">AvailabilitySetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnosticsInput">BootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput">BypassPlatformSafetyChecksOnUserScheduleEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.capacityReservationGroupIdInput">CapacityReservationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.computerNameInput">ComputerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.customDataInput">CustomDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostGroupIdInput">DedicatedHostGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostIdInput">DedicatedHostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthenticationInput">DisablePasswordAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.diskControllerTypeInput">DiskControllerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.edgeZoneInput">EdgeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudgetInput">ExtensionsTimeBudgetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.galleryApplicationInput">GalleryApplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPriceInput">MaxBidPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIdsInput">NetworkInterfaceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osImageNotificationInput">OsImageNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification">LinuxVirtualMachineOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchAssessmentModeInput">PatchAssessmentModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchModeInput">PatchModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.platformFaultDomainInput">PlatformFaultDomainInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgentInput">ProvisionVmAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.rebootSettingInput">RebootSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secureBootEnabledInput">SecureBootEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sizeInput">SizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageIdInput">SourceImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReferenceInput">SourceImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terminationNotificationInput">TerminationNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetIdInput">VirtualMachineScaleSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vmAgentPlatformUpdatesEnabledInput">VmAgentPlatformUpdatesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vtpmEnabledInput">VtpmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperations">AllowExtensionOperations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetId">AvailabilitySetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">BypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.computerName">ComputerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.customData">CustomData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostGroupId">DedicatedHostGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostId">DedicatedHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthentication">DisablePasswordAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.diskControllerType">DiskControllerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.edgeZone">EdgeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPrice">MaxBidPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchAssessmentMode">PatchAssessmentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchMode">PatchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.platformFaultDomain">PlatformFaultDomain</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.rebootSetting">RebootSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secureBootEnabled">SecureBootEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageId">SourceImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetId">VirtualMachineScaleSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vmAgentPlatformUpdatesEnabled">VmAgentPlatformUpdatesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vtpmEnabled">VtpmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalCapabilities`<sup>Required</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilities"></a>

```go
func AdditionalCapabilities() LinuxVirtualMachineAdditionalCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference">LinuxVirtualMachineAdditionalCapabilitiesOutputReference</a>

---

##### `AdminSshKey`<sup>Required</sup> <a name="AdminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKey"></a>

```go
func AdminSshKey() LinuxVirtualMachineAdminSshKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList">LinuxVirtualMachineAdminSshKeyList</a>

---

##### `BootDiagnostics`<sup>Required</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnostics"></a>

```go
func BootDiagnostics() LinuxVirtualMachineBootDiagnosticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference">LinuxVirtualMachineBootDiagnosticsOutputReference</a>

---

##### `GalleryApplication`<sup>Required</sup> <a name="GalleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.galleryApplication"></a>

```go
func GalleryApplication() LinuxVirtualMachineGalleryApplicationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList">LinuxVirtualMachineGalleryApplicationList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.identity"></a>

```go
func Identity() LinuxVirtualMachineIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference">LinuxVirtualMachineIdentityOutputReference</a>

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osDisk"></a>

```go
func OsDisk() LinuxVirtualMachineOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference">LinuxVirtualMachineOsDiskOutputReference</a>

---

##### `OsImageNotification`<sup>Required</sup> <a name="OsImageNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osImageNotification"></a>

```go
func OsImageNotification() LinuxVirtualMachineOsImageNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference">LinuxVirtualMachineOsImageNotificationOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.plan"></a>

```go
func Plan() LinuxVirtualMachinePlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference">LinuxVirtualMachinePlanOutputReference</a>

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddresses"></a>

```go
func PrivateIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddress"></a>

```go
func PublicIpAddress() *string
```

- *Type:* *string

---

##### `PublicIpAddresses`<sup>Required</sup> <a name="PublicIpAddresses" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddresses"></a>

```go
func PublicIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secret"></a>

```go
func Secret() LinuxVirtualMachineSecretList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList">LinuxVirtualMachineSecretList</a>

---

##### `SourceImageReference`<sup>Required</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReference"></a>

```go
func SourceImageReference() LinuxVirtualMachineSourceImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference">LinuxVirtualMachineSourceImageReferenceOutputReference</a>

---

##### `TerminationNotification`<sup>Required</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terminationNotification"></a>

```go
func TerminationNotification() LinuxVirtualMachineTerminationNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference">LinuxVirtualMachineTerminationNotificationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.timeouts"></a>

```go
func Timeouts() LinuxVirtualMachineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference">LinuxVirtualMachineTimeoutsOutputReference</a>

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

##### `AdditionalCapabilitiesInput`<sup>Optional</sup> <a name="AdditionalCapabilitiesInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilitiesInput"></a>

```go
func AdditionalCapabilitiesInput() LinuxVirtualMachineAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AdminSshKeyInput`<sup>Optional</sup> <a name="AdminSshKeyInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKeyInput"></a>

```go
func AdminSshKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsernameInput"></a>

```go
func AdminUsernameInput() *string
```

- *Type:* *string

---

##### `AllowExtensionOperationsInput`<sup>Optional</sup> <a name="AllowExtensionOperationsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperationsInput"></a>

```go
func AllowExtensionOperationsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilitySetIdInput`<sup>Optional</sup> <a name="AvailabilitySetIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetIdInput"></a>

```go
func AvailabilitySetIdInput() *string
```

- *Type:* *string

---

##### `BootDiagnosticsInput`<sup>Optional</sup> <a name="BootDiagnosticsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnosticsInput"></a>

```go
func BootDiagnosticsInput() LinuxVirtualMachineBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

---

##### `BypassPlatformSafetyChecksOnUserScheduleEnabledInput`<sup>Optional</sup> <a name="BypassPlatformSafetyChecksOnUserScheduleEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput"></a>

```go
func BypassPlatformSafetyChecksOnUserScheduleEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityReservationGroupIdInput`<sup>Optional</sup> <a name="CapacityReservationGroupIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.capacityReservationGroupIdInput"></a>

```go
func CapacityReservationGroupIdInput() *string
```

- *Type:* *string

---

##### `ComputerNameInput`<sup>Optional</sup> <a name="ComputerNameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.computerNameInput"></a>

```go
func ComputerNameInput() *string
```

- *Type:* *string

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.customDataInput"></a>

```go
func CustomDataInput() *string
```

- *Type:* *string

---

##### `DedicatedHostGroupIdInput`<sup>Optional</sup> <a name="DedicatedHostGroupIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostGroupIdInput"></a>

```go
func DedicatedHostGroupIdInput() *string
```

- *Type:* *string

---

##### `DedicatedHostIdInput`<sup>Optional</sup> <a name="DedicatedHostIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostIdInput"></a>

```go
func DedicatedHostIdInput() *string
```

- *Type:* *string

---

##### `DisablePasswordAuthenticationInput`<sup>Optional</sup> <a name="DisablePasswordAuthenticationInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthenticationInput"></a>

```go
func DisablePasswordAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `DiskControllerTypeInput`<sup>Optional</sup> <a name="DiskControllerTypeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.diskControllerTypeInput"></a>

```go
func DiskControllerTypeInput() *string
```

- *Type:* *string

---

##### `EdgeZoneInput`<sup>Optional</sup> <a name="EdgeZoneInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.edgeZoneInput"></a>

```go
func EdgeZoneInput() *string
```

- *Type:* *string

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabledInput"></a>

```go
func EncryptionAtHostEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicyInput"></a>

```go
func EvictionPolicyInput() *string
```

- *Type:* *string

---

##### `ExtensionsTimeBudgetInput`<sup>Optional</sup> <a name="ExtensionsTimeBudgetInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudgetInput"></a>

```go
func ExtensionsTimeBudgetInput() *string
```

- *Type:* *string

---

##### `GalleryApplicationInput`<sup>Optional</sup> <a name="GalleryApplicationInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.galleryApplicationInput"></a>

```go
func GalleryApplicationInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.identityInput"></a>

```go
func IdentityInput() LinuxVirtualMachineIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxBidPriceInput`<sup>Optional</sup> <a name="MaxBidPriceInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPriceInput"></a>

```go
func MaxBidPriceInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdsInput`<sup>Optional</sup> <a name="NetworkInterfaceIdsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIdsInput"></a>

```go
func NetworkInterfaceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osDiskInput"></a>

```go
func OsDiskInput() LinuxVirtualMachineOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

---

##### `OsImageNotificationInput`<sup>Optional</sup> <a name="OsImageNotificationInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osImageNotificationInput"></a>

```go
func OsImageNotificationInput() LinuxVirtualMachineOsImageNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification">LinuxVirtualMachineOsImageNotification</a>

---

##### `PatchAssessmentModeInput`<sup>Optional</sup> <a name="PatchAssessmentModeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchAssessmentModeInput"></a>

```go
func PatchAssessmentModeInput() *string
```

- *Type:* *string

---

##### `PatchModeInput`<sup>Optional</sup> <a name="PatchModeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchModeInput"></a>

```go
func PatchModeInput() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.planInput"></a>

```go
func PlanInput() LinuxVirtualMachinePlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

---

##### `PlatformFaultDomainInput`<sup>Optional</sup> <a name="PlatformFaultDomainInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.platformFaultDomainInput"></a>

```go
func PlatformFaultDomainInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `ProvisionVmAgentInput`<sup>Optional</sup> <a name="ProvisionVmAgentInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgentInput"></a>

```go
func ProvisionVmAgentInput() interface{}
```

- *Type:* interface{}

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.proximityPlacementGroupIdInput"></a>

```go
func ProximityPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `RebootSettingInput`<sup>Optional</sup> <a name="RebootSettingInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.rebootSettingInput"></a>

```go
func RebootSettingInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `SecureBootEnabledInput`<sup>Optional</sup> <a name="SecureBootEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secureBootEnabledInput"></a>

```go
func SecureBootEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sizeInput"></a>

```go
func SizeInput() *string
```

- *Type:* *string

---

##### `SourceImageIdInput`<sup>Optional</sup> <a name="SourceImageIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageIdInput"></a>

```go
func SourceImageIdInput() *string
```

- *Type:* *string

---

##### `SourceImageReferenceInput`<sup>Optional</sup> <a name="SourceImageReferenceInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReferenceInput"></a>

```go
func SourceImageReferenceInput() LinuxVirtualMachineSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerminationNotificationInput`<sup>Optional</sup> <a name="TerminationNotificationInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terminationNotificationInput"></a>

```go
func TerminationNotificationInput() LinuxVirtualMachineTerminationNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `VirtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="VirtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetIdInput"></a>

```go
func VirtualMachineScaleSetIdInput() *string
```

- *Type:* *string

---

##### `VmAgentPlatformUpdatesEnabledInput`<sup>Optional</sup> <a name="VmAgentPlatformUpdatesEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vmAgentPlatformUpdatesEnabledInput"></a>

```go
func VmAgentPlatformUpdatesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VtpmEnabledInput`<sup>Optional</sup> <a name="VtpmEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vtpmEnabledInput"></a>

```go
func VtpmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `AllowExtensionOperations`<sup>Required</sup> <a name="AllowExtensionOperations" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperations"></a>

```go
func AllowExtensionOperations() interface{}
```

- *Type:* interface{}

---

##### `AvailabilitySetId`<sup>Required</sup> <a name="AvailabilitySetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetId"></a>

```go
func AvailabilitySetId() *string
```

- *Type:* *string

---

##### `BypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Required</sup> <a name="BypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```go
func BypassPlatformSafetyChecksOnUserScheduleEnabled() interface{}
```

- *Type:* interface{}

---

##### `CapacityReservationGroupId`<sup>Required</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.capacityReservationGroupId"></a>

```go
func CapacityReservationGroupId() *string
```

- *Type:* *string

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.computerName"></a>

```go
func ComputerName() *string
```

- *Type:* *string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.customData"></a>

```go
func CustomData() *string
```

- *Type:* *string

---

##### `DedicatedHostGroupId`<sup>Required</sup> <a name="DedicatedHostGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostGroupId"></a>

```go
func DedicatedHostGroupId() *string
```

- *Type:* *string

---

##### `DedicatedHostId`<sup>Required</sup> <a name="DedicatedHostId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostId"></a>

```go
func DedicatedHostId() *string
```

- *Type:* *string

---

##### `DisablePasswordAuthentication`<sup>Required</sup> <a name="DisablePasswordAuthentication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthentication"></a>

```go
func DisablePasswordAuthentication() interface{}
```

- *Type:* interface{}

---

##### `DiskControllerType`<sup>Required</sup> <a name="DiskControllerType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.diskControllerType"></a>

```go
func DiskControllerType() *string
```

- *Type:* *string

---

##### `EdgeZone`<sup>Required</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.edgeZone"></a>

```go
func EdgeZone() *string
```

- *Type:* *string

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabled"></a>

```go
func EncryptionAtHostEnabled() interface{}
```

- *Type:* interface{}

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicy"></a>

```go
func EvictionPolicy() *string
```

- *Type:* *string

---

##### `ExtensionsTimeBudget`<sup>Required</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudget"></a>

```go
func ExtensionsTimeBudget() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxBidPrice`<sup>Required</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPrice"></a>

```go
func MaxBidPrice() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIds"></a>

```go
func NetworkInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `PatchAssessmentMode`<sup>Required</sup> <a name="PatchAssessmentMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchAssessmentMode"></a>

```go
func PatchAssessmentMode() *string
```

- *Type:* *string

---

##### `PatchMode`<sup>Required</sup> <a name="PatchMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchMode"></a>

```go
func PatchMode() *string
```

- *Type:* *string

---

##### `PlatformFaultDomain`<sup>Required</sup> <a name="PlatformFaultDomain" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.platformFaultDomain"></a>

```go
func PlatformFaultDomain() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `ProvisionVmAgent`<sup>Required</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgent"></a>

```go
func ProvisionVmAgent() interface{}
```

- *Type:* interface{}

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.proximityPlacementGroupId"></a>

```go
func ProximityPlacementGroupId() *string
```

- *Type:* *string

---

##### `RebootSetting`<sup>Required</sup> <a name="RebootSetting" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.rebootSetting"></a>

```go
func RebootSetting() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SecureBootEnabled`<sup>Required</sup> <a name="SecureBootEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secureBootEnabled"></a>

```go
func SecureBootEnabled() interface{}
```

- *Type:* interface{}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `SourceImageId`<sup>Required</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageId"></a>

```go
func SourceImageId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `VirtualMachineScaleSetId`<sup>Required</sup> <a name="VirtualMachineScaleSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetId"></a>

```go
func VirtualMachineScaleSetId() *string
```

- *Type:* *string

---

##### `VmAgentPlatformUpdatesEnabled`<sup>Required</sup> <a name="VmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vmAgentPlatformUpdatesEnabled"></a>

```go
func VmAgentPlatformUpdatesEnabled() interface{}
```

- *Type:* interface{}

---

##### `VtpmEnabled`<sup>Required</sup> <a name="VtpmEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vtpmEnabled"></a>

```go
func VtpmEnabled() interface{}
```

- *Type:* interface{}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LinuxVirtualMachineAdditionalCapabilities <a name="LinuxVirtualMachineAdditionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineAdditionalCapabilities {
	HibernationEnabled: interface{},
	UltraSsdEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.property.hibernationEnabled">HibernationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#hibernation_enabled LinuxVirtualMachine#hibernation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#ultra_ssd_enabled LinuxVirtualMachine#ultra_ssd_enabled}. |

---

##### `HibernationEnabled`<sup>Optional</sup> <a name="HibernationEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.property.hibernationEnabled"></a>

```go
HibernationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#hibernation_enabled LinuxVirtualMachine#hibernation_enabled}.

---

##### `UltraSsdEnabled`<sup>Optional</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled"></a>

```go
UltraSsdEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#ultra_ssd_enabled LinuxVirtualMachine#ultra_ssd_enabled}.

---

### LinuxVirtualMachineAdminSshKey <a name="LinuxVirtualMachineAdminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineAdminSshKey {
	PublicKey: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.publicKey">PublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#public_key LinuxVirtualMachine#public_key}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#username LinuxVirtualMachine#username}. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#public_key LinuxVirtualMachine#public_key}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#username LinuxVirtualMachine#username}.

---

### LinuxVirtualMachineBootDiagnostics <a name="LinuxVirtualMachineBootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineBootDiagnostics {
	StorageAccountUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics.property.storageAccountUri">StorageAccountUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#storage_account_uri LinuxVirtualMachine#storage_account_uri}. |

---

##### `StorageAccountUri`<sup>Optional</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics.property.storageAccountUri"></a>

```go
StorageAccountUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#storage_account_uri LinuxVirtualMachine#storage_account_uri}.

---

### LinuxVirtualMachineConfig <a name="LinuxVirtualMachineConfig" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdminUsername: *string,
	Location: *string,
	Name: *string,
	NetworkInterfaceIds: *[]*string,
	OsDisk: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachineOsDisk,
	ResourceGroupName: *string,
	Size: *string,
	AdditionalCapabilities: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities,
	AdminPassword: *string,
	AdminSshKey: interface{},
	AllowExtensionOperations: interface{},
	AvailabilitySetId: *string,
	BootDiagnostics: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics,
	BypassPlatformSafetyChecksOnUserScheduleEnabled: interface{},
	CapacityReservationGroupId: *string,
	ComputerName: *string,
	CustomData: *string,
	DedicatedHostGroupId: *string,
	DedicatedHostId: *string,
	DisablePasswordAuthentication: interface{},
	DiskControllerType: *string,
	EdgeZone: *string,
	EncryptionAtHostEnabled: interface{},
	EvictionPolicy: *string,
	ExtensionsTimeBudget: *string,
	GalleryApplication: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachineIdentity,
	LicenseType: *string,
	MaxBidPrice: *f64,
	OsImageNotification: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification,
	PatchAssessmentMode: *string,
	PatchMode: *string,
	Plan: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachinePlan,
	PlatformFaultDomain: *f64,
	Priority: *string,
	ProvisionVmAgent: interface{},
	ProximityPlacementGroupId: *string,
	RebootSetting: *string,
	Secret: interface{},
	SecureBootEnabled: interface{},
	SourceImageId: *string,
	SourceImageReference: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference,
	Tags: *map[string]*string,
	TerminationNotification: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachineTimeouts,
	UserData: *string,
	VirtualMachineScaleSetId: *string,
	VmAgentPlatformUpdatesEnabled: interface{},
	VtpmEnabled: interface{},
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.size">Size</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminSshKey">AdminSshKey</a></code> | <code>interface{}</code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.allowExtensionOperations">AllowExtensionOperations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.availabilitySetId">AvailabilitySetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">BypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled LinuxVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#capacity_reservation_group_id LinuxVirtualMachine#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.computerName">ComputerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.customData">CustomData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dedicatedHostGroupId">DedicatedHostGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#dedicated_host_group_id LinuxVirtualMachine#dedicated_host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dedicatedHostId">DedicatedHostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#dedicated_host_id LinuxVirtualMachine#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.disablePasswordAuthentication">DisablePasswordAuthentication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.diskControllerType">DiskControllerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#disk_controller_type LinuxVirtualMachine#disk_controller_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.edgeZone">EdgeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#edge_zone LinuxVirtualMachine#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.galleryApplication">GalleryApplication</a></code> | <code>interface{}</code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.maxBidPrice">MaxBidPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.osImageNotification">OsImageNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification">LinuxVirtualMachineOsImageNotification</a></code> | os_image_notification block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.patchAssessmentMode">PatchAssessmentMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#patch_assessment_mode LinuxVirtualMachine#patch_assessment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.patchMode">PatchMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#patch_mode LinuxVirtualMachine#patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.platformFaultDomain">PlatformFaultDomain</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#platform_fault_domain LinuxVirtualMachine#platform_fault_domain}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.priority">Priority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#proximity_placement_group_id LinuxVirtualMachine#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.rebootSetting">RebootSetting</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#reboot_setting LinuxVirtualMachine#reboot_setting}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secureBootEnabled">SecureBootEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#secure_boot_enabled LinuxVirtualMachine#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageId">SourceImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#user_data LinuxVirtualMachine#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.virtualMachineScaleSetId">VirtualMachineScaleSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.vmAgentPlatformUpdatesEnabled">VmAgentPlatformUpdatesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#vm_agent_platform_updates_enabled LinuxVirtualMachine#vm_agent_platform_updates_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.vtpmEnabled">VtpmEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#vtpm_enabled LinuxVirtualMachine#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminUsername"></a>

```go
AdminUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.networkInterfaceIds"></a>

```go
NetworkInterfaceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}.

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.osDisk"></a>

```go
OsDisk LinuxVirtualMachineOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#os_disk LinuxVirtualMachine#os_disk}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.size"></a>

```go
Size *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}.

---

##### `AdditionalCapabilities`<sup>Optional</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.additionalCapabilities"></a>

```go
AdditionalCapabilities LinuxVirtualMachineAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#additional_capabilities LinuxVirtualMachine#additional_capabilities}

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}.

---

##### `AdminSshKey`<sup>Optional</sup> <a name="AdminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminSshKey"></a>

```go
AdminSshKey interface{}
```

- *Type:* interface{}

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#admin_ssh_key LinuxVirtualMachine#admin_ssh_key}

---

##### `AllowExtensionOperations`<sup>Optional</sup> <a name="AllowExtensionOperations" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.allowExtensionOperations"></a>

```go
AllowExtensionOperations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}.

---

##### `AvailabilitySetId`<sup>Optional</sup> <a name="AvailabilitySetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.availabilitySetId"></a>

```go
AvailabilitySetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}.

---

##### `BootDiagnostics`<sup>Optional</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bootDiagnostics"></a>

```go
BootDiagnostics LinuxVirtualMachineBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#boot_diagnostics LinuxVirtualMachine#boot_diagnostics}

---

##### `BypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Optional</sup> <a name="BypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```go
BypassPlatformSafetyChecksOnUserScheduleEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled LinuxVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}.

---

##### `CapacityReservationGroupId`<sup>Optional</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.capacityReservationGroupId"></a>

```go
CapacityReservationGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#capacity_reservation_group_id LinuxVirtualMachine#capacity_reservation_group_id}.

---

##### `ComputerName`<sup>Optional</sup> <a name="ComputerName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.computerName"></a>

```go
ComputerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}.

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.customData"></a>

```go
CustomData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}.

---

##### `DedicatedHostGroupId`<sup>Optional</sup> <a name="DedicatedHostGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dedicatedHostGroupId"></a>

```go
DedicatedHostGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#dedicated_host_group_id LinuxVirtualMachine#dedicated_host_group_id}.

---

##### `DedicatedHostId`<sup>Optional</sup> <a name="DedicatedHostId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dedicatedHostId"></a>

```go
DedicatedHostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#dedicated_host_id LinuxVirtualMachine#dedicated_host_id}.

---

##### `DisablePasswordAuthentication`<sup>Optional</sup> <a name="DisablePasswordAuthentication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.disablePasswordAuthentication"></a>

```go
DisablePasswordAuthentication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}.

---

##### `DiskControllerType`<sup>Optional</sup> <a name="DiskControllerType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.diskControllerType"></a>

```go
DiskControllerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#disk_controller_type LinuxVirtualMachine#disk_controller_type}.

---

##### `EdgeZone`<sup>Optional</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.edgeZone"></a>

```go
EdgeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#edge_zone LinuxVirtualMachine#edge_zone}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.encryptionAtHostEnabled"></a>

```go
EncryptionAtHostEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}.

---

##### `EvictionPolicy`<sup>Optional</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.evictionPolicy"></a>

```go
EvictionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}.

---

##### `ExtensionsTimeBudget`<sup>Optional</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.extensionsTimeBudget"></a>

```go
ExtensionsTimeBudget *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}.

---

##### `GalleryApplication`<sup>Optional</sup> <a name="GalleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.galleryApplication"></a>

```go
GalleryApplication interface{}
```

- *Type:* interface{}

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#gallery_application LinuxVirtualMachine#gallery_application}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.identity"></a>

```go
Identity LinuxVirtualMachineIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#identity LinuxVirtualMachine#identity}

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}.

---

##### `MaxBidPrice`<sup>Optional</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.maxBidPrice"></a>

```go
MaxBidPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}.

---

##### `OsImageNotification`<sup>Optional</sup> <a name="OsImageNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.osImageNotification"></a>

```go
OsImageNotification LinuxVirtualMachineOsImageNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification">LinuxVirtualMachineOsImageNotification</a>

os_image_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#os_image_notification LinuxVirtualMachine#os_image_notification}

---

##### `PatchAssessmentMode`<sup>Optional</sup> <a name="PatchAssessmentMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.patchAssessmentMode"></a>

```go
PatchAssessmentMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#patch_assessment_mode LinuxVirtualMachine#patch_assessment_mode}.

---

##### `PatchMode`<sup>Optional</sup> <a name="PatchMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.patchMode"></a>

```go
PatchMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#patch_mode LinuxVirtualMachine#patch_mode}.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.plan"></a>

```go
Plan LinuxVirtualMachinePlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#plan LinuxVirtualMachine#plan}

---

##### `PlatformFaultDomain`<sup>Optional</sup> <a name="PlatformFaultDomain" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.platformFaultDomain"></a>

```go
PlatformFaultDomain *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#platform_fault_domain LinuxVirtualMachine#platform_fault_domain}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}.

---

##### `ProvisionVmAgent`<sup>Optional</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisionVmAgent"></a>

```go
ProvisionVmAgent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}.

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.proximityPlacementGroupId"></a>

```go
ProximityPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#proximity_placement_group_id LinuxVirtualMachine#proximity_placement_group_id}.

---

##### `RebootSetting`<sup>Optional</sup> <a name="RebootSetting" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.rebootSetting"></a>

```go
RebootSetting *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#reboot_setting LinuxVirtualMachine#reboot_setting}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#secret LinuxVirtualMachine#secret}

---

##### `SecureBootEnabled`<sup>Optional</sup> <a name="SecureBootEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secureBootEnabled"></a>

```go
SecureBootEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#secure_boot_enabled LinuxVirtualMachine#secure_boot_enabled}.

---

##### `SourceImageId`<sup>Optional</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageId"></a>

```go
SourceImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}.

---

##### `SourceImageReference`<sup>Optional</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageReference"></a>

```go
SourceImageReference LinuxVirtualMachineSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#source_image_reference LinuxVirtualMachine#source_image_reference}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}.

---

##### `TerminationNotification`<sup>Optional</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.terminationNotification"></a>

```go
TerminationNotification LinuxVirtualMachineTerminationNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#termination_notification LinuxVirtualMachine#termination_notification}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.timeouts"></a>

```go
Timeouts LinuxVirtualMachineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#timeouts LinuxVirtualMachine#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#user_data LinuxVirtualMachine#user_data}.

---

##### `VirtualMachineScaleSetId`<sup>Optional</sup> <a name="VirtualMachineScaleSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.virtualMachineScaleSetId"></a>

```go
VirtualMachineScaleSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}.

---

##### `VmAgentPlatformUpdatesEnabled`<sup>Optional</sup> <a name="VmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.vmAgentPlatformUpdatesEnabled"></a>

```go
VmAgentPlatformUpdatesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#vm_agent_platform_updates_enabled LinuxVirtualMachine#vm_agent_platform_updates_enabled}.

---

##### `VtpmEnabled`<sup>Optional</sup> <a name="VtpmEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.vtpmEnabled"></a>

```go
VtpmEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#vtpm_enabled LinuxVirtualMachine#vtpm_enabled}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}.

---

### LinuxVirtualMachineGalleryApplication <a name="LinuxVirtualMachineGalleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineGalleryApplication {
	VersionId: *string,
	AutomaticUpgradeEnabled: interface{},
	ConfigurationBlobUri: *string,
	Order: *f64,
	Tag: *string,
	TreatFailureAsDeploymentFailureEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.versionId">VersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#version_id LinuxVirtualMachine#version_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#automatic_upgrade_enabled LinuxVirtualMachine#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.configurationBlobUri">ConfigurationBlobUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#configuration_blob_uri LinuxVirtualMachine#configuration_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#order LinuxVirtualMachine#order}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.tag">Tag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#tag LinuxVirtualMachine#tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.treatFailureAsDeploymentFailureEnabled">TreatFailureAsDeploymentFailureEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#treat_failure_as_deployment_failure_enabled LinuxVirtualMachine#treat_failure_as_deployment_failure_enabled}. |

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#version_id LinuxVirtualMachine#version_id}.

---

##### `AutomaticUpgradeEnabled`<sup>Optional</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.automaticUpgradeEnabled"></a>

```go
AutomaticUpgradeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#automatic_upgrade_enabled LinuxVirtualMachine#automatic_upgrade_enabled}.

---

##### `ConfigurationBlobUri`<sup>Optional</sup> <a name="ConfigurationBlobUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.configurationBlobUri"></a>

```go
ConfigurationBlobUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#configuration_blob_uri LinuxVirtualMachine#configuration_blob_uri}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#order LinuxVirtualMachine#order}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#tag LinuxVirtualMachine#tag}.

---

##### `TreatFailureAsDeploymentFailureEnabled`<sup>Optional</sup> <a name="TreatFailureAsDeploymentFailureEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.treatFailureAsDeploymentFailureEnabled"></a>

```go
TreatFailureAsDeploymentFailureEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#treat_failure_as_deployment_failure_enabled LinuxVirtualMachine#treat_failure_as_deployment_failure_enabled}.

---

### LinuxVirtualMachineIdentity <a name="LinuxVirtualMachineIdentity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#type LinuxVirtualMachine#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#identity_ids LinuxVirtualMachine#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#type LinuxVirtualMachine#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#identity_ids LinuxVirtualMachine#identity_ids}.

---

### LinuxVirtualMachineOsDisk <a name="LinuxVirtualMachineOsDisk" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineOsDisk {
	Caching: *string,
	StorageAccountType: *string,
	DiffDiskSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings,
	DiskEncryptionSetId: *string,
	DiskSizeGb: *f64,
	Name: *string,
	SecureVmDiskEncryptionSetId: *string,
	SecurityEncryptionType: *string,
	WriteAcceleratorEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.caching">Caching</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#caching LinuxVirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#storage_account_type LinuxVirtualMachine#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#disk_encryption_set_id LinuxVirtualMachine#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#disk_size_gb LinuxVirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#secure_vm_disk_encryption_set_id LinuxVirtualMachine#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.securityEncryptionType">SecurityEncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#security_encryption_type LinuxVirtualMachine#security_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#write_accelerator_enabled LinuxVirtualMachine#write_accelerator_enabled}. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.caching"></a>

```go
Caching *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#caching LinuxVirtualMachine#caching}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.storageAccountType"></a>

```go
StorageAccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#storage_account_type LinuxVirtualMachine#storage_account_type}.

---

##### `DiffDiskSettings`<sup>Optional</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diffDiskSettings"></a>

```go
DiffDiskSettings LinuxVirtualMachineOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#diff_disk_settings LinuxVirtualMachine#diff_disk_settings}

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskEncryptionSetId"></a>

```go
DiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#disk_encryption_set_id LinuxVirtualMachine#disk_encryption_set_id}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#disk_size_gb LinuxVirtualMachine#disk_size_gb}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `SecureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId"></a>

```go
SecureVmDiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#secure_vm_disk_encryption_set_id LinuxVirtualMachine#secure_vm_disk_encryption_set_id}.

---

##### `SecurityEncryptionType`<sup>Optional</sup> <a name="SecurityEncryptionType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.securityEncryptionType"></a>

```go
SecurityEncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#security_encryption_type LinuxVirtualMachine#security_encryption_type}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.writeAcceleratorEnabled"></a>

```go
WriteAcceleratorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#write_accelerator_enabled LinuxVirtualMachine#write_accelerator_enabled}.

---

### LinuxVirtualMachineOsDiskDiffDiskSettings <a name="LinuxVirtualMachineOsDiskDiffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineOsDiskDiffDiskSettings {
	Option: *string,
	Placement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.option">Option</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#option LinuxVirtualMachine#option}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.placement">Placement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#placement LinuxVirtualMachine#placement}. |

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.option"></a>

```go
Option *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#option LinuxVirtualMachine#option}.

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.placement"></a>

```go
Placement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#placement LinuxVirtualMachine#placement}.

---

### LinuxVirtualMachineOsImageNotification <a name="LinuxVirtualMachineOsImageNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineOsImageNotification {
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification.property.timeout">Timeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#timeout LinuxVirtualMachine#timeout}. |

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#timeout LinuxVirtualMachine#timeout}.

---

### LinuxVirtualMachinePlan <a name="LinuxVirtualMachinePlan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachinePlan {
	Name: *string,
	Product: *string,
	Publisher: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#product LinuxVirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#product LinuxVirtualMachine#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}.

---

### LinuxVirtualMachineSecret <a name="LinuxVirtualMachineSecret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineSecret {
	Certificate: interface{},
	KeyVaultId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.property.certificate">Certificate</a></code> | <code>interface{}</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#key_vault_id LinuxVirtualMachine#key_vault_id}. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.property.certificate"></a>

```go
Certificate interface{}
```

- *Type:* interface{}

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#certificate LinuxVirtualMachine#certificate}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#key_vault_id LinuxVirtualMachine#key_vault_id}.

---

### LinuxVirtualMachineSecretCertificate <a name="LinuxVirtualMachineSecretCertificate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineSecretCertificate {
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#url LinuxVirtualMachine#url}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#url LinuxVirtualMachine#url}.

---

### LinuxVirtualMachineSourceImageReference <a name="LinuxVirtualMachineSourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineSourceImageReference {
	Offer: *string,
	Publisher: *string,
	Sku: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#offer LinuxVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#sku LinuxVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#version LinuxVirtualMachine#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#offer LinuxVirtualMachine#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#sku LinuxVirtualMachine#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#version LinuxVirtualMachine#version}.

---

### LinuxVirtualMachineTerminationNotification <a name="LinuxVirtualMachineTerminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineTerminationNotification {
	Enabled: interface{},
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#enabled LinuxVirtualMachine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.property.timeout">Timeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#timeout LinuxVirtualMachine#timeout}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#enabled LinuxVirtualMachine#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#timeout LinuxVirtualMachine#timeout}.

---

### LinuxVirtualMachineTimeouts <a name="LinuxVirtualMachineTimeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

&linuxvirtualmachine.LinuxVirtualMachineTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#create LinuxVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#delete LinuxVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#read LinuxVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#update LinuxVirtualMachine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#create LinuxVirtualMachine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#delete LinuxVirtualMachine#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#read LinuxVirtualMachine#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/linux_virtual_machine#update LinuxVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LinuxVirtualMachineAdditionalCapabilitiesOutputReference <a name="LinuxVirtualMachineAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineAdditionalCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachineAdditionalCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resetHibernationEnabled">ResetHibernationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">ResetUltraSsdEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHibernationEnabled` <a name="ResetHibernationEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resetHibernationEnabled"></a>

```go
func ResetHibernationEnabled()
```

##### `ResetUltraSsdEnabled` <a name="ResetUltraSsdEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```go
func ResetUltraSsdEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabledInput">HibernationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">UltraSsdEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabled">HibernationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HibernationEnabledInput`<sup>Optional</sup> <a name="HibernationEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabledInput"></a>

```go
func HibernationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UltraSsdEnabledInput`<sup>Optional</sup> <a name="UltraSsdEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```go
func UltraSsdEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HibernationEnabled`<sup>Required</sup> <a name="HibernationEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabled"></a>

```go
func HibernationEnabled() interface{}
```

- *Type:* interface{}

---

##### `UltraSsdEnabled`<sup>Required</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```go
func UltraSsdEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() LinuxVirtualMachineAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

---


### LinuxVirtualMachineAdminSshKeyList <a name="LinuxVirtualMachineAdminSshKeyList" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineAdminSshKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LinuxVirtualMachineAdminSshKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.get"></a>

```go
func Get(index *f64) LinuxVirtualMachineAdminSshKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LinuxVirtualMachineAdminSshKeyOutputReference <a name="LinuxVirtualMachineAdminSshKeyOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineAdminSshKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LinuxVirtualMachineAdminSshKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LinuxVirtualMachineBootDiagnosticsOutputReference <a name="LinuxVirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineBootDiagnosticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachineBootDiagnosticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri">ResetStorageAccountUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageAccountUri` <a name="ResetStorageAccountUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri"></a>

```go
func ResetStorageAccountUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput">StorageAccountUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri">StorageAccountUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageAccountUriInput`<sup>Optional</sup> <a name="StorageAccountUriInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```go
func StorageAccountUriInput() *string
```

- *Type:* *string

---

##### `StorageAccountUri`<sup>Required</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```go
func StorageAccountUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```go
func InternalValue() LinuxVirtualMachineBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

---


### LinuxVirtualMachineGalleryApplicationList <a name="LinuxVirtualMachineGalleryApplicationList" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineGalleryApplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LinuxVirtualMachineGalleryApplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.get"></a>

```go
func Get(index *f64) LinuxVirtualMachineGalleryApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LinuxVirtualMachineGalleryApplicationOutputReference <a name="LinuxVirtualMachineGalleryApplicationOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineGalleryApplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LinuxVirtualMachineGalleryApplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetAutomaticUpgradeEnabled">ResetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri">ResetConfigurationBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetTreatFailureAsDeploymentFailureEnabled">ResetTreatFailureAsDeploymentFailureEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomaticUpgradeEnabled` <a name="ResetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetAutomaticUpgradeEnabled"></a>

```go
func ResetAutomaticUpgradeEnabled()
```

##### `ResetConfigurationBlobUri` <a name="ResetConfigurationBlobUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri"></a>

```go
func ResetConfigurationBlobUri()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetTreatFailureAsDeploymentFailureEnabled` <a name="ResetTreatFailureAsDeploymentFailureEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetTreatFailureAsDeploymentFailureEnabled"></a>

```go
func ResetTreatFailureAsDeploymentFailureEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabledInput">AutomaticUpgradeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput">ConfigurationBlobUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabledInput">TreatFailureAsDeploymentFailureEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri">ConfigurationBlobUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabled">TreatFailureAsDeploymentFailureEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticUpgradeEnabledInput`<sup>Optional</sup> <a name="AutomaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabledInput"></a>

```go
func AutomaticUpgradeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationBlobUriInput`<sup>Optional</sup> <a name="ConfigurationBlobUriInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput"></a>

```go
func ConfigurationBlobUriInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `TreatFailureAsDeploymentFailureEnabledInput`<sup>Optional</sup> <a name="TreatFailureAsDeploymentFailureEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabledInput"></a>

```go
func TreatFailureAsDeploymentFailureEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `AutomaticUpgradeEnabled`<sup>Required</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabled"></a>

```go
func AutomaticUpgradeEnabled() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationBlobUri`<sup>Required</sup> <a name="ConfigurationBlobUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri"></a>

```go
func ConfigurationBlobUri() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `TreatFailureAsDeploymentFailureEnabled`<sup>Required</sup> <a name="TreatFailureAsDeploymentFailureEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabled"></a>

```go
func TreatFailureAsDeploymentFailureEnabled() interface{}
```

- *Type:* interface{}

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LinuxVirtualMachineIdentityOutputReference <a name="LinuxVirtualMachineIdentityOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachineIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() LinuxVirtualMachineIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a>

---


### LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference <a name="LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement"></a>

```go
func ResetPlacement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput">OptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput">PlacementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option">Option</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement">Placement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```go
func OptionInput() *string
```

- *Type:* *string

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput"></a>

```go
func PlacementInput() *string
```

- *Type:* *string

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```go
func Option() *string
```

- *Type:* *string

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement"></a>

```go
func Placement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() LinuxVirtualMachineOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

---


### LinuxVirtualMachineOsDiskOutputReference <a name="LinuxVirtualMachineOsDiskOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineOsDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachineOsDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.putDiffDiskSettings">PutDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiffDiskSettings">ResetDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId">ResetSecureVmDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType">ResetSecurityEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiffDiskSettings` <a name="PutDiffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.putDiffDiskSettings"></a>

```go
func PutDiffDiskSettings(value LinuxVirtualMachineOsDiskDiffDiskSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `ResetDiffDiskSettings` <a name="ResetDiffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiffDiskSettings"></a>

```go
func ResetDiffDiskSettings()
```

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```go
func ResetDiskEncryptionSetId()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSecureVmDiskEncryptionSetId` <a name="ResetSecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId"></a>

```go
func ResetSecureVmDiskEncryptionSetId()
```

##### `ResetSecurityEncryptionType` <a name="ResetSecurityEncryptionType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType"></a>

```go
func ResetSecurityEncryptionType()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```go
func ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput">DiffDiskSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput">SecureVmDiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput">SecurityEncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.caching">Caching</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.securityEncryptionType">SecurityEncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiffDiskSettings`<sup>Required</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettings"></a>

```go
func DiffDiskSettings() LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.cachingInput"></a>

```go
func CachingInput() *string
```

- *Type:* *string

---

##### `DiffDiskSettingsInput`<sup>Optional</sup> <a name="DiffDiskSettingsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```go
func DiffDiskSettingsInput() LinuxVirtualMachineOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```go
func DiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecureVmDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput"></a>

```go
func SecureVmDiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `SecurityEncryptionTypeInput`<sup>Optional</sup> <a name="SecurityEncryptionTypeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput"></a>

```go
func SecurityEncryptionTypeInput() *string
```

- *Type:* *string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput"></a>

```go
func StorageAccountTypeInput() *string
```

- *Type:* *string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```go
func WriteAcceleratorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.caching"></a>

```go
func Caching() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId"></a>

```go
func DiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecureVmDiskEncryptionSetId`<sup>Required</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId"></a>

```go
func SecureVmDiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `SecurityEncryptionType`<sup>Required</sup> <a name="SecurityEncryptionType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.securityEncryptionType"></a>

```go
func SecurityEncryptionType() *string
```

- *Type:* *string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```go
func WriteAcceleratorEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() LinuxVirtualMachineOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

---


### LinuxVirtualMachineOsImageNotificationOutputReference <a name="LinuxVirtualMachineOsImageNotificationOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineOsImageNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachineOsImageNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification">LinuxVirtualMachineOsImageNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() LinuxVirtualMachineOsImageNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsImageNotification">LinuxVirtualMachineOsImageNotification</a>

---


### LinuxVirtualMachinePlanOutputReference <a name="LinuxVirtualMachinePlanOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachinePlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachinePlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.internalValue"></a>

```go
func InternalValue() LinuxVirtualMachinePlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

---


### LinuxVirtualMachineSecretCertificateList <a name="LinuxVirtualMachineSecretCertificateList" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineSecretCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LinuxVirtualMachineSecretCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.get"></a>

```go
func Get(index *f64) LinuxVirtualMachineSecretCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LinuxVirtualMachineSecretCertificateOutputReference <a name="LinuxVirtualMachineSecretCertificateOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineSecretCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LinuxVirtualMachineSecretCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LinuxVirtualMachineSecretList <a name="LinuxVirtualMachineSecretList" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LinuxVirtualMachineSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.get"></a>

```go
func Get(index *f64) LinuxVirtualMachineSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LinuxVirtualMachineSecretOutputReference <a name="LinuxVirtualMachineSecretOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LinuxVirtualMachineSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.putCertificate"></a>

```go
func PutCertificate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList">LinuxVirtualMachineSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificateInput">CertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificate"></a>

```go
func Certificate() LinuxVirtualMachineSecretCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList">LinuxVirtualMachineSecretCertificateList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificateInput"></a>

```go
func CertificateInput() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LinuxVirtualMachineSourceImageReferenceOutputReference <a name="LinuxVirtualMachineSourceImageReferenceOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineSourceImageReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachineSourceImageReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() LinuxVirtualMachineSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

---


### LinuxVirtualMachineTerminationNotificationOutputReference <a name="LinuxVirtualMachineTerminationNotificationOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineTerminationNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachineTerminationNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() LinuxVirtualMachineTerminationNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a>

---


### LinuxVirtualMachineTimeoutsOutputReference <a name="LinuxVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/linuxvirtualmachine"

linuxvirtualmachine.NewLinuxVirtualMachineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LinuxVirtualMachineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



