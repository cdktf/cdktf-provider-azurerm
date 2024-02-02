# `virtualMachineScaleSet` Submodule <a name="`virtualMachineScaleSet` Submodule" id="@cdktf/provider-azurerm.virtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineScaleSet <a name="VirtualMachineScaleSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set azurerm_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSet(scope Construct, id *string, config VirtualMachineScaleSetConfig) VirtualMachineScaleSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig">VirtualMachineScaleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig">VirtualMachineScaleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putBootDiagnostics">PutBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putNetworkProfile">PutNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfile">PutOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfileLinuxConfig">PutOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfileSecrets">PutOsProfileSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfileWindowsConfig">PutOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putRollingUpgradePolicy">PutRollingUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putSku">PutSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putStorageProfileDataDisk">PutStorageProfileDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putStorageProfileImageReference">PutStorageProfileImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putStorageProfileOsDisk">PutStorageProfileOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetAutomaticOsUpgrade">ResetAutomaticOsUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetBootDiagnostics">ResetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetEvictionPolicy">ResetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetHealthProbeId">ResetHealthProbeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOsProfileLinuxConfig">ResetOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOsProfileSecrets">ResetOsProfileSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOsProfileWindowsConfig">ResetOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOverprovision">ResetOverprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetProximityPlacementGroupId">ResetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetRollingUpgradePolicy">ResetRollingUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetSinglePlacementGroup">ResetSinglePlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetStorageProfileDataDisk">ResetStorageProfileDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetStorageProfileImageReference">ResetStorageProfileImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBootDiagnostics` <a name="PutBootDiagnostics" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putBootDiagnostics"></a>

```go
func PutBootDiagnostics(value VirtualMachineScaleSetBootDiagnostics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics">VirtualMachineScaleSetBootDiagnostics</a>

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putExtension"></a>

```go
func PutExtension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putExtension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putIdentity"></a>

```go
func PutIdentity(value VirtualMachineScaleSetIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity">VirtualMachineScaleSetIdentity</a>

---

##### `PutNetworkProfile` <a name="PutNetworkProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putNetworkProfile"></a>

```go
func PutNetworkProfile(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putNetworkProfile.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOsProfile` <a name="PutOsProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfile"></a>

```go
func PutOsProfile(value VirtualMachineScaleSetOsProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile">VirtualMachineScaleSetOsProfile</a>

---

##### `PutOsProfileLinuxConfig` <a name="PutOsProfileLinuxConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfileLinuxConfig"></a>

```go
func PutOsProfileLinuxConfig(value VirtualMachineScaleSetOsProfileLinuxConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfileLinuxConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig">VirtualMachineScaleSetOsProfileLinuxConfig</a>

---

##### `PutOsProfileSecrets` <a name="PutOsProfileSecrets" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfileSecrets"></a>

```go
func PutOsProfileSecrets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfileSecrets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOsProfileWindowsConfig` <a name="PutOsProfileWindowsConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfileWindowsConfig"></a>

```go
func PutOsProfileWindowsConfig(value VirtualMachineScaleSetOsProfileWindowsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putOsProfileWindowsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig">VirtualMachineScaleSetOsProfileWindowsConfig</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putPlan"></a>

```go
func PutPlan(value VirtualMachineScaleSetPlan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan">VirtualMachineScaleSetPlan</a>

---

##### `PutRollingUpgradePolicy` <a name="PutRollingUpgradePolicy" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putRollingUpgradePolicy"></a>

```go
func PutRollingUpgradePolicy(value VirtualMachineScaleSetRollingUpgradePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putRollingUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy">VirtualMachineScaleSetRollingUpgradePolicy</a>

---

##### `PutSku` <a name="PutSku" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putSku"></a>

```go
func PutSku(value VirtualMachineScaleSetSku)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku">VirtualMachineScaleSetSku</a>

---

##### `PutStorageProfileDataDisk` <a name="PutStorageProfileDataDisk" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putStorageProfileDataDisk"></a>

```go
func PutStorageProfileDataDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putStorageProfileDataDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorageProfileImageReference` <a name="PutStorageProfileImageReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putStorageProfileImageReference"></a>

```go
func PutStorageProfileImageReference(value VirtualMachineScaleSetStorageProfileImageReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putStorageProfileImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference">VirtualMachineScaleSetStorageProfileImageReference</a>

---

##### `PutStorageProfileOsDisk` <a name="PutStorageProfileOsDisk" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putStorageProfileOsDisk"></a>

```go
func PutStorageProfileOsDisk(value VirtualMachineScaleSetStorageProfileOsDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putStorageProfileOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk">VirtualMachineScaleSetStorageProfileOsDisk</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putTimeouts"></a>

```go
func PutTimeouts(value VirtualMachineScaleSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts">VirtualMachineScaleSetTimeouts</a>

---

##### `ResetAutomaticOsUpgrade` <a name="ResetAutomaticOsUpgrade" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetAutomaticOsUpgrade"></a>

```go
func ResetAutomaticOsUpgrade()
```

##### `ResetBootDiagnostics` <a name="ResetBootDiagnostics" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetBootDiagnostics"></a>

```go
func ResetBootDiagnostics()
```

##### `ResetEvictionPolicy` <a name="ResetEvictionPolicy" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetEvictionPolicy"></a>

```go
func ResetEvictionPolicy()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetExtension"></a>

```go
func ResetExtension()
```

##### `ResetHealthProbeId` <a name="ResetHealthProbeId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetHealthProbeId"></a>

```go
func ResetHealthProbeId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetOsProfileLinuxConfig` <a name="ResetOsProfileLinuxConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOsProfileLinuxConfig"></a>

```go
func ResetOsProfileLinuxConfig()
```

##### `ResetOsProfileSecrets` <a name="ResetOsProfileSecrets" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOsProfileSecrets"></a>

```go
func ResetOsProfileSecrets()
```

##### `ResetOsProfileWindowsConfig` <a name="ResetOsProfileWindowsConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOsProfileWindowsConfig"></a>

```go
func ResetOsProfileWindowsConfig()
```

##### `ResetOverprovision` <a name="ResetOverprovision" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetOverprovision"></a>

```go
func ResetOverprovision()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetPlan"></a>

```go
func ResetPlan()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetProximityPlacementGroupId"></a>

```go
func ResetProximityPlacementGroupId()
```

##### `ResetRollingUpgradePolicy` <a name="ResetRollingUpgradePolicy" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetRollingUpgradePolicy"></a>

```go
func ResetRollingUpgradePolicy()
```

##### `ResetSinglePlacementGroup` <a name="ResetSinglePlacementGroup" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetSinglePlacementGroup"></a>

```go
func ResetSinglePlacementGroup()
```

##### `ResetStorageProfileDataDisk` <a name="ResetStorageProfileDataDisk" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetStorageProfileDataDisk"></a>

```go
func ResetStorageProfileDataDisk()
```

##### `ResetStorageProfileImageReference` <a name="ResetStorageProfileImageReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetStorageProfileImageReference"></a>

```go
func ResetStorageProfileImageReference()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.resetZones"></a>

```go
func ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineScaleSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.VirtualMachineScaleSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.VirtualMachineScaleSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.VirtualMachineScaleSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.VirtualMachineScaleSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualMachineScaleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualMachineScaleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualMachineScaleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineScaleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference">VirtualMachineScaleSetBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList">VirtualMachineScaleSetExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference">VirtualMachineScaleSetIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.networkProfile">NetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList">VirtualMachineScaleSetNetworkProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfile">OsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference">VirtualMachineScaleSetOsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileLinuxConfig">OsProfileLinuxConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference">VirtualMachineScaleSetOsProfileLinuxConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileSecrets">OsProfileSecrets</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList">VirtualMachineScaleSetOsProfileSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileWindowsConfig">OsProfileWindowsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference">VirtualMachineScaleSetOsProfileWindowsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference">VirtualMachineScaleSetPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.rollingUpgradePolicy">RollingUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference">VirtualMachineScaleSetRollingUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference">VirtualMachineScaleSetSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileDataDisk">StorageProfileDataDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList">VirtualMachineScaleSetStorageProfileDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileImageReference">StorageProfileImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference">VirtualMachineScaleSetStorageProfileImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileOsDisk">StorageProfileOsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference">VirtualMachineScaleSetStorageProfileOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference">VirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.automaticOsUpgradeInput">AutomaticOsUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.bootDiagnosticsInput">BootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics">VirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.extensionInput">ExtensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.healthProbeIdInput">HealthProbeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity">VirtualMachineScaleSetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.networkProfileInput">NetworkProfileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileInput">OsProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile">VirtualMachineScaleSetOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileLinuxConfigInput">OsProfileLinuxConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig">VirtualMachineScaleSetOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileSecretsInput">OsProfileSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileWindowsConfigInput">OsProfileWindowsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig">VirtualMachineScaleSetOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.overprovisionInput">OverprovisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan">VirtualMachineScaleSetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.rollingUpgradePolicyInput">RollingUpgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy">VirtualMachineScaleSetRollingUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.singlePlacementGroupInput">SinglePlacementGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.skuInput">SkuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku">VirtualMachineScaleSetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileDataDiskInput">StorageProfileDataDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileImageReferenceInput">StorageProfileImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference">VirtualMachineScaleSetStorageProfileImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileOsDiskInput">StorageProfileOsDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk">VirtualMachineScaleSetStorageProfileOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.upgradePolicyModeInput">UpgradePolicyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.automaticOsUpgrade">AutomaticOsUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.healthProbeId">HealthProbeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.overprovision">Overprovision</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.singlePlacementGroup">SinglePlacementGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.upgradePolicyMode">UpgradePolicyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BootDiagnostics`<sup>Required</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.bootDiagnostics"></a>

```go
func BootDiagnostics() VirtualMachineScaleSetBootDiagnosticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference">VirtualMachineScaleSetBootDiagnosticsOutputReference</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.extension"></a>

```go
func Extension() VirtualMachineScaleSetExtensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList">VirtualMachineScaleSetExtensionList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.identity"></a>

```go
func Identity() VirtualMachineScaleSetIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference">VirtualMachineScaleSetIdentityOutputReference</a>

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.networkProfile"></a>

```go
func NetworkProfile() VirtualMachineScaleSetNetworkProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList">VirtualMachineScaleSetNetworkProfileList</a>

---

##### `OsProfile`<sup>Required</sup> <a name="OsProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfile"></a>

```go
func OsProfile() VirtualMachineScaleSetOsProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference">VirtualMachineScaleSetOsProfileOutputReference</a>

---

##### `OsProfileLinuxConfig`<sup>Required</sup> <a name="OsProfileLinuxConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileLinuxConfig"></a>

```go
func OsProfileLinuxConfig() VirtualMachineScaleSetOsProfileLinuxConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference">VirtualMachineScaleSetOsProfileLinuxConfigOutputReference</a>

---

##### `OsProfileSecrets`<sup>Required</sup> <a name="OsProfileSecrets" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileSecrets"></a>

```go
func OsProfileSecrets() VirtualMachineScaleSetOsProfileSecretsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList">VirtualMachineScaleSetOsProfileSecretsList</a>

---

##### `OsProfileWindowsConfig`<sup>Required</sup> <a name="OsProfileWindowsConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileWindowsConfig"></a>

```go
func OsProfileWindowsConfig() VirtualMachineScaleSetOsProfileWindowsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference">VirtualMachineScaleSetOsProfileWindowsConfigOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.plan"></a>

```go
func Plan() VirtualMachineScaleSetPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference">VirtualMachineScaleSetPlanOutputReference</a>

---

##### `RollingUpgradePolicy`<sup>Required</sup> <a name="RollingUpgradePolicy" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.rollingUpgradePolicy"></a>

```go
func RollingUpgradePolicy() VirtualMachineScaleSetRollingUpgradePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference">VirtualMachineScaleSetRollingUpgradePolicyOutputReference</a>

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.sku"></a>

```go
func Sku() VirtualMachineScaleSetSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference">VirtualMachineScaleSetSkuOutputReference</a>

---

##### `StorageProfileDataDisk`<sup>Required</sup> <a name="StorageProfileDataDisk" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileDataDisk"></a>

```go
func StorageProfileDataDisk() VirtualMachineScaleSetStorageProfileDataDiskList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList">VirtualMachineScaleSetStorageProfileDataDiskList</a>

---

##### `StorageProfileImageReference`<sup>Required</sup> <a name="StorageProfileImageReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileImageReference"></a>

```go
func StorageProfileImageReference() VirtualMachineScaleSetStorageProfileImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference">VirtualMachineScaleSetStorageProfileImageReferenceOutputReference</a>

---

##### `StorageProfileOsDisk`<sup>Required</sup> <a name="StorageProfileOsDisk" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileOsDisk"></a>

```go
func StorageProfileOsDisk() VirtualMachineScaleSetStorageProfileOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference">VirtualMachineScaleSetStorageProfileOsDiskOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.timeouts"></a>

```go
func Timeouts() VirtualMachineScaleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference">VirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `AutomaticOsUpgradeInput`<sup>Optional</sup> <a name="AutomaticOsUpgradeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.automaticOsUpgradeInput"></a>

```go
func AutomaticOsUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `BootDiagnosticsInput`<sup>Optional</sup> <a name="BootDiagnosticsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.bootDiagnosticsInput"></a>

```go
func BootDiagnosticsInput() VirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics">VirtualMachineScaleSetBootDiagnostics</a>

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.evictionPolicyInput"></a>

```go
func EvictionPolicyInput() *string
```

- *Type:* *string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.extensionInput"></a>

```go
func ExtensionInput() interface{}
```

- *Type:* interface{}

---

##### `HealthProbeIdInput`<sup>Optional</sup> <a name="HealthProbeIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.healthProbeIdInput"></a>

```go
func HealthProbeIdInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.identityInput"></a>

```go
func IdentityInput() VirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity">VirtualMachineScaleSetIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkProfileInput`<sup>Optional</sup> <a name="NetworkProfileInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.networkProfileInput"></a>

```go
func NetworkProfileInput() interface{}
```

- *Type:* interface{}

---

##### `OsProfileInput`<sup>Optional</sup> <a name="OsProfileInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileInput"></a>

```go
func OsProfileInput() VirtualMachineScaleSetOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile">VirtualMachineScaleSetOsProfile</a>

---

##### `OsProfileLinuxConfigInput`<sup>Optional</sup> <a name="OsProfileLinuxConfigInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileLinuxConfigInput"></a>

```go
func OsProfileLinuxConfigInput() VirtualMachineScaleSetOsProfileLinuxConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig">VirtualMachineScaleSetOsProfileLinuxConfig</a>

---

##### `OsProfileSecretsInput`<sup>Optional</sup> <a name="OsProfileSecretsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileSecretsInput"></a>

```go
func OsProfileSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `OsProfileWindowsConfigInput`<sup>Optional</sup> <a name="OsProfileWindowsConfigInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.osProfileWindowsConfigInput"></a>

```go
func OsProfileWindowsConfigInput() VirtualMachineScaleSetOsProfileWindowsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig">VirtualMachineScaleSetOsProfileWindowsConfig</a>

---

##### `OverprovisionInput`<sup>Optional</sup> <a name="OverprovisionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.overprovisionInput"></a>

```go
func OverprovisionInput() interface{}
```

- *Type:* interface{}

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.planInput"></a>

```go
func PlanInput() VirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan">VirtualMachineScaleSetPlan</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.proximityPlacementGroupIdInput"></a>

```go
func ProximityPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RollingUpgradePolicyInput`<sup>Optional</sup> <a name="RollingUpgradePolicyInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.rollingUpgradePolicyInput"></a>

```go
func RollingUpgradePolicyInput() VirtualMachineScaleSetRollingUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy">VirtualMachineScaleSetRollingUpgradePolicy</a>

---

##### `SinglePlacementGroupInput`<sup>Optional</sup> <a name="SinglePlacementGroupInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.singlePlacementGroupInput"></a>

```go
func SinglePlacementGroupInput() interface{}
```

- *Type:* interface{}

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.skuInput"></a>

```go
func SkuInput() VirtualMachineScaleSetSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku">VirtualMachineScaleSetSku</a>

---

##### `StorageProfileDataDiskInput`<sup>Optional</sup> <a name="StorageProfileDataDiskInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileDataDiskInput"></a>

```go
func StorageProfileDataDiskInput() interface{}
```

- *Type:* interface{}

---

##### `StorageProfileImageReferenceInput`<sup>Optional</sup> <a name="StorageProfileImageReferenceInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileImageReferenceInput"></a>

```go
func StorageProfileImageReferenceInput() VirtualMachineScaleSetStorageProfileImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference">VirtualMachineScaleSetStorageProfileImageReference</a>

---

##### `StorageProfileOsDiskInput`<sup>Optional</sup> <a name="StorageProfileOsDiskInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.storageProfileOsDiskInput"></a>

```go
func StorageProfileOsDiskInput() VirtualMachineScaleSetStorageProfileOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk">VirtualMachineScaleSetStorageProfileOsDisk</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpgradePolicyModeInput`<sup>Optional</sup> <a name="UpgradePolicyModeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.upgradePolicyModeInput"></a>

```go
func UpgradePolicyModeInput() *string
```

- *Type:* *string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutomaticOsUpgrade`<sup>Required</sup> <a name="AutomaticOsUpgrade" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.automaticOsUpgrade"></a>

```go
func AutomaticOsUpgrade() interface{}
```

- *Type:* interface{}

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.evictionPolicy"></a>

```go
func EvictionPolicy() *string
```

- *Type:* *string

---

##### `HealthProbeId`<sup>Required</sup> <a name="HealthProbeId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.healthProbeId"></a>

```go
func HealthProbeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Overprovision`<sup>Required</sup> <a name="Overprovision" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.overprovision"></a>

```go
func Overprovision() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.proximityPlacementGroupId"></a>

```go
func ProximityPlacementGroupId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SinglePlacementGroup`<sup>Required</sup> <a name="SinglePlacementGroup" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.singlePlacementGroup"></a>

```go
func SinglePlacementGroup() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UpgradePolicyMode`<sup>Required</sup> <a name="UpgradePolicyMode" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.upgradePolicyMode"></a>

```go
func UpgradePolicyMode() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineScaleSetBootDiagnostics <a name="VirtualMachineScaleSetBootDiagnostics" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetBootDiagnostics {
	StorageUri: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics.property.storageUri">StorageUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#storage_uri VirtualMachineScaleSet#storage_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#enabled VirtualMachineScaleSet#enabled}. |

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics.property.storageUri"></a>

```go
StorageUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#storage_uri VirtualMachineScaleSet#storage_uri}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#enabled VirtualMachineScaleSet#enabled}.

---

### VirtualMachineScaleSetConfig <a name="VirtualMachineScaleSetConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	NetworkProfile: interface{},
	OsProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile,
	ResourceGroupName: *string,
	Sku: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetSku,
	StorageProfileOsDisk: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk,
	UpgradePolicyMode: *string,
	AutomaticOsUpgrade: interface{},
	BootDiagnostics: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics,
	EvictionPolicy: *string,
	Extension: interface{},
	HealthProbeId: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetIdentity,
	LicenseType: *string,
	OsProfileLinuxConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig,
	OsProfileSecrets: interface{},
	OsProfileWindowsConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig,
	Overprovision: interface{},
	Plan: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetPlan,
	Priority: *string,
	ProximityPlacementGroupId: *string,
	RollingUpgradePolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy,
	SinglePlacementGroup: interface{},
	StorageProfileDataDisk: interface{},
	StorageProfileImageReference: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#location VirtualMachineScaleSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.networkProfile">NetworkProfile</a></code> | <code>interface{}</code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.osProfile">OsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile">VirtualMachineScaleSetOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#resource_group_name VirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku">VirtualMachineScaleSetSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.storageProfileOsDisk">StorageProfileOsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk">VirtualMachineScaleSetStorageProfileOsDisk</a></code> | storage_profile_os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.upgradePolicyMode">UpgradePolicyMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#upgrade_policy_mode VirtualMachineScaleSet#upgrade_policy_mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.automaticOsUpgrade">AutomaticOsUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#automatic_os_upgrade VirtualMachineScaleSet#automatic_os_upgrade}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics">VirtualMachineScaleSetBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#eviction_policy VirtualMachineScaleSet#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.extension">Extension</a></code> | <code>interface{}</code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.healthProbeId">HealthProbeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#health_probe_id VirtualMachineScaleSet#health_probe_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#id VirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity">VirtualMachineScaleSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#license_type VirtualMachineScaleSet#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.osProfileLinuxConfig">OsProfileLinuxConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig">VirtualMachineScaleSetOsProfileLinuxConfig</a></code> | os_profile_linux_config block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.osProfileSecrets">OsProfileSecrets</a></code> | <code>interface{}</code> | os_profile_secrets block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.osProfileWindowsConfig">OsProfileWindowsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig">VirtualMachineScaleSetOsProfileWindowsConfig</a></code> | os_profile_windows_config block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.overprovision">Overprovision</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#overprovision VirtualMachineScaleSet#overprovision}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan">VirtualMachineScaleSetPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.priority">Priority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#priority VirtualMachineScaleSet#priority}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#proximity_placement_group_id VirtualMachineScaleSet#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.rollingUpgradePolicy">RollingUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy">VirtualMachineScaleSetRollingUpgradePolicy</a></code> | rolling_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.singlePlacementGroup">SinglePlacementGroup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#single_placement_group VirtualMachineScaleSet#single_placement_group}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.storageProfileDataDisk">StorageProfileDataDisk</a></code> | <code>interface{}</code> | storage_profile_data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.storageProfileImageReference">StorageProfileImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference">VirtualMachineScaleSetStorageProfileImageReference</a></code> | storage_profile_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#tags VirtualMachineScaleSet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts">VirtualMachineScaleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#zones VirtualMachineScaleSet#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#location VirtualMachineScaleSet#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}.

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.networkProfile"></a>

```go
NetworkProfile interface{}
```

- *Type:* interface{}

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#network_profile VirtualMachineScaleSet#network_profile}

---

##### `OsProfile`<sup>Required</sup> <a name="OsProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.osProfile"></a>

```go
OsProfile VirtualMachineScaleSetOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile">VirtualMachineScaleSetOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#os_profile VirtualMachineScaleSet#os_profile}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#resource_group_name VirtualMachineScaleSet#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.sku"></a>

```go
Sku VirtualMachineScaleSetSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku">VirtualMachineScaleSetSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#sku VirtualMachineScaleSet#sku}

---

##### `StorageProfileOsDisk`<sup>Required</sup> <a name="StorageProfileOsDisk" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.storageProfileOsDisk"></a>

```go
StorageProfileOsDisk VirtualMachineScaleSetStorageProfileOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk">VirtualMachineScaleSetStorageProfileOsDisk</a>

storage_profile_os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#storage_profile_os_disk VirtualMachineScaleSet#storage_profile_os_disk}

---

##### `UpgradePolicyMode`<sup>Required</sup> <a name="UpgradePolicyMode" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.upgradePolicyMode"></a>

```go
UpgradePolicyMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#upgrade_policy_mode VirtualMachineScaleSet#upgrade_policy_mode}.

---

##### `AutomaticOsUpgrade`<sup>Optional</sup> <a name="AutomaticOsUpgrade" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.automaticOsUpgrade"></a>

```go
AutomaticOsUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#automatic_os_upgrade VirtualMachineScaleSet#automatic_os_upgrade}.

---

##### `BootDiagnostics`<sup>Optional</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.bootDiagnostics"></a>

```go
BootDiagnostics VirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics">VirtualMachineScaleSetBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#boot_diagnostics VirtualMachineScaleSet#boot_diagnostics}

---

##### `EvictionPolicy`<sup>Optional</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.evictionPolicy"></a>

```go
EvictionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#eviction_policy VirtualMachineScaleSet#eviction_policy}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.extension"></a>

```go
Extension interface{}
```

- *Type:* interface{}

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#extension VirtualMachineScaleSet#extension}

---

##### `HealthProbeId`<sup>Optional</sup> <a name="HealthProbeId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.healthProbeId"></a>

```go
HealthProbeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#health_probe_id VirtualMachineScaleSet#health_probe_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#id VirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.identity"></a>

```go
Identity VirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity">VirtualMachineScaleSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#identity VirtualMachineScaleSet#identity}

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#license_type VirtualMachineScaleSet#license_type}.

---

##### `OsProfileLinuxConfig`<sup>Optional</sup> <a name="OsProfileLinuxConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.osProfileLinuxConfig"></a>

```go
OsProfileLinuxConfig VirtualMachineScaleSetOsProfileLinuxConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig">VirtualMachineScaleSetOsProfileLinuxConfig</a>

os_profile_linux_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#os_profile_linux_config VirtualMachineScaleSet#os_profile_linux_config}

---

##### `OsProfileSecrets`<sup>Optional</sup> <a name="OsProfileSecrets" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.osProfileSecrets"></a>

```go
OsProfileSecrets interface{}
```

- *Type:* interface{}

os_profile_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#os_profile_secrets VirtualMachineScaleSet#os_profile_secrets}

---

##### `OsProfileWindowsConfig`<sup>Optional</sup> <a name="OsProfileWindowsConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.osProfileWindowsConfig"></a>

```go
OsProfileWindowsConfig VirtualMachineScaleSetOsProfileWindowsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig">VirtualMachineScaleSetOsProfileWindowsConfig</a>

os_profile_windows_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#os_profile_windows_config VirtualMachineScaleSet#os_profile_windows_config}

---

##### `Overprovision`<sup>Optional</sup> <a name="Overprovision" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.overprovision"></a>

```go
Overprovision interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#overprovision VirtualMachineScaleSet#overprovision}.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.plan"></a>

```go
Plan VirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan">VirtualMachineScaleSetPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#plan VirtualMachineScaleSet#plan}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#priority VirtualMachineScaleSet#priority}.

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.proximityPlacementGroupId"></a>

```go
ProximityPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#proximity_placement_group_id VirtualMachineScaleSet#proximity_placement_group_id}.

---

##### `RollingUpgradePolicy`<sup>Optional</sup> <a name="RollingUpgradePolicy" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.rollingUpgradePolicy"></a>

```go
RollingUpgradePolicy VirtualMachineScaleSetRollingUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy">VirtualMachineScaleSetRollingUpgradePolicy</a>

rolling_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#rolling_upgrade_policy VirtualMachineScaleSet#rolling_upgrade_policy}

---

##### `SinglePlacementGroup`<sup>Optional</sup> <a name="SinglePlacementGroup" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.singlePlacementGroup"></a>

```go
SinglePlacementGroup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#single_placement_group VirtualMachineScaleSet#single_placement_group}.

---

##### `StorageProfileDataDisk`<sup>Optional</sup> <a name="StorageProfileDataDisk" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.storageProfileDataDisk"></a>

```go
StorageProfileDataDisk interface{}
```

- *Type:* interface{}

storage_profile_data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#storage_profile_data_disk VirtualMachineScaleSet#storage_profile_data_disk}

---

##### `StorageProfileImageReference`<sup>Optional</sup> <a name="StorageProfileImageReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.storageProfileImageReference"></a>

```go
StorageProfileImageReference VirtualMachineScaleSetStorageProfileImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference">VirtualMachineScaleSetStorageProfileImageReference</a>

storage_profile_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#storage_profile_image_reference VirtualMachineScaleSet#storage_profile_image_reference}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#tags VirtualMachineScaleSet#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.timeouts"></a>

```go
Timeouts VirtualMachineScaleSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts">VirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#timeouts VirtualMachineScaleSet#timeouts}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#zones VirtualMachineScaleSet#zones}.

---

### VirtualMachineScaleSetExtension <a name="VirtualMachineScaleSetExtension" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetExtension {
	Name: *string,
	Publisher: *string,
	Type: *string,
	TypeHandlerVersion: *string,
	AutoUpgradeMinorVersion: interface{},
	ProtectedSettings: *string,
	ProvisionAfterExtensions: *[]*string,
	Settings: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#publisher VirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#type VirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#type_handler_version VirtualMachineScaleSet#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#auto_upgrade_minor_version VirtualMachineScaleSet#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.protectedSettings">ProtectedSettings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#protected_settings VirtualMachineScaleSet#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#provision_after_extensions VirtualMachineScaleSet#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.settings">Settings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#settings VirtualMachineScaleSet#settings}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#publisher VirtualMachineScaleSet#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#type VirtualMachineScaleSet#type}.

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.typeHandlerVersion"></a>

```go
TypeHandlerVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#type_handler_version VirtualMachineScaleSet#type_handler_version}.

---

##### `AutoUpgradeMinorVersion`<sup>Optional</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion"></a>

```go
AutoUpgradeMinorVersion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#auto_upgrade_minor_version VirtualMachineScaleSet#auto_upgrade_minor_version}.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.protectedSettings"></a>

```go
ProtectedSettings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#protected_settings VirtualMachineScaleSet#protected_settings}.

---

##### `ProvisionAfterExtensions`<sup>Optional</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.provisionAfterExtensions"></a>

```go
ProvisionAfterExtensions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#provision_after_extensions VirtualMachineScaleSet#provision_after_extensions}.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtension.property.settings"></a>

```go
Settings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#settings VirtualMachineScaleSet#settings}.

---

### VirtualMachineScaleSetIdentity <a name="VirtualMachineScaleSetIdentity" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#type VirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#identity_ids VirtualMachineScaleSet#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#type VirtualMachineScaleSet#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#identity_ids VirtualMachineScaleSet#identity_ids}.

---

### VirtualMachineScaleSetNetworkProfile <a name="VirtualMachineScaleSetNetworkProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetNetworkProfile {
	IpConfiguration: interface{},
	Name: *string,
	Primary: interface{},
	AcceleratedNetworking: interface{},
	DnsSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings,
	IpForwarding: interface{},
	NetworkSecurityGroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.ipConfiguration">IpConfiguration</a></code> | <code>interface{}</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.primary">Primary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#primary VirtualMachineScaleSet#primary}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.acceleratedNetworking">AcceleratedNetworking</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#accelerated_networking VirtualMachineScaleSet#accelerated_networking}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings">VirtualMachineScaleSetNetworkProfileDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.ipForwarding">IpForwarding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#ip_forwarding VirtualMachineScaleSet#ip_forwarding}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#network_security_group_id VirtualMachineScaleSet#network_security_group_id}. |

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.ipConfiguration"></a>

```go
IpConfiguration interface{}
```

- *Type:* interface{}

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#ip_configuration VirtualMachineScaleSet#ip_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}.

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#primary VirtualMachineScaleSet#primary}.

---

##### `AcceleratedNetworking`<sup>Optional</sup> <a name="AcceleratedNetworking" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.acceleratedNetworking"></a>

```go
AcceleratedNetworking interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#accelerated_networking VirtualMachineScaleSet#accelerated_networking}.

---

##### `DnsSettings`<sup>Optional</sup> <a name="DnsSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.dnsSettings"></a>

```go
DnsSettings VirtualMachineScaleSetNetworkProfileDnsSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings">VirtualMachineScaleSetNetworkProfileDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#dns_settings VirtualMachineScaleSet#dns_settings}

---

##### `IpForwarding`<sup>Optional</sup> <a name="IpForwarding" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.ipForwarding"></a>

```go
IpForwarding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#ip_forwarding VirtualMachineScaleSet#ip_forwarding}.

---

##### `NetworkSecurityGroupId`<sup>Optional</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfile.property.networkSecurityGroupId"></a>

```go
NetworkSecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#network_security_group_id VirtualMachineScaleSet#network_security_group_id}.

---

### VirtualMachineScaleSetNetworkProfileDnsSettings <a name="VirtualMachineScaleSetNetworkProfileDnsSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetNetworkProfileDnsSettings {
	DnsServers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#dns_servers VirtualMachineScaleSet#dns_servers}. |

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings.property.dnsServers"></a>

```go
DnsServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#dns_servers VirtualMachineScaleSet#dns_servers}.

---

### VirtualMachineScaleSetNetworkProfileIpConfiguration <a name="VirtualMachineScaleSetNetworkProfileIpConfiguration" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetNetworkProfileIpConfiguration {
	Name: *string,
	Primary: interface{},
	SubnetId: *string,
	ApplicationGatewayBackendAddressPoolIds: *[]*string,
	ApplicationSecurityGroupIds: *[]*string,
	LoadBalancerBackendAddressPoolIds: *[]*string,
	LoadBalancerInboundNatRulesIds: *[]*string,
	PublicIpAddressConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.primary">Primary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#primary VirtualMachineScaleSet#primary}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#subnet_id VirtualMachineScaleSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#application_gateway_backend_address_pool_ids VirtualMachineScaleSet#application_gateway_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#application_security_group_ids VirtualMachineScaleSet#application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#load_balancer_backend_address_pool_ids VirtualMachineScaleSet#load_balancer_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids VirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.publicIpAddressConfiguration">PublicIpAddressConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration">VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration</a></code> | public_ip_address_configuration block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}.

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#primary VirtualMachineScaleSet#primary}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#subnet_id VirtualMachineScaleSet#subnet_id}.

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Optional</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.applicationGatewayBackendAddressPoolIds"></a>

```go
ApplicationGatewayBackendAddressPoolIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#application_gateway_backend_address_pool_ids VirtualMachineScaleSet#application_gateway_backend_address_pool_ids}.

---

##### `ApplicationSecurityGroupIds`<sup>Optional</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.applicationSecurityGroupIds"></a>

```go
ApplicationSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#application_security_group_ids VirtualMachineScaleSet#application_security_group_ids}.

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.loadBalancerBackendAddressPoolIds"></a>

```go
LoadBalancerBackendAddressPoolIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#load_balancer_backend_address_pool_ids VirtualMachineScaleSet#load_balancer_backend_address_pool_ids}.

---

##### `LoadBalancerInboundNatRulesIds`<sup>Optional</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.loadBalancerInboundNatRulesIds"></a>

```go
LoadBalancerInboundNatRulesIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids VirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}.

---

##### `PublicIpAddressConfiguration`<sup>Optional</sup> <a name="PublicIpAddressConfiguration" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfiguration.property.publicIpAddressConfiguration"></a>

```go
PublicIpAddressConfiguration VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration">VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration</a>

public_ip_address_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#public_ip_address_configuration VirtualMachineScaleSet#public_ip_address_configuration}

---

### VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration <a name="VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration {
	DomainNameLabel: *string,
	IdleTimeout: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration.property.domainNameLabel">DomainNameLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#domain_name_label VirtualMachineScaleSet#domain_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration.property.idleTimeout">IdleTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#idle_timeout VirtualMachineScaleSet#idle_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}. |

---

##### `DomainNameLabel`<sup>Required</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration.property.domainNameLabel"></a>

```go
DomainNameLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#domain_name_label VirtualMachineScaleSet#domain_name_label}.

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration.property.idleTimeout"></a>

```go
IdleTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#idle_timeout VirtualMachineScaleSet#idle_timeout}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}.

---

### VirtualMachineScaleSetOsProfile <a name="VirtualMachineScaleSetOsProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetOsProfile {
	AdminUsername: *string,
	ComputerNamePrefix: *string,
	AdminPassword: *string,
	CustomData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#admin_username VirtualMachineScaleSet#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#computer_name_prefix VirtualMachineScaleSet#computer_name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#admin_password VirtualMachineScaleSet#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile.property.customData">CustomData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#custom_data VirtualMachineScaleSet#custom_data}. |

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile.property.adminUsername"></a>

```go
AdminUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#admin_username VirtualMachineScaleSet#admin_username}.

---

##### `ComputerNamePrefix`<sup>Required</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile.property.computerNamePrefix"></a>

```go
ComputerNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#computer_name_prefix VirtualMachineScaleSet#computer_name_prefix}.

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#admin_password VirtualMachineScaleSet#admin_password}.

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile.property.customData"></a>

```go
CustomData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#custom_data VirtualMachineScaleSet#custom_data}.

---

### VirtualMachineScaleSetOsProfileLinuxConfig <a name="VirtualMachineScaleSetOsProfileLinuxConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetOsProfileLinuxConfig {
	DisablePasswordAuthentication: interface{},
	SshKeys: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig.property.disablePasswordAuthentication">DisablePasswordAuthentication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#disable_password_authentication VirtualMachineScaleSet#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig.property.sshKeys">SshKeys</a></code> | <code>interface{}</code> | ssh_keys block. |

---

##### `DisablePasswordAuthentication`<sup>Optional</sup> <a name="DisablePasswordAuthentication" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig.property.disablePasswordAuthentication"></a>

```go
DisablePasswordAuthentication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#disable_password_authentication VirtualMachineScaleSet#disable_password_authentication}.

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig.property.sshKeys"></a>

```go
SshKeys interface{}
```

- *Type:* interface{}

ssh_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#ssh_keys VirtualMachineScaleSet#ssh_keys}

---

### VirtualMachineScaleSetOsProfileLinuxConfigSshKeys <a name="VirtualMachineScaleSetOsProfileLinuxConfigSshKeys" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetOsProfileLinuxConfigSshKeys {
	Path: *string,
	KeyData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeys.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#path VirtualMachineScaleSet#path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeys.property.keyData">KeyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#key_data VirtualMachineScaleSet#key_data}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeys.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#path VirtualMachineScaleSet#path}.

---

##### `KeyData`<sup>Optional</sup> <a name="KeyData" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeys.property.keyData"></a>

```go
KeyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#key_data VirtualMachineScaleSet#key_data}.

---

### VirtualMachineScaleSetOsProfileSecrets <a name="VirtualMachineScaleSetOsProfileSecrets" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetOsProfileSecrets {
	SourceVaultId: *string,
	VaultCertificates: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecrets.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#source_vault_id VirtualMachineScaleSet#source_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecrets.property.vaultCertificates">VaultCertificates</a></code> | <code>interface{}</code> | vault_certificates block. |

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecrets.property.sourceVaultId"></a>

```go
SourceVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#source_vault_id VirtualMachineScaleSet#source_vault_id}.

---

##### `VaultCertificates`<sup>Optional</sup> <a name="VaultCertificates" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecrets.property.vaultCertificates"></a>

```go
VaultCertificates interface{}
```

- *Type:* interface{}

vault_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#vault_certificates VirtualMachineScaleSet#vault_certificates}

---

### VirtualMachineScaleSetOsProfileSecretsVaultCertificates <a name="VirtualMachineScaleSetOsProfileSecretsVaultCertificates" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetOsProfileSecretsVaultCertificates {
	CertificateUrl: *string,
	CertificateStore: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificates.property.certificateUrl">CertificateUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#certificate_url VirtualMachineScaleSet#certificate_url}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificates.property.certificateStore">CertificateStore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#certificate_store VirtualMachineScaleSet#certificate_store}. |

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificates.property.certificateUrl"></a>

```go
CertificateUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#certificate_url VirtualMachineScaleSet#certificate_url}.

---

##### `CertificateStore`<sup>Optional</sup> <a name="CertificateStore" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificates.property.certificateStore"></a>

```go
CertificateStore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#certificate_store VirtualMachineScaleSet#certificate_store}.

---

### VirtualMachineScaleSetOsProfileWindowsConfig <a name="VirtualMachineScaleSetOsProfileWindowsConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetOsProfileWindowsConfig {
	AdditionalUnattendConfig: interface{},
	EnableAutomaticUpgrades: interface{},
	ProvisionVmAgent: interface{},
	Winrm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig.property.additionalUnattendConfig">AdditionalUnattendConfig</a></code> | <code>interface{}</code> | additional_unattend_config block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig.property.enableAutomaticUpgrades">EnableAutomaticUpgrades</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#enable_automatic_upgrades VirtualMachineScaleSet#enable_automatic_upgrades}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#provision_vm_agent VirtualMachineScaleSet#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig.property.winrm">Winrm</a></code> | <code>interface{}</code> | winrm block. |

---

##### `AdditionalUnattendConfig`<sup>Optional</sup> <a name="AdditionalUnattendConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig.property.additionalUnattendConfig"></a>

```go
AdditionalUnattendConfig interface{}
```

- *Type:* interface{}

additional_unattend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#additional_unattend_config VirtualMachineScaleSet#additional_unattend_config}

---

##### `EnableAutomaticUpgrades`<sup>Optional</sup> <a name="EnableAutomaticUpgrades" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig.property.enableAutomaticUpgrades"></a>

```go
EnableAutomaticUpgrades interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#enable_automatic_upgrades VirtualMachineScaleSet#enable_automatic_upgrades}.

---

##### `ProvisionVmAgent`<sup>Optional</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig.property.provisionVmAgent"></a>

```go
ProvisionVmAgent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#provision_vm_agent VirtualMachineScaleSet#provision_vm_agent}.

---

##### `Winrm`<sup>Optional</sup> <a name="Winrm" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig.property.winrm"></a>

```go
Winrm interface{}
```

- *Type:* interface{}

winrm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#winrm VirtualMachineScaleSet#winrm}

---

### VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig <a name="VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig {
	Component: *string,
	Content: *string,
	Pass: *string,
	SettingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig.property.component">Component</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#component VirtualMachineScaleSet#component}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#content VirtualMachineScaleSet#content}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig.property.pass">Pass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#pass VirtualMachineScaleSet#pass}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig.property.settingName">SettingName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#setting_name VirtualMachineScaleSet#setting_name}. |

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig.property.component"></a>

```go
Component *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#component VirtualMachineScaleSet#component}.

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#content VirtualMachineScaleSet#content}.

---

##### `Pass`<sup>Required</sup> <a name="Pass" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig.property.pass"></a>

```go
Pass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#pass VirtualMachineScaleSet#pass}.

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig.property.settingName"></a>

```go
SettingName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#setting_name VirtualMachineScaleSet#setting_name}.

---

### VirtualMachineScaleSetOsProfileWindowsConfigWinrm <a name="VirtualMachineScaleSetOsProfileWindowsConfigWinrm" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetOsProfileWindowsConfigWinrm {
	Protocol: *string,
	CertificateUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrm.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#protocol VirtualMachineScaleSet#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrm.property.certificateUrl">CertificateUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#certificate_url VirtualMachineScaleSet#certificate_url}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrm.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#protocol VirtualMachineScaleSet#protocol}.

---

##### `CertificateUrl`<sup>Optional</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrm.property.certificateUrl"></a>

```go
CertificateUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#certificate_url VirtualMachineScaleSet#certificate_url}.

---

### VirtualMachineScaleSetPlan <a name="VirtualMachineScaleSetPlan" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetPlan {
	Name: *string,
	Product: *string,
	Publisher: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#product VirtualMachineScaleSet#product}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#publisher VirtualMachineScaleSet#publisher}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#product VirtualMachineScaleSet#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#publisher VirtualMachineScaleSet#publisher}.

---

### VirtualMachineScaleSetRollingUpgradePolicy <a name="VirtualMachineScaleSetRollingUpgradePolicy" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetRollingUpgradePolicy {
	MaxBatchInstancePercent: *f64,
	MaxUnhealthyInstancePercent: *f64,
	MaxUnhealthyUpgradedInstancePercent: *f64,
	PauseTimeBetweenBatches: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy.property.maxBatchInstancePercent">MaxBatchInstancePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#max_batch_instance_percent VirtualMachineScaleSet#max_batch_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyInstancePercent">MaxUnhealthyInstancePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#max_unhealthy_instance_percent VirtualMachineScaleSet#max_unhealthy_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyUpgradedInstancePercent">MaxUnhealthyUpgradedInstancePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent VirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy.property.pauseTimeBetweenBatches">PauseTimeBetweenBatches</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#pause_time_between_batches VirtualMachineScaleSet#pause_time_between_batches}. |

---

##### `MaxBatchInstancePercent`<sup>Optional</sup> <a name="MaxBatchInstancePercent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy.property.maxBatchInstancePercent"></a>

```go
MaxBatchInstancePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#max_batch_instance_percent VirtualMachineScaleSet#max_batch_instance_percent}.

---

##### `MaxUnhealthyInstancePercent`<sup>Optional</sup> <a name="MaxUnhealthyInstancePercent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyInstancePercent"></a>

```go
MaxUnhealthyInstancePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#max_unhealthy_instance_percent VirtualMachineScaleSet#max_unhealthy_instance_percent}.

---

##### `MaxUnhealthyUpgradedInstancePercent`<sup>Optional</sup> <a name="MaxUnhealthyUpgradedInstancePercent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyUpgradedInstancePercent"></a>

```go
MaxUnhealthyUpgradedInstancePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent VirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}.

---

##### `PauseTimeBetweenBatches`<sup>Optional</sup> <a name="PauseTimeBetweenBatches" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy.property.pauseTimeBetweenBatches"></a>

```go
PauseTimeBetweenBatches *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#pause_time_between_batches VirtualMachineScaleSet#pause_time_between_batches}.

---

### VirtualMachineScaleSetSku <a name="VirtualMachineScaleSetSku" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetSku {
	Capacity: *f64,
	Name: *string,
	Tier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#capacity VirtualMachineScaleSet#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku.property.tier">Tier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#tier VirtualMachineScaleSet#tier}. |

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#capacity VirtualMachineScaleSet#capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}.

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#tier VirtualMachineScaleSet#tier}.

---

### VirtualMachineScaleSetStorageProfileDataDisk <a name="VirtualMachineScaleSetStorageProfileDataDisk" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetStorageProfileDataDisk {
	CreateOption: *string,
	Lun: *f64,
	Caching: *string,
	DiskSizeGb: *f64,
	ManagedDiskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.createOption">CreateOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#create_option VirtualMachineScaleSet#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.lun">Lun</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#lun VirtualMachineScaleSet#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.caching">Caching</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#caching VirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#disk_size_gb VirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.managedDiskType">ManagedDiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#managed_disk_type VirtualMachineScaleSet#managed_disk_type}. |

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.createOption"></a>

```go
CreateOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#create_option VirtualMachineScaleSet#create_option}.

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.lun"></a>

```go
Lun *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#lun VirtualMachineScaleSet#lun}.

---

##### `Caching`<sup>Optional</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.caching"></a>

```go
Caching *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#caching VirtualMachineScaleSet#caching}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#disk_size_gb VirtualMachineScaleSet#disk_size_gb}.

---

##### `ManagedDiskType`<sup>Optional</sup> <a name="ManagedDiskType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDisk.property.managedDiskType"></a>

```go
ManagedDiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#managed_disk_type VirtualMachineScaleSet#managed_disk_type}.

---

### VirtualMachineScaleSetStorageProfileImageReference <a name="VirtualMachineScaleSetStorageProfileImageReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetStorageProfileImageReference {
	Id: *string,
	Offer: *string,
	Publisher: *string,
	Sku: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#id VirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#offer VirtualMachineScaleSet#offer}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#publisher VirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#sku VirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#version VirtualMachineScaleSet#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#id VirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Offer`<sup>Optional</sup> <a name="Offer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#offer VirtualMachineScaleSet#offer}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#publisher VirtualMachineScaleSet#publisher}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#sku VirtualMachineScaleSet#sku}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#version VirtualMachineScaleSet#version}.

---

### VirtualMachineScaleSetStorageProfileOsDisk <a name="VirtualMachineScaleSetStorageProfileOsDisk" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetStorageProfileOsDisk {
	CreateOption: *string,
	Caching: *string,
	Image: *string,
	ManagedDiskType: *string,
	Name: *string,
	OsType: *string,
	VhdContainers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.createOption">CreateOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#create_option VirtualMachineScaleSet#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.caching">Caching</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#caching VirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#image VirtualMachineScaleSet#image}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.managedDiskType">ManagedDiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#managed_disk_type VirtualMachineScaleSet#managed_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#os_type VirtualMachineScaleSet#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.vhdContainers">VhdContainers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#vhd_containers VirtualMachineScaleSet#vhd_containers}. |

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.createOption"></a>

```go
CreateOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#create_option VirtualMachineScaleSet#create_option}.

---

##### `Caching`<sup>Optional</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.caching"></a>

```go
Caching *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#caching VirtualMachineScaleSet#caching}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#image VirtualMachineScaleSet#image}.

---

##### `ManagedDiskType`<sup>Optional</sup> <a name="ManagedDiskType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.managedDiskType"></a>

```go
ManagedDiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#managed_disk_type VirtualMachineScaleSet#managed_disk_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#os_type VirtualMachineScaleSet#os_type}.

---

##### `VhdContainers`<sup>Optional</sup> <a name="VhdContainers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk.property.vhdContainers"></a>

```go
VhdContainers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#vhd_containers VirtualMachineScaleSet#vhd_containers}.

---

### VirtualMachineScaleSetTimeouts <a name="VirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

&virtualmachinescaleset.VirtualMachineScaleSetTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#create VirtualMachineScaleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#delete VirtualMachineScaleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#read VirtualMachineScaleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#update VirtualMachineScaleSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#create VirtualMachineScaleSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#delete VirtualMachineScaleSet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#read VirtualMachineScaleSet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_machine_scale_set#update VirtualMachineScaleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineScaleSetBootDiagnosticsOutputReference <a name="VirtualMachineScaleSetBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetBootDiagnosticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetBootDiagnosticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageUriInput">StorageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageUri">StorageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics">VirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StorageUriInput`<sup>Optional</sup> <a name="StorageUriInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageUriInput"></a>

```go
func StorageUriInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageUri"></a>

```go
func StorageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetBootDiagnostics">VirtualMachineScaleSetBootDiagnostics</a>

---


### VirtualMachineScaleSetExtensionList <a name="VirtualMachineScaleSetExtensionList" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetExtensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetExtensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetExtensionOutputReference <a name="VirtualMachineScaleSetExtensionOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetExtensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetExtensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersion">ResetAutoUpgradeMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings">ResetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resetProvisionAfterExtensions">ResetProvisionAfterExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoUpgradeMinorVersion` <a name="ResetAutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersion"></a>

```go
func ResetAutoUpgradeMinorVersion()
```

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings"></a>

```go
func ResetProtectedSettings()
```

##### `ResetProvisionAfterExtensions` <a name="ResetProvisionAfterExtensions" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resetProvisionAfterExtensions"></a>

```go
func ResetProvisionAfterExtensions()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.resetSettings"></a>

```go
func ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput">AutoUpgradeMinorVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput">ProvisionAfterExtensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.settingsInput">SettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput">TypeHandlerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.protectedSettings">ProtectedSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.settings">Settings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="AutoUpgradeMinorVersionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput"></a>

```go
func AutoUpgradeMinorVersionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput"></a>

```go
func ProtectedSettingsInput() *string
```

- *Type:* *string

---

##### `ProvisionAfterExtensionsInput`<sup>Optional</sup> <a name="ProvisionAfterExtensionsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput"></a>

```go
func ProvisionAfterExtensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.settingsInput"></a>

```go
func SettingsInput() *string
```

- *Type:* *string

---

##### `TypeHandlerVersionInput`<sup>Optional</sup> <a name="TypeHandlerVersionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput"></a>

```go
func TypeHandlerVersionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AutoUpgradeMinorVersion`<sup>Required</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion"></a>

```go
func AutoUpgradeMinorVersion() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.protectedSettings"></a>

```go
func ProtectedSettings() *string
```

- *Type:* *string

---

##### `ProvisionAfterExtensions`<sup>Required</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions"></a>

```go
func ProvisionAfterExtensions() *[]*string
```

- *Type:* *[]*string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.settings"></a>

```go
func Settings() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion"></a>

```go
func TypeHandlerVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetExtensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetIdentityOutputReference <a name="VirtualMachineScaleSetIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity">VirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetIdentity">VirtualMachineScaleSetIdentity</a>

---


### VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference <a name="VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings">VirtualMachineScaleSetNetworkProfileDnsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.dnsServersInput"></a>

```go
func DnsServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetNetworkProfileDnsSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings">VirtualMachineScaleSetNetworkProfileDnsSettings</a>

---


### VirtualMachineScaleSetNetworkProfileIpConfigurationList <a name="VirtualMachineScaleSetNetworkProfileIpConfigurationList" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetNetworkProfileIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetNetworkProfileIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference <a name="VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.putPublicIpAddressConfiguration">PutPublicIpAddressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetApplicationGatewayBackendAddressPoolIds">ResetApplicationGatewayBackendAddressPoolIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetApplicationSecurityGroupIds">ResetApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds">ResetLoadBalancerBackendAddressPoolIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetLoadBalancerInboundNatRulesIds">ResetLoadBalancerInboundNatRulesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetPublicIpAddressConfiguration">ResetPublicIpAddressConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicIpAddressConfiguration` <a name="PutPublicIpAddressConfiguration" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.putPublicIpAddressConfiguration"></a>

```go
func PutPublicIpAddressConfiguration(value VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.putPublicIpAddressConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration">VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration</a>

---

##### `ResetApplicationGatewayBackendAddressPoolIds` <a name="ResetApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetApplicationGatewayBackendAddressPoolIds"></a>

```go
func ResetApplicationGatewayBackendAddressPoolIds()
```

##### `ResetApplicationSecurityGroupIds` <a name="ResetApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetApplicationSecurityGroupIds"></a>

```go
func ResetApplicationSecurityGroupIds()
```

##### `ResetLoadBalancerBackendAddressPoolIds` <a name="ResetLoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds"></a>

```go
func ResetLoadBalancerBackendAddressPoolIds()
```

##### `ResetLoadBalancerInboundNatRulesIds` <a name="ResetLoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetLoadBalancerInboundNatRulesIds"></a>

```go
func ResetLoadBalancerInboundNatRulesIds()
```

##### `ResetPublicIpAddressConfiguration` <a name="ResetPublicIpAddressConfiguration" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.resetPublicIpAddressConfiguration"></a>

```go
func ResetPublicIpAddressConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.publicIpAddressConfiguration">PublicIpAddressConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference">VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput">ApplicationGatewayBackendAddressPoolIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput">ApplicationSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput">LoadBalancerBackendAddressPoolIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput">LoadBalancerInboundNatRulesIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.publicIpAddressConfigurationInput">PublicIpAddressConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration">VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicIpAddressConfiguration`<sup>Required</sup> <a name="PublicIpAddressConfiguration" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.publicIpAddressConfiguration"></a>

```go
func PublicIpAddressConfiguration() VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference">VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference</a>

---

##### `ApplicationGatewayBackendAddressPoolIdsInput`<sup>Optional</sup> <a name="ApplicationGatewayBackendAddressPoolIdsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput"></a>

```go
func ApplicationGatewayBackendAddressPoolIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput"></a>

```go
func ApplicationSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerBackendAddressPoolIdsInput`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolIdsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput"></a>

```go
func LoadBalancerBackendAddressPoolIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerInboundNatRulesIdsInput`<sup>Optional</sup> <a name="LoadBalancerInboundNatRulesIdsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput"></a>

```go
func LoadBalancerInboundNatRulesIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `PublicIpAddressConfigurationInput`<sup>Optional</sup> <a name="PublicIpAddressConfigurationInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.publicIpAddressConfigurationInput"></a>

```go
func PublicIpAddressConfigurationInput() VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration">VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration</a>

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Required</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```go
func ApplicationGatewayBackendAddressPoolIds() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationSecurityGroupIds`<sup>Required</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```go
func ApplicationSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Required</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```go
func LoadBalancerBackendAddressPoolIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerInboundNatRulesIds`<sup>Required</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```go
func LoadBalancerInboundNatRulesIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference <a name="VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.domainNameLabelInput">DomainNameLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.domainNameLabel">DomainNameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration">VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameLabelInput`<sup>Optional</sup> <a name="DomainNameLabelInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.domainNameLabelInput"></a>

```go
func DomainNameLabelInput() *string
```

- *Type:* *string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.idleTimeoutInput"></a>

```go
func IdleTimeoutInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DomainNameLabel`<sup>Required</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.domainNameLabel"></a>

```go
func DomainNameLabel() *string
```

- *Type:* *string

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.idleTimeout"></a>

```go
func IdleTimeout() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration">VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration</a>

---


### VirtualMachineScaleSetNetworkProfileList <a name="VirtualMachineScaleSetNetworkProfileList" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetNetworkProfileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetNetworkProfileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetNetworkProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetNetworkProfileOutputReference <a name="VirtualMachineScaleSetNetworkProfileOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetNetworkProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetNetworkProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.putDnsSettings">PutDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.putIpConfiguration">PutIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resetAcceleratedNetworking">ResetAcceleratedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resetDnsSettings">ResetDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resetIpForwarding">ResetIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resetNetworkSecurityGroupId">ResetNetworkSecurityGroupId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsSettings` <a name="PutDnsSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.putDnsSettings"></a>

```go
func PutDnsSettings(value VirtualMachineScaleSetNetworkProfileDnsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.putDnsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings">VirtualMachineScaleSetNetworkProfileDnsSettings</a>

---

##### `PutIpConfiguration` <a name="PutIpConfiguration" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.putIpConfiguration"></a>

```go
func PutIpConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAcceleratedNetworking` <a name="ResetAcceleratedNetworking" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resetAcceleratedNetworking"></a>

```go
func ResetAcceleratedNetworking()
```

##### `ResetDnsSettings` <a name="ResetDnsSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resetDnsSettings"></a>

```go
func ResetDnsSettings()
```

##### `ResetIpForwarding` <a name="ResetIpForwarding" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resetIpForwarding"></a>

```go
func ResetIpForwarding()
```

##### `ResetNetworkSecurityGroupId` <a name="ResetNetworkSecurityGroupId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.resetNetworkSecurityGroupId"></a>

```go
func ResetNetworkSecurityGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference">VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList">VirtualMachineScaleSetNetworkProfileIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.acceleratedNetworkingInput">AcceleratedNetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.dnsSettingsInput">DnsSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings">VirtualMachineScaleSetNetworkProfileDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.ipForwardingInput">IpForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.networkSecurityGroupIdInput">NetworkSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.acceleratedNetworking">AcceleratedNetworking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.ipForwarding">IpForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsSettings`<sup>Required</sup> <a name="DnsSettings" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.dnsSettings"></a>

```go
func DnsSettings() VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference">VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference</a>

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() VirtualMachineScaleSetNetworkProfileIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileIpConfigurationList">VirtualMachineScaleSetNetworkProfileIpConfigurationList</a>

---

##### `AcceleratedNetworkingInput`<sup>Optional</sup> <a name="AcceleratedNetworkingInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.acceleratedNetworkingInput"></a>

```go
func AcceleratedNetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `DnsSettingsInput`<sup>Optional</sup> <a name="DnsSettingsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.dnsSettingsInput"></a>

```go
func DnsSettingsInput() VirtualMachineScaleSetNetworkProfileDnsSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileDnsSettings">VirtualMachineScaleSetNetworkProfileDnsSettings</a>

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IpForwardingInput`<sup>Optional</sup> <a name="IpForwardingInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.ipForwardingInput"></a>

```go
func IpForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupIdInput`<sup>Optional</sup> <a name="NetworkSecurityGroupIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.networkSecurityGroupIdInput"></a>

```go
func NetworkSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `AcceleratedNetworking`<sup>Required</sup> <a name="AcceleratedNetworking" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.acceleratedNetworking"></a>

```go
func AcceleratedNetworking() interface{}
```

- *Type:* interface{}

---

##### `IpForwarding`<sup>Required</sup> <a name="IpForwarding" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.ipForwarding"></a>

```go
func IpForwarding() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.networkSecurityGroupId"></a>

```go
func NetworkSecurityGroupId() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetNetworkProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileLinuxConfigOutputReference <a name="VirtualMachineScaleSetOsProfileLinuxConfigOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileLinuxConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetOsProfileLinuxConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.putSshKeys">PutSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.resetDisablePasswordAuthentication">ResetDisablePasswordAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSshKeys` <a name="PutSshKeys" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.putSshKeys"></a>

```go
func PutSshKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.putSshKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisablePasswordAuthentication` <a name="ResetDisablePasswordAuthentication" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.resetDisablePasswordAuthentication"></a>

```go
func ResetDisablePasswordAuthentication()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.resetSshKeys"></a>

```go
func ResetSshKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.sshKeys">SshKeys</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList">VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.disablePasswordAuthenticationInput">DisablePasswordAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.disablePasswordAuthentication">DisablePasswordAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig">VirtualMachineScaleSetOsProfileLinuxConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.sshKeys"></a>

```go
func SshKeys() VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList">VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList</a>

---

##### `DisablePasswordAuthenticationInput`<sup>Optional</sup> <a name="DisablePasswordAuthenticationInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.disablePasswordAuthenticationInput"></a>

```go
func DisablePasswordAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.sshKeysInput"></a>

```go
func SshKeysInput() interface{}
```

- *Type:* interface{}

---

##### `DisablePasswordAuthentication`<sup>Required</sup> <a name="DisablePasswordAuthentication" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.disablePasswordAuthentication"></a>

```go
func DisablePasswordAuthentication() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetOsProfileLinuxConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfig">VirtualMachineScaleSetOsProfileLinuxConfig</a>

---


### VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList <a name="VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileLinuxConfigSshKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference <a name="VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.resetKeyData">ResetKeyData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyData` <a name="ResetKeyData" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.resetKeyData"></a>

```go
func ResetKeyData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.keyDataInput">KeyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.keyData">KeyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyDataInput`<sup>Optional</sup> <a name="KeyDataInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.keyDataInput"></a>

```go
func KeyDataInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `KeyData`<sup>Required</sup> <a name="KeyData" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.keyData"></a>

```go
func KeyData() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileOutputReference <a name="VirtualMachineScaleSetOsProfileOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetOsProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.resetCustomData">ResetCustomData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.resetAdminPassword"></a>

```go
func ResetAdminPassword()
```

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.resetCustomData"></a>

```go
func ResetCustomData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.computerNamePrefixInput">ComputerNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.customDataInput">CustomDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.customData">CustomData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile">VirtualMachineScaleSetOsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.adminUsernameInput"></a>

```go
func AdminUsernameInput() *string
```

- *Type:* *string

---

##### `ComputerNamePrefixInput`<sup>Optional</sup> <a name="ComputerNamePrefixInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.computerNamePrefixInput"></a>

```go
func ComputerNamePrefixInput() *string
```

- *Type:* *string

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.customDataInput"></a>

```go
func CustomDataInput() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `ComputerNamePrefix`<sup>Required</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.computerNamePrefix"></a>

```go
func ComputerNamePrefix() *string
```

- *Type:* *string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.customData"></a>

```go
func CustomData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfile">VirtualMachineScaleSetOsProfile</a>

---


### VirtualMachineScaleSetOsProfileSecretsList <a name="VirtualMachineScaleSetOsProfileSecretsList" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetOsProfileSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetOsProfileSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileSecretsOutputReference <a name="VirtualMachineScaleSetOsProfileSecretsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetOsProfileSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.putVaultCertificates">PutVaultCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.resetVaultCertificates">ResetVaultCertificates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVaultCertificates` <a name="PutVaultCertificates" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.putVaultCertificates"></a>

```go
func PutVaultCertificates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.putVaultCertificates.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetVaultCertificates` <a name="ResetVaultCertificates" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.resetVaultCertificates"></a>

```go
func ResetVaultCertificates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.vaultCertificates">VaultCertificates</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList">VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.vaultCertificatesInput">VaultCertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VaultCertificates`<sup>Required</sup> <a name="VaultCertificates" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.vaultCertificates"></a>

```go
func VaultCertificates() VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList">VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList</a>

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.sourceVaultIdInput"></a>

```go
func SourceVaultIdInput() *string
```

- *Type:* *string

---

##### `VaultCertificatesInput`<sup>Optional</sup> <a name="VaultCertificatesInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.vaultCertificatesInput"></a>

```go
func VaultCertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.sourceVaultId"></a>

```go
func SourceVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList <a name="VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileSecretsVaultCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference <a name="VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.resetCertificateStore">ResetCertificateStore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateStore` <a name="ResetCertificateStore" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.resetCertificateStore"></a>

```go
func ResetCertificateStore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.certificateStoreInput">CertificateStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.certificateStore">CertificateStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreInput`<sup>Optional</sup> <a name="CertificateStoreInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.certificateStoreInput"></a>

```go
func CertificateStoreInput() *string
```

- *Type:* *string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrlInput"></a>

```go
func CertificateUrlInput() *string
```

- *Type:* *string

---

##### `CertificateStore`<sup>Required</sup> <a name="CertificateStore" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.certificateStore"></a>

```go
func CertificateStore() *string
```

- *Type:* *string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrl"></a>

```go
func CertificateUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList <a name="VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference <a name="VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.componentInput">ComponentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.passInput">PassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingNameInput">SettingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.component">Component</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.pass">Pass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingName">SettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.componentInput"></a>

```go
func ComponentInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `PassInput`<sup>Optional</sup> <a name="PassInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.passInput"></a>

```go
func PassInput() *string
```

- *Type:* *string

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingNameInput"></a>

```go
func SettingNameInput() *string
```

- *Type:* *string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.component"></a>

```go
func Component() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Pass`<sup>Required</sup> <a name="Pass" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.pass"></a>

```go
func Pass() *string
```

- *Type:* *string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingName"></a>

```go
func SettingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileWindowsConfigOutputReference <a name="VirtualMachineScaleSetOsProfileWindowsConfigOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileWindowsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetOsProfileWindowsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig">PutAdditionalUnattendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.putWinrm">PutWinrm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resetAdditionalUnattendConfig">ResetAdditionalUnattendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resetEnableAutomaticUpgrades">ResetEnableAutomaticUpgrades</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resetProvisionVmAgent">ResetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resetWinrm">ResetWinrm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalUnattendConfig` <a name="PutAdditionalUnattendConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig"></a>

```go
func PutAdditionalUnattendConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWinrm` <a name="PutWinrm" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.putWinrm"></a>

```go
func PutWinrm(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.putWinrm.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalUnattendConfig` <a name="ResetAdditionalUnattendConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resetAdditionalUnattendConfig"></a>

```go
func ResetAdditionalUnattendConfig()
```

##### `ResetEnableAutomaticUpgrades` <a name="ResetEnableAutomaticUpgrades" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resetEnableAutomaticUpgrades"></a>

```go
func ResetEnableAutomaticUpgrades()
```

##### `ResetProvisionVmAgent` <a name="ResetProvisionVmAgent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resetProvisionVmAgent"></a>

```go
func ResetProvisionVmAgent()
```

##### `ResetWinrm` <a name="ResetWinrm" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.resetWinrm"></a>

```go
func ResetWinrm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.additionalUnattendConfig">AdditionalUnattendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList">VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.winrm">Winrm</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList">VirtualMachineScaleSetOsProfileWindowsConfigWinrmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.additionalUnattendConfigInput">AdditionalUnattendConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgradesInput">EnableAutomaticUpgradesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.provisionVmAgentInput">ProvisionVmAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.winrmInput">WinrmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgrades">EnableAutomaticUpgrades</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig">VirtualMachineScaleSetOsProfileWindowsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalUnattendConfig`<sup>Required</sup> <a name="AdditionalUnattendConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.additionalUnattendConfig"></a>

```go
func AdditionalUnattendConfig() VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList">VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList</a>

---

##### `Winrm`<sup>Required</sup> <a name="Winrm" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.winrm"></a>

```go
func Winrm() VirtualMachineScaleSetOsProfileWindowsConfigWinrmList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList">VirtualMachineScaleSetOsProfileWindowsConfigWinrmList</a>

---

##### `AdditionalUnattendConfigInput`<sup>Optional</sup> <a name="AdditionalUnattendConfigInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.additionalUnattendConfigInput"></a>

```go
func AdditionalUnattendConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAutomaticUpgradesInput`<sup>Optional</sup> <a name="EnableAutomaticUpgradesInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgradesInput"></a>

```go
func EnableAutomaticUpgradesInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisionVmAgentInput`<sup>Optional</sup> <a name="ProvisionVmAgentInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.provisionVmAgentInput"></a>

```go
func ProvisionVmAgentInput() interface{}
```

- *Type:* interface{}

---

##### `WinrmInput`<sup>Optional</sup> <a name="WinrmInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.winrmInput"></a>

```go
func WinrmInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAutomaticUpgrades`<sup>Required</sup> <a name="EnableAutomaticUpgrades" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgrades"></a>

```go
func EnableAutomaticUpgrades() interface{}
```

- *Type:* interface{}

---

##### `ProvisionVmAgent`<sup>Required</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.provisionVmAgent"></a>

```go
func ProvisionVmAgent() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetOsProfileWindowsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfig">VirtualMachineScaleSetOsProfileWindowsConfig</a>

---


### VirtualMachineScaleSetOsProfileWindowsConfigWinrmList <a name="VirtualMachineScaleSetOsProfileWindowsConfigWinrmList" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileWindowsConfigWinrmList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetOsProfileWindowsConfigWinrmList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference <a name="VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.resetCertificateUrl">ResetCertificateUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateUrl` <a name="ResetCertificateUrl" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.resetCertificateUrl"></a>

```go
func ResetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.certificateUrlInput"></a>

```go
func CertificateUrlInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.certificateUrl"></a>

```go
func CertificateUrl() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetPlanOutputReference <a name="VirtualMachineScaleSetPlanOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan">VirtualMachineScaleSetPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetPlan">VirtualMachineScaleSetPlan</a>

---


### VirtualMachineScaleSetRollingUpgradePolicyOutputReference <a name="VirtualMachineScaleSetRollingUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetRollingUpgradePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetRollingUpgradePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaxBatchInstancePercent">ResetMaxBatchInstancePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaxUnhealthyInstancePercent">ResetMaxUnhealthyInstancePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaxUnhealthyUpgradedInstancePercent">ResetMaxUnhealthyUpgradedInstancePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetPauseTimeBetweenBatches">ResetPauseTimeBetweenBatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBatchInstancePercent` <a name="ResetMaxBatchInstancePercent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaxBatchInstancePercent"></a>

```go
func ResetMaxBatchInstancePercent()
```

##### `ResetMaxUnhealthyInstancePercent` <a name="ResetMaxUnhealthyInstancePercent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaxUnhealthyInstancePercent"></a>

```go
func ResetMaxUnhealthyInstancePercent()
```

##### `ResetMaxUnhealthyUpgradedInstancePercent` <a name="ResetMaxUnhealthyUpgradedInstancePercent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaxUnhealthyUpgradedInstancePercent"></a>

```go
func ResetMaxUnhealthyUpgradedInstancePercent()
```

##### `ResetPauseTimeBetweenBatches` <a name="ResetPauseTimeBetweenBatches" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetPauseTimeBetweenBatches"></a>

```go
func ResetPauseTimeBetweenBatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercentInput">MaxBatchInstancePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercentInput">MaxUnhealthyInstancePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercentInput">MaxUnhealthyUpgradedInstancePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatchesInput">PauseTimeBetweenBatchesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercent">MaxBatchInstancePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercent">MaxUnhealthyInstancePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercent">MaxUnhealthyUpgradedInstancePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatches">PauseTimeBetweenBatches</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy">VirtualMachineScaleSetRollingUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBatchInstancePercentInput`<sup>Optional</sup> <a name="MaxBatchInstancePercentInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercentInput"></a>

```go
func MaxBatchInstancePercentInput() *f64
```

- *Type:* *f64

---

##### `MaxUnhealthyInstancePercentInput`<sup>Optional</sup> <a name="MaxUnhealthyInstancePercentInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercentInput"></a>

```go
func MaxUnhealthyInstancePercentInput() *f64
```

- *Type:* *f64

---

##### `MaxUnhealthyUpgradedInstancePercentInput`<sup>Optional</sup> <a name="MaxUnhealthyUpgradedInstancePercentInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercentInput"></a>

```go
func MaxUnhealthyUpgradedInstancePercentInput() *f64
```

- *Type:* *f64

---

##### `PauseTimeBetweenBatchesInput`<sup>Optional</sup> <a name="PauseTimeBetweenBatchesInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatchesInput"></a>

```go
func PauseTimeBetweenBatchesInput() *string
```

- *Type:* *string

---

##### `MaxBatchInstancePercent`<sup>Required</sup> <a name="MaxBatchInstancePercent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercent"></a>

```go
func MaxBatchInstancePercent() *f64
```

- *Type:* *f64

---

##### `MaxUnhealthyInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyInstancePercent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercent"></a>

```go
func MaxUnhealthyInstancePercent() *f64
```

- *Type:* *f64

---

##### `MaxUnhealthyUpgradedInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyUpgradedInstancePercent" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercent"></a>

```go
func MaxUnhealthyUpgradedInstancePercent() *f64
```

- *Type:* *f64

---

##### `PauseTimeBetweenBatches`<sup>Required</sup> <a name="PauseTimeBetweenBatches" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatches"></a>

```go
func PauseTimeBetweenBatches() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetRollingUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetRollingUpgradePolicy">VirtualMachineScaleSetRollingUpgradePolicy</a>

---


### VirtualMachineScaleSetSkuOutputReference <a name="VirtualMachineScaleSetSkuOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetSkuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetSkuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.resetTier">ResetTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.resetTier"></a>

```go
func ResetTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku">VirtualMachineScaleSetSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSkuOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetSku">VirtualMachineScaleSetSku</a>

---


### VirtualMachineScaleSetStorageProfileDataDiskList <a name="VirtualMachineScaleSetStorageProfileDataDiskList" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetStorageProfileDataDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetStorageProfileDataDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetStorageProfileDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetStorageProfileDataDiskOutputReference <a name="VirtualMachineScaleSetStorageProfileDataDiskOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetStorageProfileDataDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetStorageProfileDataDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.resetCaching">ResetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.resetManagedDiskType">ResetManagedDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaching` <a name="ResetCaching" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.resetCaching"></a>

```go
func ResetCaching()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetManagedDiskType` <a name="ResetManagedDiskType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.resetManagedDiskType"></a>

```go
func ResetManagedDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.createOptionInput">CreateOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.lunInput">LunInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.managedDiskTypeInput">ManagedDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.caching">Caching</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.createOption">CreateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.lun">Lun</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.managedDiskType">ManagedDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.cachingInput"></a>

```go
func CachingInput() *string
```

- *Type:* *string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.createOptionInput"></a>

```go
func CreateOptionInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.lunInput"></a>

```go
func LunInput() *f64
```

- *Type:* *f64

---

##### `ManagedDiskTypeInput`<sup>Optional</sup> <a name="ManagedDiskTypeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.managedDiskTypeInput"></a>

```go
func ManagedDiskTypeInput() *string
```

- *Type:* *string

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.caching"></a>

```go
func Caching() *string
```

- *Type:* *string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.createOption"></a>

```go
func CreateOption() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.lun"></a>

```go
func Lun() *f64
```

- *Type:* *f64

---

##### `ManagedDiskType`<sup>Required</sup> <a name="ManagedDiskType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.managedDiskType"></a>

```go
func ManagedDiskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileDataDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetStorageProfileImageReferenceOutputReference <a name="VirtualMachineScaleSetStorageProfileImageReferenceOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetStorageProfileImageReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetStorageProfileImageReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetOffer">ResetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetPublisher">ResetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetOffer` <a name="ResetOffer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetOffer"></a>

```go
func ResetOffer()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetPublisher"></a>

```go
func ResetPublisher()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetSku"></a>

```go
func ResetSku()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference">VirtualMachineScaleSetStorageProfileImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetStorageProfileImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileImageReference">VirtualMachineScaleSetStorageProfileImageReference</a>

---


### VirtualMachineScaleSetStorageProfileOsDiskOutputReference <a name="VirtualMachineScaleSetStorageProfileOsDiskOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetStorageProfileOsDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetStorageProfileOsDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetCaching">ResetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetManagedDiskType">ResetManagedDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetVhdContainers">ResetVhdContainers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaching` <a name="ResetCaching" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetCaching"></a>

```go
func ResetCaching()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetManagedDiskType` <a name="ResetManagedDiskType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetManagedDiskType"></a>

```go
func ResetManagedDiskType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetOsType"></a>

```go
func ResetOsType()
```

##### `ResetVhdContainers` <a name="ResetVhdContainers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.resetVhdContainers"></a>

```go
func ResetVhdContainers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.createOptionInput">CreateOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.managedDiskTypeInput">ManagedDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.vhdContainersInput">VhdContainersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.caching">Caching</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.createOption">CreateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.managedDiskType">ManagedDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.vhdContainers">VhdContainers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk">VirtualMachineScaleSetStorageProfileOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.cachingInput"></a>

```go
func CachingInput() *string
```

- *Type:* *string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.createOptionInput"></a>

```go
func CreateOptionInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ManagedDiskTypeInput`<sup>Optional</sup> <a name="ManagedDiskTypeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.managedDiskTypeInput"></a>

```go
func ManagedDiskTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `VhdContainersInput`<sup>Optional</sup> <a name="VhdContainersInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.vhdContainersInput"></a>

```go
func VhdContainersInput() *[]*string
```

- *Type:* *[]*string

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.caching"></a>

```go
func Caching() *string
```

- *Type:* *string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.createOption"></a>

```go
func CreateOption() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ManagedDiskType`<sup>Required</sup> <a name="ManagedDiskType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.managedDiskType"></a>

```go
func ManagedDiskType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `VhdContainers`<sup>Required</sup> <a name="VhdContainers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.vhdContainers"></a>

```go
func VhdContainers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetStorageProfileOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetStorageProfileOsDisk">VirtualMachineScaleSetStorageProfileOsDisk</a>

---


### VirtualMachineScaleSetTimeoutsOutputReference <a name="VirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualmachinescaleset"

virtualmachinescaleset.NewVirtualMachineScaleSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSet.VirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



