# `siteRecoveryVmwareReplicatedVm` Submodule <a name="`siteRecoveryVmwareReplicatedVm` Submodule" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryVmwareReplicatedVm <a name="SiteRecoveryVmwareReplicatedVm" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm azurerm_site_recovery_vmware_replicated_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.NewSiteRecoveryVmwareReplicatedVm(scope Construct, id *string, config SiteRecoveryVmwareReplicatedVmConfig) SiteRecoveryVmwareReplicatedVm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig">SiteRecoveryVmwareReplicatedVmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig">SiteRecoveryVmwareReplicatedVmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putManagedDisk">PutManagedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultLogStorageAccountId">ResetDefaultLogStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultRecoveryDiskType">ResetDefaultRecoveryDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultTargetDiskEncryptionSetId">ResetDefaultTargetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetManagedDisk">ResetManagedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetMultiVmGroupName">ResetMultiVmGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetAvailabilitySetId">ResetTargetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetBootDiagnosticsStorageAccountId">ResetTargetBootDiagnosticsStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetNetworkId">ResetTargetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetProximityPlacementGroupId">ResetTargetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetVmSize">ResetTargetVmSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetZone">ResetTargetZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTestNetworkId">ResetTestNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManagedDisk` <a name="PutManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putManagedDisk"></a>

```go
func PutManagedDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putManagedDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts"></a>

```go
func PutTimeouts(value SiteRecoveryVmwareReplicatedVmTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>

---

##### `ResetDefaultLogStorageAccountId` <a name="ResetDefaultLogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultLogStorageAccountId"></a>

```go
func ResetDefaultLogStorageAccountId()
```

##### `ResetDefaultRecoveryDiskType` <a name="ResetDefaultRecoveryDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultRecoveryDiskType"></a>

```go
func ResetDefaultRecoveryDiskType()
```

##### `ResetDefaultTargetDiskEncryptionSetId` <a name="ResetDefaultTargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultTargetDiskEncryptionSetId"></a>

```go
func ResetDefaultTargetDiskEncryptionSetId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetId"></a>

```go
func ResetId()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetManagedDisk` <a name="ResetManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetManagedDisk"></a>

```go
func ResetManagedDisk()
```

##### `ResetMultiVmGroupName` <a name="ResetMultiVmGroupName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetMultiVmGroupName"></a>

```go
func ResetMultiVmGroupName()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetTargetAvailabilitySetId` <a name="ResetTargetAvailabilitySetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetAvailabilitySetId"></a>

```go
func ResetTargetAvailabilitySetId()
```

##### `ResetTargetBootDiagnosticsStorageAccountId` <a name="ResetTargetBootDiagnosticsStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetBootDiagnosticsStorageAccountId"></a>

```go
func ResetTargetBootDiagnosticsStorageAccountId()
```

##### `ResetTargetNetworkId` <a name="ResetTargetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetNetworkId"></a>

```go
func ResetTargetNetworkId()
```

##### `ResetTargetProximityPlacementGroupId` <a name="ResetTargetProximityPlacementGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetProximityPlacementGroupId"></a>

```go
func ResetTargetProximityPlacementGroupId()
```

##### `ResetTargetVmSize` <a name="ResetTargetVmSize" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetVmSize"></a>

```go
func ResetTargetVmSize()
```

##### `ResetTargetZone` <a name="ResetTargetZone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetZone"></a>

```go
func ResetTargetZone()
```

##### `ResetTestNetworkId` <a name="ResetTestNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTestNetworkId"></a>

```go
func ResetTestNetworkId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryVmwareReplicatedVm resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.SiteRecoveryVmwareReplicatedVm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.SiteRecoveryVmwareReplicatedVm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.SiteRecoveryVmwareReplicatedVm_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.SiteRecoveryVmwareReplicatedVm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SiteRecoveryVmwareReplicatedVm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SiteRecoveryVmwareReplicatedVm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SiteRecoveryVmwareReplicatedVm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryVmwareReplicatedVm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDisk">ManagedDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList">SiteRecoveryVmwareReplicatedVmManagedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList">SiteRecoveryVmwareReplicatedVmNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference">SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceNameInput">ApplianceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountIdInput">DefaultLogStorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskTypeInput">DefaultRecoveryDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetIdInput">DefaultTargetDiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDiskInput">ManagedDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupNameInput">MultiVmGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialNameInput">PhysicalServerCredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyIdInput">RecoveryReplicationPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultIdInput">RecoveryVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmNameInput">SourceVmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetIdInput">TargetAvailabilitySetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountIdInput">TargetBootDiagnosticsStorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkIdInput">TargetNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupIdInput">TargetProximityPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupIdInput">TargetResourceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmNameInput">TargetVmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSizeInput">TargetVmSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZoneInput">TargetZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkIdInput">TestNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceName">ApplianceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountId">DefaultLogStorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskType">DefaultRecoveryDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetId">DefaultTargetDiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupName">MultiVmGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialName">PhysicalServerCredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyId">RecoveryReplicationPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmName">SourceVmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetId">TargetAvailabilitySetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountId">TargetBootDiagnosticsStorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkId">TargetNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupId">TargetProximityPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupId">TargetResourceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmName">TargetVmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSize">TargetVmSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZone">TargetZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkId">TestNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDisk`<sup>Required</sup> <a name="ManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDisk"></a>

```go
func ManagedDisk() SiteRecoveryVmwareReplicatedVmManagedDiskList
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList">SiteRecoveryVmwareReplicatedVmManagedDiskList</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterface"></a>

```go
func NetworkInterface() SiteRecoveryVmwareReplicatedVmNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList">SiteRecoveryVmwareReplicatedVmNetworkInterfaceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeouts"></a>

```go
func Timeouts() SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference">SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference</a>

---

##### `ApplianceNameInput`<sup>Optional</sup> <a name="ApplianceNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceNameInput"></a>

```go
func ApplianceNameInput() *string
```

- *Type:* *string

---

##### `DefaultLogStorageAccountIdInput`<sup>Optional</sup> <a name="DefaultLogStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountIdInput"></a>

```go
func DefaultLogStorageAccountIdInput() *string
```

- *Type:* *string

---

##### `DefaultRecoveryDiskTypeInput`<sup>Optional</sup> <a name="DefaultRecoveryDiskTypeInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskTypeInput"></a>

```go
func DefaultRecoveryDiskTypeInput() *string
```

- *Type:* *string

---

##### `DefaultTargetDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DefaultTargetDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetIdInput"></a>

```go
func DefaultTargetDiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `ManagedDiskInput`<sup>Optional</sup> <a name="ManagedDiskInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDiskInput"></a>

```go
func ManagedDiskInput() interface{}
```

- *Type:* interface{}

---

##### `MultiVmGroupNameInput`<sup>Optional</sup> <a name="MultiVmGroupNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupNameInput"></a>

```go
func MultiVmGroupNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `PhysicalServerCredentialNameInput`<sup>Optional</sup> <a name="PhysicalServerCredentialNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialNameInput"></a>

```go
func PhysicalServerCredentialNameInput() *string
```

- *Type:* *string

---

##### `RecoveryReplicationPolicyIdInput`<sup>Optional</sup> <a name="RecoveryReplicationPolicyIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyIdInput"></a>

```go
func RecoveryReplicationPolicyIdInput() *string
```

- *Type:* *string

---

##### `RecoveryVaultIdInput`<sup>Optional</sup> <a name="RecoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultIdInput"></a>

```go
func RecoveryVaultIdInput() *string
```

- *Type:* *string

---

##### `SourceVmNameInput`<sup>Optional</sup> <a name="SourceVmNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmNameInput"></a>

```go
func SourceVmNameInput() *string
```

- *Type:* *string

---

##### `TargetAvailabilitySetIdInput`<sup>Optional</sup> <a name="TargetAvailabilitySetIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetIdInput"></a>

```go
func TargetAvailabilitySetIdInput() *string
```

- *Type:* *string

---

##### `TargetBootDiagnosticsStorageAccountIdInput`<sup>Optional</sup> <a name="TargetBootDiagnosticsStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountIdInput"></a>

```go
func TargetBootDiagnosticsStorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TargetNetworkIdInput`<sup>Optional</sup> <a name="TargetNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkIdInput"></a>

```go
func TargetNetworkIdInput() *string
```

- *Type:* *string

---

##### `TargetProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="TargetProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupIdInput"></a>

```go
func TargetProximityPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `TargetResourceGroupIdInput`<sup>Optional</sup> <a name="TargetResourceGroupIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupIdInput"></a>

```go
func TargetResourceGroupIdInput() *string
```

- *Type:* *string

---

##### `TargetVmNameInput`<sup>Optional</sup> <a name="TargetVmNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmNameInput"></a>

```go
func TargetVmNameInput() *string
```

- *Type:* *string

---

##### `TargetVmSizeInput`<sup>Optional</sup> <a name="TargetVmSizeInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSizeInput"></a>

```go
func TargetVmSizeInput() *string
```

- *Type:* *string

---

##### `TargetZoneInput`<sup>Optional</sup> <a name="TargetZoneInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZoneInput"></a>

```go
func TargetZoneInput() *string
```

- *Type:* *string

---

##### `TestNetworkIdInput`<sup>Optional</sup> <a name="TestNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkIdInput"></a>

```go
func TestNetworkIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplianceName`<sup>Required</sup> <a name="ApplianceName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceName"></a>

```go
func ApplianceName() *string
```

- *Type:* *string

---

##### `DefaultLogStorageAccountId`<sup>Required</sup> <a name="DefaultLogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountId"></a>

```go
func DefaultLogStorageAccountId() *string
```

- *Type:* *string

---

##### `DefaultRecoveryDiskType`<sup>Required</sup> <a name="DefaultRecoveryDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskType"></a>

```go
func DefaultRecoveryDiskType() *string
```

- *Type:* *string

---

##### `DefaultTargetDiskEncryptionSetId`<sup>Required</sup> <a name="DefaultTargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetId"></a>

```go
func DefaultTargetDiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `MultiVmGroupName`<sup>Required</sup> <a name="MultiVmGroupName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupName"></a>

```go
func MultiVmGroupName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PhysicalServerCredentialName`<sup>Required</sup> <a name="PhysicalServerCredentialName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialName"></a>

```go
func PhysicalServerCredentialName() *string
```

- *Type:* *string

---

##### `RecoveryReplicationPolicyId`<sup>Required</sup> <a name="RecoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyId"></a>

```go
func RecoveryReplicationPolicyId() *string
```

- *Type:* *string

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultId"></a>

```go
func RecoveryVaultId() *string
```

- *Type:* *string

---

##### `SourceVmName`<sup>Required</sup> <a name="SourceVmName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmName"></a>

```go
func SourceVmName() *string
```

- *Type:* *string

---

##### `TargetAvailabilitySetId`<sup>Required</sup> <a name="TargetAvailabilitySetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetId"></a>

```go
func TargetAvailabilitySetId() *string
```

- *Type:* *string

---

##### `TargetBootDiagnosticsStorageAccountId`<sup>Required</sup> <a name="TargetBootDiagnosticsStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountId"></a>

```go
func TargetBootDiagnosticsStorageAccountId() *string
```

- *Type:* *string

---

##### `TargetNetworkId`<sup>Required</sup> <a name="TargetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkId"></a>

```go
func TargetNetworkId() *string
```

- *Type:* *string

---

##### `TargetProximityPlacementGroupId`<sup>Required</sup> <a name="TargetProximityPlacementGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupId"></a>

```go
func TargetProximityPlacementGroupId() *string
```

- *Type:* *string

---

##### `TargetResourceGroupId`<sup>Required</sup> <a name="TargetResourceGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupId"></a>

```go
func TargetResourceGroupId() *string
```

- *Type:* *string

---

##### `TargetVmName`<sup>Required</sup> <a name="TargetVmName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmName"></a>

```go
func TargetVmName() *string
```

- *Type:* *string

---

##### `TargetVmSize`<sup>Required</sup> <a name="TargetVmSize" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSize"></a>

```go
func TargetVmSize() *string
```

- *Type:* *string

---

##### `TargetZone`<sup>Required</sup> <a name="TargetZone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZone"></a>

```go
func TargetZone() *string
```

- *Type:* *string

---

##### `TestNetworkId`<sup>Required</sup> <a name="TestNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkId"></a>

```go
func TestNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryVmwareReplicatedVmConfig <a name="SiteRecoveryVmwareReplicatedVmConfig" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

&siterecoveryvmwarereplicatedvm.SiteRecoveryVmwareReplicatedVmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplianceName: *string,
	Name: *string,
	PhysicalServerCredentialName: *string,
	RecoveryReplicationPolicyId: *string,
	RecoveryVaultId: *string,
	SourceVmName: *string,
	TargetResourceGroupId: *string,
	TargetVmName: *string,
	DefaultLogStorageAccountId: *string,
	DefaultRecoveryDiskType: *string,
	DefaultTargetDiskEncryptionSetId: *string,
	Id: *string,
	LicenseType: *string,
	ManagedDisk: interface{},
	MultiVmGroupName: *string,
	NetworkInterface: interface{},
	TargetAvailabilitySetId: *string,
	TargetBootDiagnosticsStorageAccountId: *string,
	TargetNetworkId: *string,
	TargetProximityPlacementGroupId: *string,
	TargetVmSize: *string,
	TargetZone: *string,
	TestNetworkId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.applianceName">ApplianceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#appliance_name SiteRecoveryVmwareReplicatedVm#appliance_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#name SiteRecoveryVmwareReplicatedVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.physicalServerCredentialName">PhysicalServerCredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#physical_server_credential_name SiteRecoveryVmwareReplicatedVm#physical_server_credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryReplicationPolicyId">RecoveryReplicationPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_replication_policy_id SiteRecoveryVmwareReplicatedVm#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_vault_id SiteRecoveryVmwareReplicatedVm#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.sourceVmName">SourceVmName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#source_vm_name SiteRecoveryVmwareReplicatedVm#source_vm_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetResourceGroupId">TargetResourceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_resource_group_id SiteRecoveryVmwareReplicatedVm#target_resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmName">TargetVmName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_name SiteRecoveryVmwareReplicatedVm#target_vm_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultLogStorageAccountId">DefaultLogStorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#default_log_storage_account_id SiteRecoveryVmwareReplicatedVm#default_log_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultRecoveryDiskType">DefaultRecoveryDiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#default_recovery_disk_type SiteRecoveryVmwareReplicatedVm#default_recovery_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultTargetDiskEncryptionSetId">DefaultTargetDiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#default_target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#default_target_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#id SiteRecoveryVmwareReplicatedVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#license_type SiteRecoveryVmwareReplicatedVm#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.managedDisk">ManagedDisk</a></code> | <code>interface{}</code> | managed_disk block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.multiVmGroupName">MultiVmGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#multi_vm_group_name SiteRecoveryVmwareReplicatedVm#multi_vm_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetAvailabilitySetId">TargetAvailabilitySetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_availability_set_id SiteRecoveryVmwareReplicatedVm#target_availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetBootDiagnosticsStorageAccountId">TargetBootDiagnosticsStorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_boot_diagnostics_storage_account_id SiteRecoveryVmwareReplicatedVm#target_boot_diagnostics_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetNetworkId">TargetNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_network_id SiteRecoveryVmwareReplicatedVm#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetProximityPlacementGroupId">TargetProximityPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_proximity_placement_group_id SiteRecoveryVmwareReplicatedVm#target_proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmSize">TargetVmSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_size SiteRecoveryVmwareReplicatedVm#target_vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetZone">TargetZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_zone SiteRecoveryVmwareReplicatedVm#target_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.testNetworkId">TestNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#test_network_id SiteRecoveryVmwareReplicatedVm#test_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplianceName`<sup>Required</sup> <a name="ApplianceName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.applianceName"></a>

```go
ApplianceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#appliance_name SiteRecoveryVmwareReplicatedVm#appliance_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#name SiteRecoveryVmwareReplicatedVm#name}.

---

##### `PhysicalServerCredentialName`<sup>Required</sup> <a name="PhysicalServerCredentialName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.physicalServerCredentialName"></a>

```go
PhysicalServerCredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#physical_server_credential_name SiteRecoveryVmwareReplicatedVm#physical_server_credential_name}.

---

##### `RecoveryReplicationPolicyId`<sup>Required</sup> <a name="RecoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryReplicationPolicyId"></a>

```go
RecoveryReplicationPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_replication_policy_id SiteRecoveryVmwareReplicatedVm#recovery_replication_policy_id}.

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryVaultId"></a>

```go
RecoveryVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_vault_id SiteRecoveryVmwareReplicatedVm#recovery_vault_id}.

---

##### `SourceVmName`<sup>Required</sup> <a name="SourceVmName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.sourceVmName"></a>

```go
SourceVmName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#source_vm_name SiteRecoveryVmwareReplicatedVm#source_vm_name}.

---

##### `TargetResourceGroupId`<sup>Required</sup> <a name="TargetResourceGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetResourceGroupId"></a>

```go
TargetResourceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_resource_group_id SiteRecoveryVmwareReplicatedVm#target_resource_group_id}.

---

##### `TargetVmName`<sup>Required</sup> <a name="TargetVmName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmName"></a>

```go
TargetVmName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_name SiteRecoveryVmwareReplicatedVm#target_vm_name}.

---

##### `DefaultLogStorageAccountId`<sup>Optional</sup> <a name="DefaultLogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultLogStorageAccountId"></a>

```go
DefaultLogStorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#default_log_storage_account_id SiteRecoveryVmwareReplicatedVm#default_log_storage_account_id}.

---

##### `DefaultRecoveryDiskType`<sup>Optional</sup> <a name="DefaultRecoveryDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultRecoveryDiskType"></a>

```go
DefaultRecoveryDiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#default_recovery_disk_type SiteRecoveryVmwareReplicatedVm#default_recovery_disk_type}.

---

##### `DefaultTargetDiskEncryptionSetId`<sup>Optional</sup> <a name="DefaultTargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultTargetDiskEncryptionSetId"></a>

```go
DefaultTargetDiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#default_target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#default_target_disk_encryption_set_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#id SiteRecoveryVmwareReplicatedVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#license_type SiteRecoveryVmwareReplicatedVm#license_type}.

---

##### `ManagedDisk`<sup>Optional</sup> <a name="ManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.managedDisk"></a>

```go
ManagedDisk interface{}
```

- *Type:* interface{}

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#managed_disk SiteRecoveryVmwareReplicatedVm#managed_disk}

---

##### `MultiVmGroupName`<sup>Optional</sup> <a name="MultiVmGroupName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.multiVmGroupName"></a>

```go
MultiVmGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#multi_vm_group_name SiteRecoveryVmwareReplicatedVm#multi_vm_group_name}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#network_interface SiteRecoveryVmwareReplicatedVm#network_interface}

---

##### `TargetAvailabilitySetId`<sup>Optional</sup> <a name="TargetAvailabilitySetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetAvailabilitySetId"></a>

```go
TargetAvailabilitySetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_availability_set_id SiteRecoveryVmwareReplicatedVm#target_availability_set_id}.

---

##### `TargetBootDiagnosticsStorageAccountId`<sup>Optional</sup> <a name="TargetBootDiagnosticsStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetBootDiagnosticsStorageAccountId"></a>

```go
TargetBootDiagnosticsStorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_boot_diagnostics_storage_account_id SiteRecoveryVmwareReplicatedVm#target_boot_diagnostics_storage_account_id}.

---

##### `TargetNetworkId`<sup>Optional</sup> <a name="TargetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetNetworkId"></a>

```go
TargetNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_network_id SiteRecoveryVmwareReplicatedVm#target_network_id}.

---

##### `TargetProximityPlacementGroupId`<sup>Optional</sup> <a name="TargetProximityPlacementGroupId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetProximityPlacementGroupId"></a>

```go
TargetProximityPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_proximity_placement_group_id SiteRecoveryVmwareReplicatedVm#target_proximity_placement_group_id}.

---

##### `TargetVmSize`<sup>Optional</sup> <a name="TargetVmSize" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmSize"></a>

```go
TargetVmSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_size SiteRecoveryVmwareReplicatedVm#target_vm_size}.

---

##### `TargetZone`<sup>Optional</sup> <a name="TargetZone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetZone"></a>

```go
TargetZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_zone SiteRecoveryVmwareReplicatedVm#target_zone}.

---

##### `TestNetworkId`<sup>Optional</sup> <a name="TestNetworkId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.testNetworkId"></a>

```go
TestNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#test_network_id SiteRecoveryVmwareReplicatedVm#test_network_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.timeouts"></a>

```go
Timeouts SiteRecoveryVmwareReplicatedVmTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#timeouts SiteRecoveryVmwareReplicatedVm#timeouts}

---

### SiteRecoveryVmwareReplicatedVmManagedDisk <a name="SiteRecoveryVmwareReplicatedVmManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

&siterecoveryvmwarereplicatedvm.SiteRecoveryVmwareReplicatedVmManagedDisk {
	DiskId: *string,
	TargetDiskType: *string,
	LogStorageAccountId: *string,
	TargetDiskEncryptionSetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.diskId">DiskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#disk_id SiteRecoveryVmwareReplicatedVm#disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskType">TargetDiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_type SiteRecoveryVmwareReplicatedVm#target_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.logStorageAccountId">LogStorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#log_storage_account_id SiteRecoveryVmwareReplicatedVm#log_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskEncryptionSetId">TargetDiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#target_disk_encryption_set_id}. |

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.diskId"></a>

```go
DiskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#disk_id SiteRecoveryVmwareReplicatedVm#disk_id}.

---

##### `TargetDiskType`<sup>Required</sup> <a name="TargetDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskType"></a>

```go
TargetDiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_type SiteRecoveryVmwareReplicatedVm#target_disk_type}.

---

##### `LogStorageAccountId`<sup>Optional</sup> <a name="LogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.logStorageAccountId"></a>

```go
LogStorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#log_storage_account_id SiteRecoveryVmwareReplicatedVm#log_storage_account_id}.

---

##### `TargetDiskEncryptionSetId`<sup>Optional</sup> <a name="TargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskEncryptionSetId"></a>

```go
TargetDiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#target_disk_encryption_set_id}.

---

### SiteRecoveryVmwareReplicatedVmNetworkInterface <a name="SiteRecoveryVmwareReplicatedVmNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

&siterecoveryvmwarereplicatedvm.SiteRecoveryVmwareReplicatedVmNetworkInterface {
	IsPrimary: interface{},
	SourceMacAddress: *string,
	TargetStaticIp: *string,
	TargetSubnetName: *string,
	TestSubnetName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#is_primary SiteRecoveryVmwareReplicatedVm#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.sourceMacAddress">SourceMacAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#source_mac_address SiteRecoveryVmwareReplicatedVm#source_mac_address}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetStaticIp">TargetStaticIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_static_ip SiteRecoveryVmwareReplicatedVm#target_static_ip}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetSubnetName">TargetSubnetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_subnet_name SiteRecoveryVmwareReplicatedVm#target_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.testSubnetName">TestSubnetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#test_subnet_name SiteRecoveryVmwareReplicatedVm#test_subnet_name}. |

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.isPrimary"></a>

```go
IsPrimary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#is_primary SiteRecoveryVmwareReplicatedVm#is_primary}.

---

##### `SourceMacAddress`<sup>Required</sup> <a name="SourceMacAddress" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.sourceMacAddress"></a>

```go
SourceMacAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#source_mac_address SiteRecoveryVmwareReplicatedVm#source_mac_address}.

---

##### `TargetStaticIp`<sup>Optional</sup> <a name="TargetStaticIp" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetStaticIp"></a>

```go
TargetStaticIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_static_ip SiteRecoveryVmwareReplicatedVm#target_static_ip}.

---

##### `TargetSubnetName`<sup>Optional</sup> <a name="TargetSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetSubnetName"></a>

```go
TargetSubnetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#target_subnet_name SiteRecoveryVmwareReplicatedVm#target_subnet_name}.

---

##### `TestSubnetName`<sup>Optional</sup> <a name="TestSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.testSubnetName"></a>

```go
TestSubnetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#test_subnet_name SiteRecoveryVmwareReplicatedVm#test_subnet_name}.

---

### SiteRecoveryVmwareReplicatedVmTimeouts <a name="SiteRecoveryVmwareReplicatedVmTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

&siterecoveryvmwarereplicatedvm.SiteRecoveryVmwareReplicatedVmTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#create SiteRecoveryVmwareReplicatedVm#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#delete SiteRecoveryVmwareReplicatedVm#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#read SiteRecoveryVmwareReplicatedVm#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#update SiteRecoveryVmwareReplicatedVm#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#create SiteRecoveryVmwareReplicatedVm#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#delete SiteRecoveryVmwareReplicatedVm#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#read SiteRecoveryVmwareReplicatedVm#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/site_recovery_vmware_replicated_vm#update SiteRecoveryVmwareReplicatedVm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryVmwareReplicatedVmManagedDiskList <a name="SiteRecoveryVmwareReplicatedVmManagedDiskList" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.NewSiteRecoveryVmwareReplicatedVmManagedDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SiteRecoveryVmwareReplicatedVmManagedDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.get"></a>

```go
func Get(index *f64) SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference <a name="SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.NewSiteRecoveryVmwareReplicatedVmManagedDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetLogStorageAccountId">ResetLogStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryptionSetId">ResetTargetDiskEncryptionSetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogStorageAccountId` <a name="ResetLogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetLogStorageAccountId"></a>

```go
func ResetLogStorageAccountId()
```

##### `ResetTargetDiskEncryptionSetId` <a name="ResetTargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryptionSetId"></a>

```go
func ResetTargetDiskEncryptionSetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskIdInput">DiskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountIdInput">LogStorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetIdInput">TargetDiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskTypeInput">TargetDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskId">DiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountId">LogStorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetId">TargetDiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskType">TargetDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskIdInput`<sup>Optional</sup> <a name="DiskIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskIdInput"></a>

```go
func DiskIdInput() *string
```

- *Type:* *string

---

##### `LogStorageAccountIdInput`<sup>Optional</sup> <a name="LogStorageAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountIdInput"></a>

```go
func LogStorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TargetDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="TargetDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetIdInput"></a>

```go
func TargetDiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `TargetDiskTypeInput`<sup>Optional</sup> <a name="TargetDiskTypeInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskTypeInput"></a>

```go
func TargetDiskTypeInput() *string
```

- *Type:* *string

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskId"></a>

```go
func DiskId() *string
```

- *Type:* *string

---

##### `LogStorageAccountId`<sup>Required</sup> <a name="LogStorageAccountId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountId"></a>

```go
func LogStorageAccountId() *string
```

- *Type:* *string

---

##### `TargetDiskEncryptionSetId`<sup>Required</sup> <a name="TargetDiskEncryptionSetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetId"></a>

```go
func TargetDiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `TargetDiskType`<sup>Required</sup> <a name="TargetDiskType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskType"></a>

```go
func TargetDiskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SiteRecoveryVmwareReplicatedVmNetworkInterfaceList <a name="SiteRecoveryVmwareReplicatedVmNetworkInterfaceList" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.NewSiteRecoveryVmwareReplicatedVmNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SiteRecoveryVmwareReplicatedVmNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.get"></a>

```go
func Get(index *f64) SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference <a name="SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.NewSiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetStaticIp">ResetTargetStaticIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetSubnetName">ResetTargetSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTestSubnetName">ResetTestSubnetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetStaticIp` <a name="ResetTargetStaticIp" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetStaticIp"></a>

```go
func ResetTargetStaticIp()
```

##### `ResetTargetSubnetName` <a name="ResetTargetSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetSubnetName"></a>

```go
func ResetTargetSubnetName()
```

##### `ResetTestSubnetName` <a name="ResetTestSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTestSubnetName"></a>

```go
func ResetTestSubnetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddressInput">SourceMacAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIpInput">TargetStaticIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetNameInput">TargetSubnetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetNameInput">TestSubnetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddress">SourceMacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIp">TargetStaticIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetName">TargetSubnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetName">TestSubnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```go
func IsPrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `SourceMacAddressInput`<sup>Optional</sup> <a name="SourceMacAddressInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddressInput"></a>

```go
func SourceMacAddressInput() *string
```

- *Type:* *string

---

##### `TargetStaticIpInput`<sup>Optional</sup> <a name="TargetStaticIpInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIpInput"></a>

```go
func TargetStaticIpInput() *string
```

- *Type:* *string

---

##### `TargetSubnetNameInput`<sup>Optional</sup> <a name="TargetSubnetNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetNameInput"></a>

```go
func TargetSubnetNameInput() *string
```

- *Type:* *string

---

##### `TestSubnetNameInput`<sup>Optional</sup> <a name="TestSubnetNameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetNameInput"></a>

```go
func TestSubnetNameInput() *string
```

- *Type:* *string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimary"></a>

```go
func IsPrimary() interface{}
```

- *Type:* interface{}

---

##### `SourceMacAddress`<sup>Required</sup> <a name="SourceMacAddress" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddress"></a>

```go
func SourceMacAddress() *string
```

- *Type:* *string

---

##### `TargetStaticIp`<sup>Required</sup> <a name="TargetStaticIp" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIp"></a>

```go
func TargetStaticIp() *string
```

- *Type:* *string

---

##### `TargetSubnetName`<sup>Required</sup> <a name="TargetSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetName"></a>

```go
func TargetSubnetName() *string
```

- *Type:* *string

---

##### `TestSubnetName`<sup>Required</sup> <a name="TestSubnetName" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetName"></a>

```go
func TestSubnetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference <a name="SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/siterecoveryvmwarereplicatedvm"

siterecoveryvmwarereplicatedvm.NewSiteRecoveryVmwareReplicatedVmTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



