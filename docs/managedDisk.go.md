# `azurerm_managed_disk`

Refer to the Terraform Registory for docs: [`azurerm_managed_disk`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk).

# `managedDisk` Submodule <a name="`managedDisk` Submodule" id="@cdktf/provider-azurerm.managedDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDisk <a name="ManagedDisk" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk azurerm_managed_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

manageddisk.NewManagedDisk(scope Construct, id *string, config ManagedDiskConfig) ManagedDisk
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig">ManagedDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig">ManagedDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.putEncryptionSettings">PutEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskAccessId">ResetDiskAccessId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskIopsReadOnly">ResetDiskIopsReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskIopsReadWrite">ResetDiskIopsReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskMbpsReadOnly">ResetDiskMbpsReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskMbpsReadWrite">ResetDiskMbpsReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetEdgeZone">ResetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetEncryptionSettings">ResetEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetGalleryImageReferenceId">ResetGalleryImageReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetHyperVGeneration">ResetHyperVGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetImageReferenceId">ResetImageReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetLogicalSectorSize">ResetLogicalSectorSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetMaxShares">ResetMaxShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetNetworkAccessPolicy">ResetNetworkAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOnDemandBurstingEnabled">ResetOnDemandBurstingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOptimizedFrequentAttachEnabled">ResetOptimizedFrequentAttachEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetPerformancePlusEnabled">ResetPerformancePlusEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSecureVmDiskEncryptionSetId">ResetSecureVmDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSecurityType">ResetSecurityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSourceResourceId">ResetSourceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSourceUri">ResetSourceUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTrustedLaunchEnabled">ResetTrustedLaunchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetUploadSizeBytes">ResetUploadSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutEncryptionSettings` <a name="PutEncryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.putEncryptionSettings"></a>

```go
func PutEncryptionSettings(value ManagedDiskEncryptionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.putEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.putTimeouts"></a>

```go
func PutTimeouts(value ManagedDiskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a>

---

##### `ResetDiskAccessId` <a name="ResetDiskAccessId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskAccessId"></a>

```go
func ResetDiskAccessId()
```

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskEncryptionSetId"></a>

```go
func ResetDiskEncryptionSetId()
```

##### `ResetDiskIopsReadOnly` <a name="ResetDiskIopsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskIopsReadOnly"></a>

```go
func ResetDiskIopsReadOnly()
```

##### `ResetDiskIopsReadWrite` <a name="ResetDiskIopsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskIopsReadWrite"></a>

```go
func ResetDiskIopsReadWrite()
```

##### `ResetDiskMbpsReadOnly` <a name="ResetDiskMbpsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskMbpsReadOnly"></a>

```go
func ResetDiskMbpsReadOnly()
```

##### `ResetDiskMbpsReadWrite` <a name="ResetDiskMbpsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskMbpsReadWrite"></a>

```go
func ResetDiskMbpsReadWrite()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetEdgeZone` <a name="ResetEdgeZone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetEdgeZone"></a>

```go
func ResetEdgeZone()
```

##### `ResetEncryptionSettings` <a name="ResetEncryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetEncryptionSettings"></a>

```go
func ResetEncryptionSettings()
```

##### `ResetGalleryImageReferenceId` <a name="ResetGalleryImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetGalleryImageReferenceId"></a>

```go
func ResetGalleryImageReferenceId()
```

##### `ResetHyperVGeneration` <a name="ResetHyperVGeneration" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetHyperVGeneration"></a>

```go
func ResetHyperVGeneration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetId"></a>

```go
func ResetId()
```

##### `ResetImageReferenceId` <a name="ResetImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetImageReferenceId"></a>

```go
func ResetImageReferenceId()
```

##### `ResetLogicalSectorSize` <a name="ResetLogicalSectorSize" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetLogicalSectorSize"></a>

```go
func ResetLogicalSectorSize()
```

##### `ResetMaxShares` <a name="ResetMaxShares" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetMaxShares"></a>

```go
func ResetMaxShares()
```

##### `ResetNetworkAccessPolicy` <a name="ResetNetworkAccessPolicy" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetNetworkAccessPolicy"></a>

```go
func ResetNetworkAccessPolicy()
```

##### `ResetOnDemandBurstingEnabled` <a name="ResetOnDemandBurstingEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOnDemandBurstingEnabled"></a>

```go
func ResetOnDemandBurstingEnabled()
```

##### `ResetOptimizedFrequentAttachEnabled` <a name="ResetOptimizedFrequentAttachEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOptimizedFrequentAttachEnabled"></a>

```go
func ResetOptimizedFrequentAttachEnabled()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOsType"></a>

```go
func ResetOsType()
```

##### `ResetPerformancePlusEnabled` <a name="ResetPerformancePlusEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetPerformancePlusEnabled"></a>

```go
func ResetPerformancePlusEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetSecureVmDiskEncryptionSetId` <a name="ResetSecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSecureVmDiskEncryptionSetId"></a>

```go
func ResetSecureVmDiskEncryptionSetId()
```

##### `ResetSecurityType` <a name="ResetSecurityType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSecurityType"></a>

```go
func ResetSecurityType()
```

##### `ResetSourceResourceId` <a name="ResetSourceResourceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSourceResourceId"></a>

```go
func ResetSourceResourceId()
```

##### `ResetSourceUri` <a name="ResetSourceUri" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSourceUri"></a>

```go
func ResetSourceUri()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetStorageAccountId"></a>

```go
func ResetStorageAccountId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTier"></a>

```go
func ResetTier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrustedLaunchEnabled` <a name="ResetTrustedLaunchEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTrustedLaunchEnabled"></a>

```go
func ResetTrustedLaunchEnabled()
```

##### `ResetUploadSizeBytes` <a name="ResetUploadSizeBytes" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetUploadSizeBytes"></a>

```go
func ResetUploadSizeBytes()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDisk resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

manageddisk.ManagedDisk_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

manageddisk.ManagedDisk_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

manageddisk.ManagedDisk_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

manageddisk.ManagedDisk_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.encryptionSettings">EncryptionSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference">ManagedDiskEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference">ManagedDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.createOptionInput">CreateOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskAccessIdInput">DiskAccessIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadOnlyInput">DiskIopsReadOnlyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadWriteInput">DiskIopsReadWriteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadOnlyInput">DiskMbpsReadOnlyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadWriteInput">DiskMbpsReadWriteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.edgeZoneInput">EdgeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.encryptionSettingsInput">EncryptionSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.galleryImageReferenceIdInput">GalleryImageReferenceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.hyperVGenerationInput">HyperVGenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.imageReferenceIdInput">ImageReferenceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.logicalSectorSizeInput">LogicalSectorSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.maxSharesInput">MaxSharesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.networkAccessPolicyInput">NetworkAccessPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.onDemandBurstingEnabledInput">OnDemandBurstingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.optimizedFrequentAttachEnabledInput">OptimizedFrequentAttachEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.performancePlusEnabledInput">PerformancePlusEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.secureVmDiskEncryptionSetIdInput">SecureVmDiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.securityTypeInput">SecurityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceUriInput">SourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.trustedLaunchEnabledInput">TrustedLaunchEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.uploadSizeBytesInput">UploadSizeBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.createOption">CreateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskAccessId">DiskAccessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadOnly">DiskIopsReadOnly</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadWrite">DiskIopsReadWrite</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadOnly">DiskMbpsReadOnly</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadWrite">DiskMbpsReadWrite</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.edgeZone">EdgeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.galleryImageReferenceId">GalleryImageReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.hyperVGeneration">HyperVGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.imageReferenceId">ImageReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.logicalSectorSize">LogicalSectorSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.maxShares">MaxShares</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.networkAccessPolicy">NetworkAccessPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.onDemandBurstingEnabled">OnDemandBurstingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.optimizedFrequentAttachEnabled">OptimizedFrequentAttachEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.performancePlusEnabled">PerformancePlusEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.securityType">SecurityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceUri">SourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.trustedLaunchEnabled">TrustedLaunchEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.uploadSizeBytes">UploadSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionSettings`<sup>Required</sup> <a name="EncryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.encryptionSettings"></a>

```go
func EncryptionSettings() ManagedDiskEncryptionSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference">ManagedDiskEncryptionSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.timeouts"></a>

```go
func Timeouts() ManagedDiskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference">ManagedDiskTimeoutsOutputReference</a>

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.createOptionInput"></a>

```go
func CreateOptionInput() *string
```

- *Type:* *string

---

##### `DiskAccessIdInput`<sup>Optional</sup> <a name="DiskAccessIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskAccessIdInput"></a>

```go
func DiskAccessIdInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskEncryptionSetIdInput"></a>

```go
func DiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `DiskIopsReadOnlyInput`<sup>Optional</sup> <a name="DiskIopsReadOnlyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadOnlyInput"></a>

```go
func DiskIopsReadOnlyInput() *f64
```

- *Type:* *f64

---

##### `DiskIopsReadWriteInput`<sup>Optional</sup> <a name="DiskIopsReadWriteInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadWriteInput"></a>

```go
func DiskIopsReadWriteInput() *f64
```

- *Type:* *f64

---

##### `DiskMbpsReadOnlyInput`<sup>Optional</sup> <a name="DiskMbpsReadOnlyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadOnlyInput"></a>

```go
func DiskMbpsReadOnlyInput() *f64
```

- *Type:* *f64

---

##### `DiskMbpsReadWriteInput`<sup>Optional</sup> <a name="DiskMbpsReadWriteInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadWriteInput"></a>

```go
func DiskMbpsReadWriteInput() *f64
```

- *Type:* *f64

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `EdgeZoneInput`<sup>Optional</sup> <a name="EdgeZoneInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.edgeZoneInput"></a>

```go
func EdgeZoneInput() *string
```

- *Type:* *string

---

##### `EncryptionSettingsInput`<sup>Optional</sup> <a name="EncryptionSettingsInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.encryptionSettingsInput"></a>

```go
func EncryptionSettingsInput() ManagedDiskEncryptionSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a>

---

##### `GalleryImageReferenceIdInput`<sup>Optional</sup> <a name="GalleryImageReferenceIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.galleryImageReferenceIdInput"></a>

```go
func GalleryImageReferenceIdInput() *string
```

- *Type:* *string

---

##### `HyperVGenerationInput`<sup>Optional</sup> <a name="HyperVGenerationInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.hyperVGenerationInput"></a>

```go
func HyperVGenerationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageReferenceIdInput`<sup>Optional</sup> <a name="ImageReferenceIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.imageReferenceIdInput"></a>

```go
func ImageReferenceIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogicalSectorSizeInput`<sup>Optional</sup> <a name="LogicalSectorSizeInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.logicalSectorSizeInput"></a>

```go
func LogicalSectorSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxSharesInput`<sup>Optional</sup> <a name="MaxSharesInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.maxSharesInput"></a>

```go
func MaxSharesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkAccessPolicyInput`<sup>Optional</sup> <a name="NetworkAccessPolicyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.networkAccessPolicyInput"></a>

```go
func NetworkAccessPolicyInput() *string
```

- *Type:* *string

---

##### `OnDemandBurstingEnabledInput`<sup>Optional</sup> <a name="OnDemandBurstingEnabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.onDemandBurstingEnabledInput"></a>

```go
func OnDemandBurstingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OptimizedFrequentAttachEnabledInput`<sup>Optional</sup> <a name="OptimizedFrequentAttachEnabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.optimizedFrequentAttachEnabledInput"></a>

```go
func OptimizedFrequentAttachEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `PerformancePlusEnabledInput`<sup>Optional</sup> <a name="PerformancePlusEnabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.performancePlusEnabledInput"></a>

```go
func PerformancePlusEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SecureVmDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.secureVmDiskEncryptionSetIdInput"></a>

```go
func SecureVmDiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `SecurityTypeInput`<sup>Optional</sup> <a name="SecurityTypeInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.securityTypeInput"></a>

```go
func SecurityTypeInput() *string
```

- *Type:* *string

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceResourceIdInput"></a>

```go
func SourceResourceIdInput() *string
```

- *Type:* *string

---

##### `SourceUriInput`<sup>Optional</sup> <a name="SourceUriInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceUriInput"></a>

```go
func SourceUriInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountTypeInput"></a>

```go
func StorageAccountTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustedLaunchEnabledInput`<sup>Optional</sup> <a name="TrustedLaunchEnabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.trustedLaunchEnabledInput"></a>

```go
func TrustedLaunchEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UploadSizeBytesInput`<sup>Optional</sup> <a name="UploadSizeBytesInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.uploadSizeBytesInput"></a>

```go
func UploadSizeBytesInput() *f64
```

- *Type:* *f64

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.createOption"></a>

```go
func CreateOption() *string
```

- *Type:* *string

---

##### `DiskAccessId`<sup>Required</sup> <a name="DiskAccessId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskAccessId"></a>

```go
func DiskAccessId() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskEncryptionSetId"></a>

```go
func DiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `DiskIopsReadOnly`<sup>Required</sup> <a name="DiskIopsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadOnly"></a>

```go
func DiskIopsReadOnly() *f64
```

- *Type:* *f64

---

##### `DiskIopsReadWrite`<sup>Required</sup> <a name="DiskIopsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadWrite"></a>

```go
func DiskIopsReadWrite() *f64
```

- *Type:* *f64

---

##### `DiskMbpsReadOnly`<sup>Required</sup> <a name="DiskMbpsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadOnly"></a>

```go
func DiskMbpsReadOnly() *f64
```

- *Type:* *f64

---

##### `DiskMbpsReadWrite`<sup>Required</sup> <a name="DiskMbpsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadWrite"></a>

```go
func DiskMbpsReadWrite() *f64
```

- *Type:* *f64

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EdgeZone`<sup>Required</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.edgeZone"></a>

```go
func EdgeZone() *string
```

- *Type:* *string

---

##### `GalleryImageReferenceId`<sup>Required</sup> <a name="GalleryImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.galleryImageReferenceId"></a>

```go
func GalleryImageReferenceId() *string
```

- *Type:* *string

---

##### `HyperVGeneration`<sup>Required</sup> <a name="HyperVGeneration" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.hyperVGeneration"></a>

```go
func HyperVGeneration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageReferenceId`<sup>Required</sup> <a name="ImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.imageReferenceId"></a>

```go
func ImageReferenceId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LogicalSectorSize`<sup>Required</sup> <a name="LogicalSectorSize" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.logicalSectorSize"></a>

```go
func LogicalSectorSize() *f64
```

- *Type:* *f64

---

##### `MaxShares`<sup>Required</sup> <a name="MaxShares" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.maxShares"></a>

```go
func MaxShares() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkAccessPolicy`<sup>Required</sup> <a name="NetworkAccessPolicy" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.networkAccessPolicy"></a>

```go
func NetworkAccessPolicy() *string
```

- *Type:* *string

---

##### `OnDemandBurstingEnabled`<sup>Required</sup> <a name="OnDemandBurstingEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.onDemandBurstingEnabled"></a>

```go
func OnDemandBurstingEnabled() interface{}
```

- *Type:* interface{}

---

##### `OptimizedFrequentAttachEnabled`<sup>Required</sup> <a name="OptimizedFrequentAttachEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.optimizedFrequentAttachEnabled"></a>

```go
func OptimizedFrequentAttachEnabled() interface{}
```

- *Type:* interface{}

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `PerformancePlusEnabled`<sup>Required</sup> <a name="PerformancePlusEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.performancePlusEnabled"></a>

```go
func PerformancePlusEnabled() interface{}
```

- *Type:* interface{}

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SecureVmDiskEncryptionSetId`<sup>Required</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.secureVmDiskEncryptionSetId"></a>

```go
func SecureVmDiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `SecurityType`<sup>Required</sup> <a name="SecurityType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.securityType"></a>

```go
func SecurityType() *string
```

- *Type:* *string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

##### `SourceUri`<sup>Required</sup> <a name="SourceUri" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceUri"></a>

```go
func SourceUri() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `TrustedLaunchEnabled`<sup>Required</sup> <a name="TrustedLaunchEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.trustedLaunchEnabled"></a>

```go
func TrustedLaunchEnabled() interface{}
```

- *Type:* interface{}

---

##### `UploadSizeBytes`<sup>Required</sup> <a name="UploadSizeBytes" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.uploadSizeBytes"></a>

```go
func UploadSizeBytes() *f64
```

- *Type:* *f64

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDiskConfig <a name="ManagedDiskConfig" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

&manageddisk.ManagedDiskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CreateOption: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	StorageAccountType: *string,
	DiskAccessId: *string,
	DiskEncryptionSetId: *string,
	DiskIopsReadOnly: *f64,
	DiskIopsReadWrite: *f64,
	DiskMbpsReadOnly: *f64,
	DiskMbpsReadWrite: *f64,
	DiskSizeGb: *f64,
	EdgeZone: *string,
	EncryptionSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.managedDisk.ManagedDiskEncryptionSettings,
	GalleryImageReferenceId: *string,
	HyperVGeneration: *string,
	Id: *string,
	ImageReferenceId: *string,
	LogicalSectorSize: *f64,
	MaxShares: *f64,
	NetworkAccessPolicy: *string,
	OnDemandBurstingEnabled: interface{},
	OptimizedFrequentAttachEnabled: interface{},
	OsType: *string,
	PerformancePlusEnabled: interface{},
	PublicNetworkAccessEnabled: interface{},
	SecureVmDiskEncryptionSetId: *string,
	SecurityType: *string,
	SourceResourceId: *string,
	SourceUri: *string,
	StorageAccountId: *string,
	Tags: *map[string]*string,
	Tier: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.managedDisk.ManagedDiskTimeouts,
	TrustedLaunchEnabled: interface{},
	UploadSizeBytes: *f64,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.createOption">CreateOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#location ManagedDisk#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#name ManagedDisk#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskAccessId">DiskAccessId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_access_id ManagedDisk#disk_access_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_encryption_set_id ManagedDisk#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskIopsReadOnly">DiskIopsReadOnly</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_iops_read_only ManagedDisk#disk_iops_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskIopsReadWrite">DiskIopsReadWrite</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_iops_read_write ManagedDisk#disk_iops_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskMbpsReadOnly">DiskMbpsReadOnly</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_mbps_read_only ManagedDisk#disk_mbps_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskMbpsReadWrite">DiskMbpsReadWrite</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_mbps_read_write ManagedDisk#disk_mbps_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.edgeZone">EdgeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#edge_zone ManagedDisk#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.encryptionSettings">EncryptionSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a></code> | encryption_settings block. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.galleryImageReferenceId">GalleryImageReferenceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#gallery_image_reference_id ManagedDisk#gallery_image_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.hyperVGeneration">HyperVGeneration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#id ManagedDisk#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.imageReferenceId">ImageReferenceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.logicalSectorSize">LogicalSectorSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#logical_sector_size ManagedDisk#logical_sector_size}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.maxShares">MaxShares</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#max_shares ManagedDisk#max_shares}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.networkAccessPolicy">NetworkAccessPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#network_access_policy ManagedDisk#network_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.onDemandBurstingEnabled">OnDemandBurstingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#on_demand_bursting_enabled ManagedDisk#on_demand_bursting_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.optimizedFrequentAttachEnabled">OptimizedFrequentAttachEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#optimized_frequent_attach_enabled ManagedDisk#optimized_frequent_attach_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.performancePlusEnabled">PerformancePlusEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#performance_plus_enabled ManagedDisk#performance_plus_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#public_network_access_enabled ManagedDisk#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#secure_vm_disk_encryption_set_id ManagedDisk#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.securityType">SecurityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#security_type ManagedDisk#security_type}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.sourceUri">SourceUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#tags ManagedDisk#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.tier">Tier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#tier ManagedDisk#tier}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.trustedLaunchEnabled">TrustedLaunchEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#trusted_launch_enabled ManagedDisk#trusted_launch_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.uploadSizeBytes">UploadSizeBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#upload_size_bytes ManagedDisk#upload_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#zone ManagedDisk#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.createOption"></a>

```go
CreateOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#location ManagedDisk#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#name ManagedDisk#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.storageAccountType"></a>

```go
StorageAccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}.

---

##### `DiskAccessId`<sup>Optional</sup> <a name="DiskAccessId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskAccessId"></a>

```go
DiskAccessId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_access_id ManagedDisk#disk_access_id}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskEncryptionSetId"></a>

```go
DiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_encryption_set_id ManagedDisk#disk_encryption_set_id}.

---

##### `DiskIopsReadOnly`<sup>Optional</sup> <a name="DiskIopsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskIopsReadOnly"></a>

```go
DiskIopsReadOnly *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_iops_read_only ManagedDisk#disk_iops_read_only}.

---

##### `DiskIopsReadWrite`<sup>Optional</sup> <a name="DiskIopsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskIopsReadWrite"></a>

```go
DiskIopsReadWrite *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_iops_read_write ManagedDisk#disk_iops_read_write}.

---

##### `DiskMbpsReadOnly`<sup>Optional</sup> <a name="DiskMbpsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskMbpsReadOnly"></a>

```go
DiskMbpsReadOnly *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_mbps_read_only ManagedDisk#disk_mbps_read_only}.

---

##### `DiskMbpsReadWrite`<sup>Optional</sup> <a name="DiskMbpsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskMbpsReadWrite"></a>

```go
DiskMbpsReadWrite *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_mbps_read_write ManagedDisk#disk_mbps_read_write}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}.

---

##### `EdgeZone`<sup>Optional</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.edgeZone"></a>

```go
EdgeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#edge_zone ManagedDisk#edge_zone}.

---

##### `EncryptionSettings`<sup>Optional</sup> <a name="EncryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.encryptionSettings"></a>

```go
EncryptionSettings ManagedDiskEncryptionSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a>

encryption_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#encryption_settings ManagedDisk#encryption_settings}

---

##### `GalleryImageReferenceId`<sup>Optional</sup> <a name="GalleryImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.galleryImageReferenceId"></a>

```go
GalleryImageReferenceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#gallery_image_reference_id ManagedDisk#gallery_image_reference_id}.

---

##### `HyperVGeneration`<sup>Optional</sup> <a name="HyperVGeneration" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.hyperVGeneration"></a>

```go
HyperVGeneration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#id ManagedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageReferenceId`<sup>Optional</sup> <a name="ImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.imageReferenceId"></a>

```go
ImageReferenceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}.

---

##### `LogicalSectorSize`<sup>Optional</sup> <a name="LogicalSectorSize" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.logicalSectorSize"></a>

```go
LogicalSectorSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#logical_sector_size ManagedDisk#logical_sector_size}.

---

##### `MaxShares`<sup>Optional</sup> <a name="MaxShares" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.maxShares"></a>

```go
MaxShares *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#max_shares ManagedDisk#max_shares}.

---

##### `NetworkAccessPolicy`<sup>Optional</sup> <a name="NetworkAccessPolicy" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.networkAccessPolicy"></a>

```go
NetworkAccessPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#network_access_policy ManagedDisk#network_access_policy}.

---

##### `OnDemandBurstingEnabled`<sup>Optional</sup> <a name="OnDemandBurstingEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.onDemandBurstingEnabled"></a>

```go
OnDemandBurstingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#on_demand_bursting_enabled ManagedDisk#on_demand_bursting_enabled}.

---

##### `OptimizedFrequentAttachEnabled`<sup>Optional</sup> <a name="OptimizedFrequentAttachEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.optimizedFrequentAttachEnabled"></a>

```go
OptimizedFrequentAttachEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#optimized_frequent_attach_enabled ManagedDisk#optimized_frequent_attach_enabled}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}.

---

##### `PerformancePlusEnabled`<sup>Optional</sup> <a name="PerformancePlusEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.performancePlusEnabled"></a>

```go
PerformancePlusEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#performance_plus_enabled ManagedDisk#performance_plus_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#public_network_access_enabled ManagedDisk#public_network_access_enabled}.

---

##### `SecureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.secureVmDiskEncryptionSetId"></a>

```go
SecureVmDiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#secure_vm_disk_encryption_set_id ManagedDisk#secure_vm_disk_encryption_set_id}.

---

##### `SecurityType`<sup>Optional</sup> <a name="SecurityType" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.securityType"></a>

```go
SecurityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#security_type ManagedDisk#security_type}.

---

##### `SourceResourceId`<sup>Optional</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.sourceResourceId"></a>

```go
SourceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}.

---

##### `SourceUri`<sup>Optional</sup> <a name="SourceUri" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.sourceUri"></a>

```go
SourceUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#tags ManagedDisk#tags}.

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#tier ManagedDisk#tier}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.timeouts"></a>

```go
Timeouts ManagedDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#timeouts ManagedDisk#timeouts}

---

##### `TrustedLaunchEnabled`<sup>Optional</sup> <a name="TrustedLaunchEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.trustedLaunchEnabled"></a>

```go
TrustedLaunchEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#trusted_launch_enabled ManagedDisk#trusted_launch_enabled}.

---

##### `UploadSizeBytes`<sup>Optional</sup> <a name="UploadSizeBytes" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.uploadSizeBytes"></a>

```go
UploadSizeBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#upload_size_bytes ManagedDisk#upload_size_bytes}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#zone ManagedDisk#zone}.

---

### ManagedDiskEncryptionSettings <a name="ManagedDiskEncryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

&manageddisk.ManagedDiskEncryptionSettings {
	DiskEncryptionKey: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey,
	Enabled: interface{},
	KeyEncryptionKey: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#enabled ManagedDisk#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.keyEncryptionKey">KeyEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a></code> | key_encryption_key block. |

---

##### `DiskEncryptionKey`<sup>Optional</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.diskEncryptionKey"></a>

```go
DiskEncryptionKey ManagedDiskEncryptionSettingsDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#disk_encryption_key ManagedDisk#disk_encryption_key}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#enabled ManagedDisk#enabled}.

---

##### `KeyEncryptionKey`<sup>Optional</sup> <a name="KeyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.keyEncryptionKey"></a>

```go
KeyEncryptionKey ManagedDiskEncryptionSettingsKeyEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a>

key_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#key_encryption_key ManagedDisk#key_encryption_key}

---

### ManagedDiskEncryptionSettingsDiskEncryptionKey <a name="ManagedDiskEncryptionSettingsDiskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

&manageddisk.ManagedDiskEncryptionSettingsDiskEncryptionKey {
	SecretUrl: *string,
	SourceVaultId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.property.secretUrl">SecretUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#secret_url ManagedDisk#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}. |

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.property.secretUrl"></a>

```go
SecretUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#secret_url ManagedDisk#secret_url}.

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.property.sourceVaultId"></a>

```go
SourceVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}.

---

### ManagedDiskEncryptionSettingsKeyEncryptionKey <a name="ManagedDiskEncryptionSettingsKeyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

&manageddisk.ManagedDiskEncryptionSettingsKeyEncryptionKey {
	KeyUrl: *string,
	SourceVaultId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.property.keyUrl">KeyUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#key_url ManagedDisk#key_url}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}. |

---

##### `KeyUrl`<sup>Required</sup> <a name="KeyUrl" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.property.keyUrl"></a>

```go
KeyUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#key_url ManagedDisk#key_url}.

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.property.sourceVaultId"></a>

```go
SourceVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}.

---

### ManagedDiskTimeouts <a name="ManagedDiskTimeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

&manageddisk.ManagedDiskTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#create ManagedDisk#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#delete ManagedDisk#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#read ManagedDisk#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#update ManagedDisk#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#create ManagedDisk#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#delete ManagedDisk#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#read ManagedDisk#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/managed_disk#update ManagedDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference <a name="ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

manageddisk.NewManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrlInput">SecretUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrl">SecretUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretUrlInput`<sup>Optional</sup> <a name="SecretUrlInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrlInput"></a>

```go
func SecretUrlInput() *string
```

- *Type:* *string

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```go
func SourceVaultIdInput() *string
```

- *Type:* *string

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrl"></a>

```go
func SecretUrl() *string
```

- *Type:* *string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultId"></a>

```go
func SourceVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDiskEncryptionSettingsDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a>

---


### ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference <a name="ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

manageddisk.NewManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrlInput">KeyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrl">KeyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyUrlInput`<sup>Optional</sup> <a name="KeyUrlInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrlInput"></a>

```go
func KeyUrlInput() *string
```

- *Type:* *string

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```go
func SourceVaultIdInput() *string
```

- *Type:* *string

---

##### `KeyUrl`<sup>Required</sup> <a name="KeyUrl" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrl"></a>

```go
func KeyUrl() *string
```

- *Type:* *string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultId"></a>

```go
func SourceVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDiskEncryptionSettingsKeyEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a>

---


### ManagedDiskEncryptionSettingsOutputReference <a name="ManagedDiskEncryptionSettingsOutputReference" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

manageddisk.NewManagedDiskEncryptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDiskEncryptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putDiskEncryptionKey">PutDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putKeyEncryptionKey">PutKeyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetDiskEncryptionKey">ResetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetKeyEncryptionKey">ResetKeyEncryptionKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskEncryptionKey` <a name="PutDiskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putDiskEncryptionKey"></a>

```go
func PutDiskEncryptionKey(value ManagedDiskEncryptionSettingsDiskEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a>

---

##### `PutKeyEncryptionKey` <a name="PutKeyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putKeyEncryptionKey"></a>

```go
func PutKeyEncryptionKey(value ManagedDiskEncryptionSettingsKeyEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putKeyEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a>

---

##### `ResetDiskEncryptionKey` <a name="ResetDiskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetDiskEncryptionKey"></a>

```go
func ResetDiskEncryptionKey()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKeyEncryptionKey` <a name="ResetKeyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetKeyEncryptionKey"></a>

```go
func ResetKeyEncryptionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference">ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKey">KeyEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference">ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKeyInput">DiskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKeyInput">KeyEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskEncryptionKey`<sup>Required</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKey"></a>

```go
func DiskEncryptionKey() ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference">ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference</a>

---

##### `KeyEncryptionKey`<sup>Required</sup> <a name="KeyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKey"></a>

```go
func KeyEncryptionKey() ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference">ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference</a>

---

##### `DiskEncryptionKeyInput`<sup>Optional</sup> <a name="DiskEncryptionKeyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKeyInput"></a>

```go
func DiskEncryptionKeyInput() ManagedDiskEncryptionSettingsDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyEncryptionKeyInput`<sup>Optional</sup> <a name="KeyEncryptionKeyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKeyInput"></a>

```go
func KeyEncryptionKeyInput() ManagedDiskEncryptionSettingsKeyEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDiskEncryptionSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a>

---


### ManagedDiskTimeoutsOutputReference <a name="ManagedDiskTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/manageddisk"

manageddisk.NewManagedDiskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDiskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



