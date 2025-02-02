# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktf/provider-azurerm.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktf/provider-azurerm.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume azurerm_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NewNetappVolume(scope Construct, id *string, config NetappVolumeConfig) NetappVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy">PutDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication">PutDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy">PutDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule">PutExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled">ResetAzureVmwareDataStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId">ResetCreateFromSnapshotResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionBackupPolicy">ResetDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication">ResetDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy">ResetDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetEncryptionKeySource">ResetEncryptionKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule">ResetExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetKerberosEnabled">ResetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetKeyVaultPrivateEndpointId">ResetKeyVaultPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures">ResetNetworkFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSmb3ProtocolEncryptionEnabled">ResetSmb3ProtocolEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSmbAccessBasedEnumerationEnabled">ResetSmbAccessBasedEnumerationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSmbContinuousAvailabilityEnabled">ResetSmbContinuousAvailabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSmbNonBrowsableEnabled">ResetSmbNonBrowsableEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible">ResetSnapshotDirectoryVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps">ResetThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataProtectionBackupPolicy` <a name="PutDataProtectionBackupPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy"></a>

```go
func PutDataProtectionBackupPolicy(value NetappVolumeDataProtectionBackupPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---

##### `PutDataProtectionReplication` <a name="PutDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication"></a>

```go
func PutDataProtectionReplication(value NetappVolumeDataProtectionReplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `PutDataProtectionSnapshotPolicy` <a name="PutDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy"></a>

```go
func PutDataProtectionSnapshotPolicy(value NetappVolumeDataProtectionSnapshotPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `PutExportPolicyRule` <a name="PutExportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule"></a>

```go
func PutExportPolicyRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putTimeouts"></a>

```go
func PutTimeouts(value NetappVolumeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `ResetAzureVmwareDataStoreEnabled` <a name="ResetAzureVmwareDataStoreEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled"></a>

```go
func ResetAzureVmwareDataStoreEnabled()
```

##### `ResetCreateFromSnapshotResourceId` <a name="ResetCreateFromSnapshotResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId"></a>

```go
func ResetCreateFromSnapshotResourceId()
```

##### `ResetDataProtectionBackupPolicy` <a name="ResetDataProtectionBackupPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionBackupPolicy"></a>

```go
func ResetDataProtectionBackupPolicy()
```

##### `ResetDataProtectionReplication` <a name="ResetDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication"></a>

```go
func ResetDataProtectionReplication()
```

##### `ResetDataProtectionSnapshotPolicy` <a name="ResetDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy"></a>

```go
func ResetDataProtectionSnapshotPolicy()
```

##### `ResetEncryptionKeySource` <a name="ResetEncryptionKeySource" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetEncryptionKeySource"></a>

```go
func ResetEncryptionKeySource()
```

##### `ResetExportPolicyRule` <a name="ResetExportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule"></a>

```go
func ResetExportPolicyRule()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetKerberosEnabled` <a name="ResetKerberosEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetKerberosEnabled"></a>

```go
func ResetKerberosEnabled()
```

##### `ResetKeyVaultPrivateEndpointId` <a name="ResetKeyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetKeyVaultPrivateEndpointId"></a>

```go
func ResetKeyVaultPrivateEndpointId()
```

##### `ResetNetworkFeatures` <a name="ResetNetworkFeatures" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures"></a>

```go
func ResetNetworkFeatures()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle"></a>

```go
func ResetSecurityStyle()
```

##### `ResetSmb3ProtocolEncryptionEnabled` <a name="ResetSmb3ProtocolEncryptionEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSmb3ProtocolEncryptionEnabled"></a>

```go
func ResetSmb3ProtocolEncryptionEnabled()
```

##### `ResetSmbAccessBasedEnumerationEnabled` <a name="ResetSmbAccessBasedEnumerationEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSmbAccessBasedEnumerationEnabled"></a>

```go
func ResetSmbAccessBasedEnumerationEnabled()
```

##### `ResetSmbContinuousAvailabilityEnabled` <a name="ResetSmbContinuousAvailabilityEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSmbContinuousAvailabilityEnabled"></a>

```go
func ResetSmbContinuousAvailabilityEnabled()
```

##### `ResetSmbNonBrowsableEnabled` <a name="ResetSmbNonBrowsableEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSmbNonBrowsableEnabled"></a>

```go
func ResetSmbNonBrowsableEnabled()
```

##### `ResetSnapshotDirectoryVisible` <a name="ResetSnapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible"></a>

```go
func ResetSnapshotDirectoryVisible()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThroughputInMibps` <a name="ResetThroughputInMibps" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps"></a>

```go
func ResetThroughputInMibps()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NetappVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NetappVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NetappVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NetappVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetappVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicy">DataProtectionBackupPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference">NetappVolumeDataProtectionBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy">DataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule">ExportPolicyRule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.mountIpAddresses">MountIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput">AzureVmwareDataStoreEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput">CreateFromSnapshotResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicyInput">DataProtectionBackupPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput">DataProtectionReplicationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput">DataProtectionSnapshotPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySourceInput">EncryptionKeySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput">ExportPolicyRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabledInput">KerberosEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointIdInput">KeyVaultPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput">NetworkFeaturesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput">PoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput">SecurityStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput">ServiceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabledInput">Smb3ProtocolEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabledInput">SmbAccessBasedEnumerationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabledInput">SmbContinuousAvailabilityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabledInput">SmbNonBrowsableEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput">SnapshotDirectoryVisibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput">StorageQuotaInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput">ThroughputInMibpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput">VolumePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled">AzureVmwareDataStoreEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId">CreateFromSnapshotResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabled">KerberosEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures">NetworkFeatures</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.poolName">PoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabled">Smb3ProtocolEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabled">SmbAccessBasedEnumerationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabled">SmbContinuousAvailabilityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabled">SmbNonBrowsableEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible">SnapshotDirectoryVisible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps">ThroughputInMibps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.volumePath">VolumePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataProtectionBackupPolicy`<sup>Required</sup> <a name="DataProtectionBackupPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicy"></a>

```go
func DataProtectionBackupPolicy() NetappVolumeDataProtectionBackupPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference">NetappVolumeDataProtectionBackupPolicyOutputReference</a>

---

##### `DataProtectionReplication`<sup>Required</sup> <a name="DataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication"></a>

```go
func DataProtectionReplication() NetappVolumeDataProtectionReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a>

---

##### `DataProtectionSnapshotPolicy`<sup>Required</sup> <a name="DataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy"></a>

```go
func DataProtectionSnapshotPolicy() NetappVolumeDataProtectionSnapshotPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a>

---

##### `ExportPolicyRule`<sup>Required</sup> <a name="ExportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule"></a>

```go
func ExportPolicyRule() NetappVolumeExportPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a>

---

##### `MountIpAddresses`<sup>Required</sup> <a name="MountIpAddresses" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.mountIpAddresses"></a>

```go
func MountIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.timeouts"></a>

```go
func Timeouts() NetappVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `AzureVmwareDataStoreEnabledInput`<sup>Optional</sup> <a name="AzureVmwareDataStoreEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput"></a>

```go
func AzureVmwareDataStoreEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CreateFromSnapshotResourceIdInput`<sup>Optional</sup> <a name="CreateFromSnapshotResourceIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput"></a>

```go
func CreateFromSnapshotResourceIdInput() *string
```

- *Type:* *string

---

##### `DataProtectionBackupPolicyInput`<sup>Optional</sup> <a name="DataProtectionBackupPolicyInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicyInput"></a>

```go
func DataProtectionBackupPolicyInput() NetappVolumeDataProtectionBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---

##### `DataProtectionReplicationInput`<sup>Optional</sup> <a name="DataProtectionReplicationInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput"></a>

```go
func DataProtectionReplicationInput() NetappVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `DataProtectionSnapshotPolicyInput`<sup>Optional</sup> <a name="DataProtectionSnapshotPolicyInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput"></a>

```go
func DataProtectionSnapshotPolicyInput() NetappVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `EncryptionKeySourceInput`<sup>Optional</sup> <a name="EncryptionKeySourceInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySourceInput"></a>

```go
func EncryptionKeySourceInput() *string
```

- *Type:* *string

---

##### `ExportPolicyRuleInput`<sup>Optional</sup> <a name="ExportPolicyRuleInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput"></a>

```go
func ExportPolicyRuleInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KerberosEnabledInput`<sup>Optional</sup> <a name="KerberosEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabledInput"></a>

```go
func KerberosEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultPrivateEndpointIdInput`<sup>Optional</sup> <a name="KeyVaultPrivateEndpointIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointIdInput"></a>

```go
func KeyVaultPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkFeaturesInput`<sup>Optional</sup> <a name="NetworkFeaturesInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput"></a>

```go
func NetworkFeaturesInput() *string
```

- *Type:* *string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput"></a>

```go
func PoolNameInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput"></a>

```go
func SecurityStyleInput() *string
```

- *Type:* *string

---

##### `ServiceLevelInput`<sup>Optional</sup> <a name="ServiceLevelInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput"></a>

```go
func ServiceLevelInput() *string
```

- *Type:* *string

---

##### `Smb3ProtocolEncryptionEnabledInput`<sup>Optional</sup> <a name="Smb3ProtocolEncryptionEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabledInput"></a>

```go
func Smb3ProtocolEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SmbAccessBasedEnumerationEnabledInput`<sup>Optional</sup> <a name="SmbAccessBasedEnumerationEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabledInput"></a>

```go
func SmbAccessBasedEnumerationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SmbContinuousAvailabilityEnabledInput`<sup>Optional</sup> <a name="SmbContinuousAvailabilityEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabledInput"></a>

```go
func SmbContinuousAvailabilityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SmbNonBrowsableEnabledInput`<sup>Optional</sup> <a name="SmbNonBrowsableEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabledInput"></a>

```go
func SmbNonBrowsableEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotDirectoryVisibleInput`<sup>Optional</sup> <a name="SnapshotDirectoryVisibleInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput"></a>

```go
func SnapshotDirectoryVisibleInput() interface{}
```

- *Type:* interface{}

---

##### `StorageQuotaInGbInput`<sup>Optional</sup> <a name="StorageQuotaInGbInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput"></a>

```go
func StorageQuotaInGbInput() *f64
```

- *Type:* *f64

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputInMibpsInput`<sup>Optional</sup> <a name="ThroughputInMibpsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput"></a>

```go
func ThroughputInMibpsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumePathInput`<sup>Optional</sup> <a name="VolumePathInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput"></a>

```go
func VolumePathInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `AzureVmwareDataStoreEnabled`<sup>Required</sup> <a name="AzureVmwareDataStoreEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled"></a>

```go
func AzureVmwareDataStoreEnabled() interface{}
```

- *Type:* interface{}

---

##### `CreateFromSnapshotResourceId`<sup>Required</sup> <a name="CreateFromSnapshotResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId"></a>

```go
func CreateFromSnapshotResourceId() *string
```

- *Type:* *string

---

##### `EncryptionKeySource`<sup>Required</sup> <a name="EncryptionKeySource" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySource"></a>

```go
func EncryptionKeySource() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KerberosEnabled`<sup>Required</sup> <a name="KerberosEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabled"></a>

```go
func KerberosEnabled() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultPrivateEndpointId`<sup>Required</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointId"></a>

```go
func KeyVaultPrivateEndpointId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkFeatures`<sup>Required</sup> <a name="NetworkFeatures" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures"></a>

```go
func NetworkFeatures() *string
```

- *Type:* *string

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.poolName"></a>

```go
func PoolName() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.securityStyle"></a>

```go
func SecurityStyle() *string
```

- *Type:* *string

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel"></a>

```go
func ServiceLevel() *string
```

- *Type:* *string

---

##### `Smb3ProtocolEncryptionEnabled`<sup>Required</sup> <a name="Smb3ProtocolEncryptionEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabled"></a>

```go
func Smb3ProtocolEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `SmbAccessBasedEnumerationEnabled`<sup>Required</sup> <a name="SmbAccessBasedEnumerationEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabled"></a>

```go
func SmbAccessBasedEnumerationEnabled() interface{}
```

- *Type:* interface{}

---

##### `SmbContinuousAvailabilityEnabled`<sup>Required</sup> <a name="SmbContinuousAvailabilityEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabled"></a>

```go
func SmbContinuousAvailabilityEnabled() interface{}
```

- *Type:* interface{}

---

##### `SmbNonBrowsableEnabled`<sup>Required</sup> <a name="SmbNonBrowsableEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabled"></a>

```go
func SmbNonBrowsableEnabled() interface{}
```

- *Type:* interface{}

---

##### `SnapshotDirectoryVisible`<sup>Required</sup> <a name="SnapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible"></a>

```go
func SnapshotDirectoryVisible() interface{}
```

- *Type:* interface{}

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb"></a>

```go
func StorageQuotaInGb() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputInMibps`<sup>Required</sup> <a name="ThroughputInMibps" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps"></a>

```go
func ThroughputInMibps() *f64
```

- *Type:* *f64

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.volumePath"></a>

```go
func VolumePath() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

&netappvolume.NetappVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	Location: *string,
	Name: *string,
	PoolName: *string,
	ResourceGroupName: *string,
	ServiceLevel: *string,
	StorageQuotaInGb: *f64,
	SubnetId: *string,
	VolumePath: *string,
	AzureVmwareDataStoreEnabled: interface{},
	CreateFromSnapshotResourceId: *string,
	DataProtectionBackupPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.netappVolume.NetappVolumeDataProtectionBackupPolicy,
	DataProtectionReplication: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.netappVolume.NetappVolumeDataProtectionReplication,
	DataProtectionSnapshotPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.netappVolume.NetappVolumeDataProtectionSnapshotPolicy,
	EncryptionKeySource: *string,
	ExportPolicyRule: interface{},
	Id: *string,
	KerberosEnabled: interface{},
	KeyVaultPrivateEndpointId: *string,
	NetworkFeatures: *string,
	Protocols: *[]*string,
	SecurityStyle: *string,
	Smb3ProtocolEncryptionEnabled: interface{},
	SmbAccessBasedEnumerationEnabled: interface{},
	SmbContinuousAvailabilityEnabled: interface{},
	SmbNonBrowsableEnabled: interface{},
	SnapshotDirectoryVisible: interface{},
	Tags: *map[string]*string,
	ThroughputInMibps: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.netappVolume.NetappVolumeTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#location NetappVolume#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#name NetappVolume#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName">PoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath">VolumePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled">AzureVmwareDataStoreEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId">CreateFromSnapshotResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionBackupPolicy">DataProtectionBackupPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | data_protection_backup_policy block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy">DataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule">ExportPolicyRule</a></code> | <code>interface{}</code> | export_policy_rule block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.kerberosEnabled">KerberosEnabled</a></code> | <code>interface{}</code> | Enable to allow Kerberos secured volumes. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures">NetworkFeatures</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.smb3ProtocolEncryptionEnabled">Smb3ProtocolEncryptionEnabled</a></code> | <code>interface{}</code> | SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbAccessBasedEnumerationEnabled">SmbAccessBasedEnumerationEnabled</a></code> | <code>interface{}</code> | Enable access based enumeration setting for SMB/Dual Protocol volume. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbContinuousAvailabilityEnabled">SmbContinuousAvailabilityEnabled</a></code> | <code>interface{}</code> | Continuous availability option should be used only for SQL and FSLogix workloads. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbNonBrowsableEnabled">SmbNonBrowsableEnabled</a></code> | <code>interface{}</code> | Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible">SnapshotDirectoryVisible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#tags NetappVolume#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps">ThroughputInMibps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#zone NetappVolume#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#location NetappVolume#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#name NetappVolume#name}.

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName"></a>

```go
PoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}.

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel"></a>

```go
ServiceLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}.

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb"></a>

```go
StorageQuotaInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}.

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath"></a>

```go
VolumePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}.

---

##### `AzureVmwareDataStoreEnabled`<sup>Optional</sup> <a name="AzureVmwareDataStoreEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled"></a>

```go
AzureVmwareDataStoreEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}.

---

##### `CreateFromSnapshotResourceId`<sup>Optional</sup> <a name="CreateFromSnapshotResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId"></a>

```go
CreateFromSnapshotResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}.

---

##### `DataProtectionBackupPolicy`<sup>Optional</sup> <a name="DataProtectionBackupPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionBackupPolicy"></a>

```go
DataProtectionBackupPolicy NetappVolumeDataProtectionBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

data_protection_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#data_protection_backup_policy NetappVolume#data_protection_backup_policy}

---

##### `DataProtectionReplication`<sup>Optional</sup> <a name="DataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication"></a>

```go
DataProtectionReplication NetappVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#data_protection_replication NetappVolume#data_protection_replication}

---

##### `DataProtectionSnapshotPolicy`<sup>Optional</sup> <a name="DataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy"></a>

```go
DataProtectionSnapshotPolicy NetappVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#data_protection_snapshot_policy NetappVolume#data_protection_snapshot_policy}

---

##### `EncryptionKeySource`<sup>Optional</sup> <a name="EncryptionKeySource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.encryptionKeySource"></a>

```go
EncryptionKeySource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}.

---

##### `ExportPolicyRule`<sup>Optional</sup> <a name="ExportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule"></a>

```go
ExportPolicyRule interface{}
```

- *Type:* interface{}

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#export_policy_rule NetappVolume#export_policy_rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KerberosEnabled`<sup>Optional</sup> <a name="KerberosEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.kerberosEnabled"></a>

```go
KerberosEnabled interface{}
```

- *Type:* interface{}

Enable to allow Kerberos secured volumes.

Requires appropriate export rules as well as the parent `azurerm_netapp_account` having a defined AD connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `KeyVaultPrivateEndpointId`<sup>Optional</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.keyVaultPrivateEndpointId"></a>

```go
KeyVaultPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}.

---

##### `NetworkFeatures`<sup>Optional</sup> <a name="NetworkFeatures" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures"></a>

```go
NetworkFeatures *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}.

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```go
SecurityStyle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}.

---

##### `Smb3ProtocolEncryptionEnabled`<sup>Optional</sup> <a name="Smb3ProtocolEncryptionEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.smb3ProtocolEncryptionEnabled"></a>

```go
Smb3ProtocolEncryptionEnabled interface{}
```

- *Type:* interface{}

SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#smb3_protocol_encryption_enabled NetappVolume#smb3_protocol_encryption_enabled}

---

##### `SmbAccessBasedEnumerationEnabled`<sup>Optional</sup> <a name="SmbAccessBasedEnumerationEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbAccessBasedEnumerationEnabled"></a>

```go
SmbAccessBasedEnumerationEnabled interface{}
```

- *Type:* interface{}

Enable access based enumeration setting for SMB/Dual Protocol volume.

When enabled, users who do not have permission to access a shared folder or file underneath it, do not see that shared resource displayed in their environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#smb_access_based_enumeration_enabled NetappVolume#smb_access_based_enumeration_enabled}

---

##### `SmbContinuousAvailabilityEnabled`<sup>Optional</sup> <a name="SmbContinuousAvailabilityEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbContinuousAvailabilityEnabled"></a>

```go
SmbContinuousAvailabilityEnabled interface{}
```

- *Type:* interface{}

Continuous availability option should be used only for SQL and FSLogix workloads.

Using it for any other SMB workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#smb_continuous_availability_enabled NetappVolume#smb_continuous_availability_enabled}

---

##### `SmbNonBrowsableEnabled`<sup>Optional</sup> <a name="SmbNonBrowsableEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbNonBrowsableEnabled"></a>

```go
SmbNonBrowsableEnabled interface{}
```

- *Type:* interface{}

Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#smb_non_browsable_enabled NetappVolume#smb_non_browsable_enabled}

---

##### `SnapshotDirectoryVisible`<sup>Optional</sup> <a name="SnapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible"></a>

```go
SnapshotDirectoryVisible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#tags NetappVolume#tags}.

---

##### `ThroughputInMibps`<sup>Optional</sup> <a name="ThroughputInMibps" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps"></a>

```go
ThroughputInMibps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```go
Timeouts NetappVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#zone NetappVolume#zone}.

---

### NetappVolumeDataProtectionBackupPolicy <a name="NetappVolumeDataProtectionBackupPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

&netappvolume.NetappVolumeDataProtectionBackupPolicy {
	BackupPolicyId: *string,
	BackupVaultId: *string,
	PolicyEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupPolicyId">BackupPolicyId</a></code> | <code>*string</code> | The ID of the backup policy to associate with this volume. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | The ID of the backup vault to associate with this volume. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.policyEnabled">PolicyEnabled</a></code> | <code>interface{}</code> | If set to false, the backup policy will not be enabled on this volume, thus disabling scheduled backups. |

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupPolicyId"></a>

```go
BackupPolicyId *string
```

- *Type:* *string

The ID of the backup policy to associate with this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#backup_policy_id NetappVolume#backup_policy_id}

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupVaultId"></a>

```go
BackupVaultId *string
```

- *Type:* *string

The ID of the backup vault to associate with this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#backup_vault_id NetappVolume#backup_vault_id}

---

##### `PolicyEnabled`<sup>Optional</sup> <a name="PolicyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.policyEnabled"></a>

```go
PolicyEnabled interface{}
```

- *Type:* interface{}

If set to false, the backup policy will not be enabled on this volume, thus disabling scheduled backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#policy_enabled NetappVolume#policy_enabled}

---

### NetappVolumeDataProtectionReplication <a name="NetappVolumeDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

&netappvolume.NetappVolumeDataProtectionReplication {
	RemoteVolumeLocation: *string,
	RemoteVolumeResourceId: *string,
	ReplicationFrequency: *string,
	EndpointType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency">ReplicationFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}. |

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation"></a>

```go
RemoteVolumeLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}.

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId"></a>

```go
RemoteVolumeResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}.

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency"></a>

```go
ReplicationFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}.

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}.

---

### NetappVolumeDataProtectionSnapshotPolicy <a name="NetappVolumeDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

&netappvolume.NetappVolumeDataProtectionSnapshotPolicy {
	SnapshotPolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId">SnapshotPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}. |

---

##### `SnapshotPolicyId`<sup>Required</sup> <a name="SnapshotPolicyId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId"></a>

```go
SnapshotPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}.

---

### NetappVolumeExportPolicyRule <a name="NetappVolumeExportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

&netappvolume.NetappVolumeExportPolicyRule {
	AllowedClients: *[]*string,
	RuleIndex: *f64,
	Kerberos5IReadOnlyEnabled: interface{},
	Kerberos5IReadWriteEnabled: interface{},
	Kerberos5PReadOnlyEnabled: interface{},
	Kerberos5PReadWriteEnabled: interface{},
	Kerberos5ReadOnlyEnabled: interface{},
	Kerberos5ReadWriteEnabled: interface{},
	ProtocolsEnabled: *[]*string,
	RootAccessEnabled: interface{},
	UnixReadOnly: interface{},
	UnixReadWrite: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex">RuleIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadOnlyEnabled">Kerberos5IReadOnlyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5i_read_only_enabled NetappVolume#kerberos_5i_read_only_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadWriteEnabled">Kerberos5IReadWriteEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5i_read_write_enabled NetappVolume#kerberos_5i_read_write_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadOnlyEnabled">Kerberos5PReadOnlyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5p_read_only_enabled NetappVolume#kerberos_5p_read_only_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadWriteEnabled">Kerberos5PReadWriteEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5p_read_write_enabled NetappVolume#kerberos_5p_read_write_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadOnlyEnabled">Kerberos5ReadOnlyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5_read_only_enabled NetappVolume#kerberos_5_read_only_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadWriteEnabled">Kerberos5ReadWriteEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5_read_write_enabled NetappVolume#kerberos_5_read_write_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocolsEnabled">ProtocolsEnabled</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#protocols_enabled NetappVolume#protocols_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled">RootAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly">UnixReadOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite">UnixReadWrite</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}. |

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients"></a>

```go
AllowedClients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}.

---

##### `RuleIndex`<sup>Required</sup> <a name="RuleIndex" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex"></a>

```go
RuleIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}.

---

##### `Kerberos5IReadOnlyEnabled`<sup>Optional</sup> <a name="Kerberos5IReadOnlyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadOnlyEnabled"></a>

```go
Kerberos5IReadOnlyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5i_read_only_enabled NetappVolume#kerberos_5i_read_only_enabled}.

---

##### `Kerberos5IReadWriteEnabled`<sup>Optional</sup> <a name="Kerberos5IReadWriteEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadWriteEnabled"></a>

```go
Kerberos5IReadWriteEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5i_read_write_enabled NetappVolume#kerberos_5i_read_write_enabled}.

---

##### `Kerberos5PReadOnlyEnabled`<sup>Optional</sup> <a name="Kerberos5PReadOnlyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadOnlyEnabled"></a>

```go
Kerberos5PReadOnlyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5p_read_only_enabled NetappVolume#kerberos_5p_read_only_enabled}.

---

##### `Kerberos5PReadWriteEnabled`<sup>Optional</sup> <a name="Kerberos5PReadWriteEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadWriteEnabled"></a>

```go
Kerberos5PReadWriteEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5p_read_write_enabled NetappVolume#kerberos_5p_read_write_enabled}.

---

##### `Kerberos5ReadOnlyEnabled`<sup>Optional</sup> <a name="Kerberos5ReadOnlyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadOnlyEnabled"></a>

```go
Kerberos5ReadOnlyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5_read_only_enabled NetappVolume#kerberos_5_read_only_enabled}.

---

##### `Kerberos5ReadWriteEnabled`<sup>Optional</sup> <a name="Kerberos5ReadWriteEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadWriteEnabled"></a>

```go
Kerberos5ReadWriteEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#kerberos_5_read_write_enabled NetappVolume#kerberos_5_read_write_enabled}.

---

##### `ProtocolsEnabled`<sup>Optional</sup> <a name="ProtocolsEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocolsEnabled"></a>

```go
ProtocolsEnabled *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#protocols_enabled NetappVolume#protocols_enabled}.

---

##### `RootAccessEnabled`<sup>Optional</sup> <a name="RootAccessEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled"></a>

```go
RootAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}.

---

##### `UnixReadOnly`<sup>Optional</sup> <a name="UnixReadOnly" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly"></a>

```go
UnixReadOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}.

---

##### `UnixReadWrite`<sup>Optional</sup> <a name="UnixReadWrite" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite"></a>

```go
UnixReadWrite interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}.

---

### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

&netappvolume.NetappVolumeTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#read NetappVolume#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#read NetappVolume#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeDataProtectionBackupPolicyOutputReference <a name="NetappVolumeDataProtectionBackupPolicyOutputReference" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NewNetappVolumeDataProtectionBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeDataProtectionBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resetPolicyEnabled">ResetPolicyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyEnabled` <a name="ResetPolicyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resetPolicyEnabled"></a>

```go
func ResetPolicyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyIdInput">BackupPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabledInput">PolicyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId">BackupPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled">PolicyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPolicyIdInput`<sup>Optional</sup> <a name="BackupPolicyIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyIdInput"></a>

```go
func BackupPolicyIdInput() *string
```

- *Type:* *string

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultIdInput"></a>

```go
func BackupVaultIdInput() *string
```

- *Type:* *string

---

##### `PolicyEnabledInput`<sup>Optional</sup> <a name="PolicyEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabledInput"></a>

```go
func PolicyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId"></a>

```go
func BackupPolicyId() *string
```

- *Type:* *string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId"></a>

```go
func BackupVaultId() *string
```

- *Type:* *string

---

##### `PolicyEnabled`<sup>Required</sup> <a name="PolicyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled"></a>

```go
func PolicyEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeDataProtectionBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---


### NetappVolumeDataProtectionReplicationOutputReference <a name="NetappVolumeDataProtectionReplicationOutputReference" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NewNetappVolumeDataProtectionReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeDataProtectionReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType">ResetEndpointType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType"></a>

```go
func ResetEndpointType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput">RemoteVolumeLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput">RemoteVolumeResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput">ReplicationFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">ReplicationFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `RemoteVolumeLocationInput`<sup>Optional</sup> <a name="RemoteVolumeLocationInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput"></a>

```go
func RemoteVolumeLocationInput() *string
```

- *Type:* *string

---

##### `RemoteVolumeResourceIdInput`<sup>Optional</sup> <a name="RemoteVolumeResourceIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput"></a>

```go
func RemoteVolumeResourceIdInput() *string
```

- *Type:* *string

---

##### `ReplicationFrequencyInput`<sup>Optional</sup> <a name="ReplicationFrequencyInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput"></a>

```go
func ReplicationFrequencyInput() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```go
func RemoteVolumeLocation() *string
```

- *Type:* *string

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```go
func RemoteVolumeResourceId() *string
```

- *Type:* *string

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```go
func ReplicationFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---


### NetappVolumeDataProtectionSnapshotPolicyOutputReference <a name="NetappVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NewNetappVolumeDataProtectionSnapshotPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeDataProtectionSnapshotPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput">SnapshotPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">SnapshotPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SnapshotPolicyIdInput`<sup>Optional</sup> <a name="SnapshotPolicyIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput"></a>

```go
func SnapshotPolicyIdInput() *string
```

- *Type:* *string

---

##### `SnapshotPolicyId`<sup>Required</sup> <a name="SnapshotPolicyId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```go
func SnapshotPolicyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---


### NetappVolumeExportPolicyRuleList <a name="NetappVolumeExportPolicyRuleList" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NewNetappVolumeExportPolicyRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetappVolumeExportPolicyRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get"></a>

```go
func Get(index *f64) NetappVolumeExportPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetappVolumeExportPolicyRuleOutputReference <a name="NetappVolumeExportPolicyRuleOutputReference" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NewNetappVolumeExportPolicyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetappVolumeExportPolicyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadOnlyEnabled">ResetKerberos5IReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadWriteEnabled">ResetKerberos5IReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadOnlyEnabled">ResetKerberos5PReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadWriteEnabled">ResetKerberos5PReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadOnlyEnabled">ResetKerberos5ReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadWriteEnabled">ResetKerberos5ReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocolsEnabled">ResetProtocolsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled">ResetRootAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly">ResetUnixReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite">ResetUnixReadWrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKerberos5IReadOnlyEnabled` <a name="ResetKerberos5IReadOnlyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadOnlyEnabled"></a>

```go
func ResetKerberos5IReadOnlyEnabled()
```

##### `ResetKerberos5IReadWriteEnabled` <a name="ResetKerberos5IReadWriteEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadWriteEnabled"></a>

```go
func ResetKerberos5IReadWriteEnabled()
```

##### `ResetKerberos5PReadOnlyEnabled` <a name="ResetKerberos5PReadOnlyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadOnlyEnabled"></a>

```go
func ResetKerberos5PReadOnlyEnabled()
```

##### `ResetKerberos5PReadWriteEnabled` <a name="ResetKerberos5PReadWriteEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadWriteEnabled"></a>

```go
func ResetKerberos5PReadWriteEnabled()
```

##### `ResetKerberos5ReadOnlyEnabled` <a name="ResetKerberos5ReadOnlyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadOnlyEnabled"></a>

```go
func ResetKerberos5ReadOnlyEnabled()
```

##### `ResetKerberos5ReadWriteEnabled` <a name="ResetKerberos5ReadWriteEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadWriteEnabled"></a>

```go
func ResetKerberos5ReadWriteEnabled()
```

##### `ResetProtocolsEnabled` <a name="ResetProtocolsEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocolsEnabled"></a>

```go
func ResetProtocolsEnabled()
```

##### `ResetRootAccessEnabled` <a name="ResetRootAccessEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled"></a>

```go
func ResetRootAccessEnabled()
```

##### `ResetUnixReadOnly` <a name="ResetUnixReadOnly" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly"></a>

```go
func ResetUnixReadOnly()
```

##### `ResetUnixReadWrite` <a name="ResetUnixReadWrite" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite"></a>

```go
func ResetUnixReadWrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabledInput">Kerberos5IReadOnlyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabledInput">Kerberos5IReadWriteEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabledInput">Kerberos5PReadOnlyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabledInput">Kerberos5PReadWriteEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabledInput">Kerberos5ReadOnlyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabledInput">Kerberos5ReadWriteEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabledInput">ProtocolsEnabledInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput">RootAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput">RuleIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput">UnixReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput">UnixReadWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabled">Kerberos5IReadOnlyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabled">Kerberos5IReadWriteEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabled">Kerberos5PReadOnlyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabled">Kerberos5PReadWriteEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabled">Kerberos5ReadOnlyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabled">Kerberos5ReadWriteEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabled">ProtocolsEnabled</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">RootAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex">RuleIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly">UnixReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite">UnixReadWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput"></a>

```go
func AllowedClientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Kerberos5IReadOnlyEnabledInput`<sup>Optional</sup> <a name="Kerberos5IReadOnlyEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabledInput"></a>

```go
func Kerberos5IReadOnlyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5IReadWriteEnabledInput`<sup>Optional</sup> <a name="Kerberos5IReadWriteEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabledInput"></a>

```go
func Kerberos5IReadWriteEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadOnlyEnabledInput`<sup>Optional</sup> <a name="Kerberos5PReadOnlyEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabledInput"></a>

```go
func Kerberos5PReadOnlyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadWriteEnabledInput`<sup>Optional</sup> <a name="Kerberos5PReadWriteEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabledInput"></a>

```go
func Kerberos5PReadWriteEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadOnlyEnabledInput`<sup>Optional</sup> <a name="Kerberos5ReadOnlyEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabledInput"></a>

```go
func Kerberos5ReadOnlyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadWriteEnabledInput`<sup>Optional</sup> <a name="Kerberos5ReadWriteEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabledInput"></a>

```go
func Kerberos5ReadWriteEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolsEnabledInput`<sup>Optional</sup> <a name="ProtocolsEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabledInput"></a>

```go
func ProtocolsEnabledInput() *[]*string
```

- *Type:* *[]*string

---

##### `RootAccessEnabledInput`<sup>Optional</sup> <a name="RootAccessEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput"></a>

```go
func RootAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RuleIndexInput`<sup>Optional</sup> <a name="RuleIndexInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput"></a>

```go
func RuleIndexInput() *f64
```

- *Type:* *f64

---

##### `UnixReadOnlyInput`<sup>Optional</sup> <a name="UnixReadOnlyInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput"></a>

```go
func UnixReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `UnixReadWriteInput`<sup>Optional</sup> <a name="UnixReadWriteInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput"></a>

```go
func UnixReadWriteInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *[]*string
```

- *Type:* *[]*string

---

##### `Kerberos5IReadOnlyEnabled`<sup>Required</sup> <a name="Kerberos5IReadOnlyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabled"></a>

```go
func Kerberos5IReadOnlyEnabled() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5IReadWriteEnabled`<sup>Required</sup> <a name="Kerberos5IReadWriteEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabled"></a>

```go
func Kerberos5IReadWriteEnabled() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadOnlyEnabled`<sup>Required</sup> <a name="Kerberos5PReadOnlyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabled"></a>

```go
func Kerberos5PReadOnlyEnabled() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadWriteEnabled`<sup>Required</sup> <a name="Kerberos5PReadWriteEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabled"></a>

```go
func Kerberos5PReadWriteEnabled() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadOnlyEnabled`<sup>Required</sup> <a name="Kerberos5ReadOnlyEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabled"></a>

```go
func Kerberos5ReadOnlyEnabled() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadWriteEnabled`<sup>Required</sup> <a name="Kerberos5ReadWriteEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabled"></a>

```go
func Kerberos5ReadWriteEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProtocolsEnabled`<sup>Required</sup> <a name="ProtocolsEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabled"></a>

```go
func ProtocolsEnabled() *[]*string
```

- *Type:* *[]*string

---

##### `RootAccessEnabled`<sup>Required</sup> <a name="RootAccessEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```go
func RootAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `RuleIndex`<sup>Required</sup> <a name="RuleIndex" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```go
func RuleIndex() *f64
```

- *Type:* *f64

---

##### `UnixReadOnly`<sup>Required</sup> <a name="UnixReadOnly" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```go
func UnixReadOnly() interface{}
```

- *Type:* interface{}

---

##### `UnixReadWrite`<sup>Required</sup> <a name="UnixReadWrite" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```go
func UnixReadWrite() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/netappvolume"

netappvolume.NewNetappVolumeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



