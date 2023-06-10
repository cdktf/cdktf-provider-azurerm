# `azurerm_managed_disk`

Refer to the Terraform Registory for docs: [`azurerm_managed_disk`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk).

# `managedDisk` Submodule <a name="`managedDisk` Submodule" id="@cdktf/provider-azurerm.managedDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDisk <a name="ManagedDisk" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk azurerm_managed_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDisk;

ManagedDisk.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .createOption(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountType(java.lang.String)
//  .diskAccessId(java.lang.String)
//  .diskEncryptionSetId(java.lang.String)
//  .diskIopsReadOnly(java.lang.Number)
//  .diskIopsReadWrite(java.lang.Number)
//  .diskMbpsReadOnly(java.lang.Number)
//  .diskMbpsReadWrite(java.lang.Number)
//  .diskSizeGb(java.lang.Number)
//  .edgeZone(java.lang.String)
//  .encryptionSettings(ManagedDiskEncryptionSettings)
//  .galleryImageReferenceId(java.lang.String)
//  .hyperVGeneration(java.lang.String)
//  .id(java.lang.String)
//  .imageReferenceId(java.lang.String)
//  .logicalSectorSize(java.lang.Number)
//  .maxShares(java.lang.Number)
//  .networkAccessPolicy(java.lang.String)
//  .onDemandBurstingEnabled(java.lang.Boolean)
//  .onDemandBurstingEnabled(IResolvable)
//  .osType(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .secureVmDiskEncryptionSetId(java.lang.String)
//  .securityType(java.lang.String)
//  .sourceResourceId(java.lang.String)
//  .sourceUri(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tier(java.lang.String)
//  .timeouts(ManagedDiskTimeouts)
//  .trustedLaunchEnabled(java.lang.Boolean)
//  .trustedLaunchEnabled(IResolvable)
//  .uploadSizeBytes(java.lang.Number)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.createOption">createOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#location ManagedDisk#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#name ManagedDisk#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskAccessId">diskAccessId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_access_id ManagedDisk#disk_access_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_encryption_set_id ManagedDisk#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskIopsReadOnly">diskIopsReadOnly</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_iops_read_only ManagedDisk#disk_iops_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskIopsReadWrite">diskIopsReadWrite</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_iops_read_write ManagedDisk#disk_iops_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskMbpsReadOnly">diskMbpsReadOnly</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_mbps_read_only ManagedDisk#disk_mbps_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskMbpsReadWrite">diskMbpsReadWrite</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_mbps_read_write ManagedDisk#disk_mbps_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#edge_zone ManagedDisk#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.encryptionSettings">encryptionSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a></code> | encryption_settings block. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.galleryImageReferenceId">galleryImageReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#gallery_image_reference_id ManagedDisk#gallery_image_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.hyperVGeneration">hyperVGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#id ManagedDisk#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.imageReferenceId">imageReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.logicalSectorSize">logicalSectorSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#logical_sector_size ManagedDisk#logical_sector_size}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.maxShares">maxShares</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#max_shares ManagedDisk#max_shares}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.networkAccessPolicy">networkAccessPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#network_access_policy ManagedDisk#network_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.onDemandBurstingEnabled">onDemandBurstingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#on_demand_bursting_enabled ManagedDisk#on_demand_bursting_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#public_network_access_enabled ManagedDisk#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.secureVmDiskEncryptionSetId">secureVmDiskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#secure_vm_disk_encryption_set_id ManagedDisk#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.securityType">securityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#security_type ManagedDisk#security_type}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.sourceResourceId">sourceResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.sourceUri">sourceUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#tags ManagedDisk#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#tier ManagedDisk#tier}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.trustedLaunchEnabled">trustedLaunchEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#trusted_launch_enabled ManagedDisk#trusted_launch_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.uploadSizeBytes">uploadSizeBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#upload_size_bytes ManagedDisk#upload_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#zone ManagedDisk#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.createOption"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#location ManagedDisk#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#name ManagedDisk#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.storageAccountType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}.

---

##### `diskAccessId`<sup>Optional</sup> <a name="diskAccessId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskAccessId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_access_id ManagedDisk#disk_access_id}.

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskEncryptionSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_encryption_set_id ManagedDisk#disk_encryption_set_id}.

---

##### `diskIopsReadOnly`<sup>Optional</sup> <a name="diskIopsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskIopsReadOnly"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_iops_read_only ManagedDisk#disk_iops_read_only}.

---

##### `diskIopsReadWrite`<sup>Optional</sup> <a name="diskIopsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskIopsReadWrite"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_iops_read_write ManagedDisk#disk_iops_read_write}.

---

##### `diskMbpsReadOnly`<sup>Optional</sup> <a name="diskMbpsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskMbpsReadOnly"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_mbps_read_only ManagedDisk#disk_mbps_read_only}.

---

##### `diskMbpsReadWrite`<sup>Optional</sup> <a name="diskMbpsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskMbpsReadWrite"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_mbps_read_write ManagedDisk#disk_mbps_read_write}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.diskSizeGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.edgeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#edge_zone ManagedDisk#edge_zone}.

---

##### `encryptionSettings`<sup>Optional</sup> <a name="encryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.encryptionSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a>

encryption_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#encryption_settings ManagedDisk#encryption_settings}

---

##### `galleryImageReferenceId`<sup>Optional</sup> <a name="galleryImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.galleryImageReferenceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#gallery_image_reference_id ManagedDisk#gallery_image_reference_id}.

---

##### `hyperVGeneration`<sup>Optional</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.hyperVGeneration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#id ManagedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageReferenceId`<sup>Optional</sup> <a name="imageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.imageReferenceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}.

---

##### `logicalSectorSize`<sup>Optional</sup> <a name="logicalSectorSize" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.logicalSectorSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#logical_sector_size ManagedDisk#logical_sector_size}.

---

##### `maxShares`<sup>Optional</sup> <a name="maxShares" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.maxShares"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#max_shares ManagedDisk#max_shares}.

---

##### `networkAccessPolicy`<sup>Optional</sup> <a name="networkAccessPolicy" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.networkAccessPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#network_access_policy ManagedDisk#network_access_policy}.

---

##### `onDemandBurstingEnabled`<sup>Optional</sup> <a name="onDemandBurstingEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.onDemandBurstingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#on_demand_bursting_enabled ManagedDisk#on_demand_bursting_enabled}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#public_network_access_enabled ManagedDisk#public_network_access_enabled}.

---

##### `secureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="secureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.secureVmDiskEncryptionSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#secure_vm_disk_encryption_set_id ManagedDisk#secure_vm_disk_encryption_set_id}.

---

##### `securityType`<sup>Optional</sup> <a name="securityType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.securityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#security_type ManagedDisk#security_type}.

---

##### `sourceResourceId`<sup>Optional</sup> <a name="sourceResourceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.sourceResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}.

---

##### `sourceUri`<sup>Optional</sup> <a name="sourceUri" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.sourceUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#tags ManagedDisk#tags}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#tier ManagedDisk#tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#timeouts ManagedDisk#timeouts}

---

##### `trustedLaunchEnabled`<sup>Optional</sup> <a name="trustedLaunchEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.trustedLaunchEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#trusted_launch_enabled ManagedDisk#trusted_launch_enabled}.

---

##### `uploadSizeBytes`<sup>Optional</sup> <a name="uploadSizeBytes" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.uploadSizeBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#upload_size_bytes ManagedDisk#upload_size_bytes}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#zone ManagedDisk#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.putEncryptionSettings">putEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskAccessId">resetDiskAccessId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskIopsReadOnly">resetDiskIopsReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskIopsReadWrite">resetDiskIopsReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskMbpsReadOnly">resetDiskMbpsReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskMbpsReadWrite">resetDiskMbpsReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetEncryptionSettings">resetEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetGalleryImageReferenceId">resetGalleryImageReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetHyperVGeneration">resetHyperVGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetImageReferenceId">resetImageReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetLogicalSectorSize">resetLogicalSectorSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetMaxShares">resetMaxShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetNetworkAccessPolicy">resetNetworkAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOnDemandBurstingEnabled">resetOnDemandBurstingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSecureVmDiskEncryptionSetId">resetSecureVmDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSecurityType">resetSecurityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSourceResourceId">resetSourceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSourceUri">resetSourceUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTrustedLaunchEnabled">resetTrustedLaunchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetUploadSizeBytes">resetUploadSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEncryptionSettings` <a name="putEncryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.putEncryptionSettings"></a>

```java
public void putEncryptionSettings(ManagedDiskEncryptionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.putEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.putTimeouts"></a>

```java
public void putTimeouts(ManagedDiskTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a>

---

##### `resetDiskAccessId` <a name="resetDiskAccessId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskAccessId"></a>

```java
public void resetDiskAccessId()
```

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskEncryptionSetId"></a>

```java
public void resetDiskEncryptionSetId()
```

##### `resetDiskIopsReadOnly` <a name="resetDiskIopsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskIopsReadOnly"></a>

```java
public void resetDiskIopsReadOnly()
```

##### `resetDiskIopsReadWrite` <a name="resetDiskIopsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskIopsReadWrite"></a>

```java
public void resetDiskIopsReadWrite()
```

##### `resetDiskMbpsReadOnly` <a name="resetDiskMbpsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskMbpsReadOnly"></a>

```java
public void resetDiskMbpsReadOnly()
```

##### `resetDiskMbpsReadWrite` <a name="resetDiskMbpsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskMbpsReadWrite"></a>

```java
public void resetDiskMbpsReadWrite()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetEdgeZone"></a>

```java
public void resetEdgeZone()
```

##### `resetEncryptionSettings` <a name="resetEncryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetEncryptionSettings"></a>

```java
public void resetEncryptionSettings()
```

##### `resetGalleryImageReferenceId` <a name="resetGalleryImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetGalleryImageReferenceId"></a>

```java
public void resetGalleryImageReferenceId()
```

##### `resetHyperVGeneration` <a name="resetHyperVGeneration" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetHyperVGeneration"></a>

```java
public void resetHyperVGeneration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetId"></a>

```java
public void resetId()
```

##### `resetImageReferenceId` <a name="resetImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetImageReferenceId"></a>

```java
public void resetImageReferenceId()
```

##### `resetLogicalSectorSize` <a name="resetLogicalSectorSize" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetLogicalSectorSize"></a>

```java
public void resetLogicalSectorSize()
```

##### `resetMaxShares` <a name="resetMaxShares" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetMaxShares"></a>

```java
public void resetMaxShares()
```

##### `resetNetworkAccessPolicy` <a name="resetNetworkAccessPolicy" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetNetworkAccessPolicy"></a>

```java
public void resetNetworkAccessPolicy()
```

##### `resetOnDemandBurstingEnabled` <a name="resetOnDemandBurstingEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOnDemandBurstingEnabled"></a>

```java
public void resetOnDemandBurstingEnabled()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetSecureVmDiskEncryptionSetId` <a name="resetSecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSecureVmDiskEncryptionSetId"></a>

```java
public void resetSecureVmDiskEncryptionSetId()
```

##### `resetSecurityType` <a name="resetSecurityType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSecurityType"></a>

```java
public void resetSecurityType()
```

##### `resetSourceResourceId` <a name="resetSourceResourceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSourceResourceId"></a>

```java
public void resetSourceResourceId()
```

##### `resetSourceUri` <a name="resetSourceUri" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetSourceUri"></a>

```java
public void resetSourceUri()
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetStorageAccountId"></a>

```java
public void resetStorageAccountId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTags"></a>

```java
public void resetTags()
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTier"></a>

```java
public void resetTier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrustedLaunchEnabled` <a name="resetTrustedLaunchEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetTrustedLaunchEnabled"></a>

```java
public void resetTrustedLaunchEnabled()
```

##### `resetUploadSizeBytes` <a name="resetUploadSizeBytes" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetUploadSizeBytes"></a>

```java
public void resetUploadSizeBytes()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDisk;

ManagedDisk.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDisk;

ManagedDisk.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDisk;

ManagedDisk.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.encryptionSettings">encryptionSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference">ManagedDiskEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference">ManagedDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.createOptionInput">createOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskAccessIdInput">diskAccessIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadOnlyInput">diskIopsReadOnlyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadWriteInput">diskIopsReadWriteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadOnlyInput">diskMbpsReadOnlyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadWriteInput">diskMbpsReadWriteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.edgeZoneInput">edgeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.encryptionSettingsInput">encryptionSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.galleryImageReferenceIdInput">galleryImageReferenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.hyperVGenerationInput">hyperVGenerationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.imageReferenceIdInput">imageReferenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.logicalSectorSizeInput">logicalSectorSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.maxSharesInput">maxSharesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.networkAccessPolicyInput">networkAccessPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.onDemandBurstingEnabledInput">onDemandBurstingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.secureVmDiskEncryptionSetIdInput">secureVmDiskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.securityTypeInput">securityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceResourceIdInput">sourceResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceUriInput">sourceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.trustedLaunchEnabledInput">trustedLaunchEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.uploadSizeBytesInput">uploadSizeBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.createOption">createOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskAccessId">diskAccessId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadOnly">diskIopsReadOnly</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadWrite">diskIopsReadWrite</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadOnly">diskMbpsReadOnly</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadWrite">diskMbpsReadWrite</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.galleryImageReferenceId">galleryImageReferenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.hyperVGeneration">hyperVGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.imageReferenceId">imageReferenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.logicalSectorSize">logicalSectorSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.maxShares">maxShares</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.networkAccessPolicy">networkAccessPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.onDemandBurstingEnabled">onDemandBurstingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.secureVmDiskEncryptionSetId">secureVmDiskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.securityType">securityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceResourceId">sourceResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceUri">sourceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.trustedLaunchEnabled">trustedLaunchEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.uploadSizeBytes">uploadSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryptionSettings`<sup>Required</sup> <a name="encryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.encryptionSettings"></a>

```java
public ManagedDiskEncryptionSettingsOutputReference getEncryptionSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference">ManagedDiskEncryptionSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.timeouts"></a>

```java
public ManagedDiskTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference">ManagedDiskTimeoutsOutputReference</a>

---

##### `createOptionInput`<sup>Optional</sup> <a name="createOptionInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.createOptionInput"></a>

```java
public java.lang.String getCreateOptionInput();
```

- *Type:* java.lang.String

---

##### `diskAccessIdInput`<sup>Optional</sup> <a name="diskAccessIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskAccessIdInput"></a>

```java
public java.lang.String getDiskAccessIdInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskEncryptionSetIdInput"></a>

```java
public java.lang.String getDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `diskIopsReadOnlyInput`<sup>Optional</sup> <a name="diskIopsReadOnlyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadOnlyInput"></a>

```java
public java.lang.Number getDiskIopsReadOnlyInput();
```

- *Type:* java.lang.Number

---

##### `diskIopsReadWriteInput`<sup>Optional</sup> <a name="diskIopsReadWriteInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadWriteInput"></a>

```java
public java.lang.Number getDiskIopsReadWriteInput();
```

- *Type:* java.lang.Number

---

##### `diskMbpsReadOnlyInput`<sup>Optional</sup> <a name="diskMbpsReadOnlyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadOnlyInput"></a>

```java
public java.lang.Number getDiskMbpsReadOnlyInput();
```

- *Type:* java.lang.Number

---

##### `diskMbpsReadWriteInput`<sup>Optional</sup> <a name="diskMbpsReadWriteInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadWriteInput"></a>

```java
public java.lang.Number getDiskMbpsReadWriteInput();
```

- *Type:* java.lang.Number

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.edgeZoneInput"></a>

```java
public java.lang.String getEdgeZoneInput();
```

- *Type:* java.lang.String

---

##### `encryptionSettingsInput`<sup>Optional</sup> <a name="encryptionSettingsInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.encryptionSettingsInput"></a>

```java
public ManagedDiskEncryptionSettings getEncryptionSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a>

---

##### `galleryImageReferenceIdInput`<sup>Optional</sup> <a name="galleryImageReferenceIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.galleryImageReferenceIdInput"></a>

```java
public java.lang.String getGalleryImageReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `hyperVGenerationInput`<sup>Optional</sup> <a name="hyperVGenerationInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.hyperVGenerationInput"></a>

```java
public java.lang.String getHyperVGenerationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageReferenceIdInput`<sup>Optional</sup> <a name="imageReferenceIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.imageReferenceIdInput"></a>

```java
public java.lang.String getImageReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logicalSectorSizeInput`<sup>Optional</sup> <a name="logicalSectorSizeInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.logicalSectorSizeInput"></a>

```java
public java.lang.Number getLogicalSectorSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxSharesInput`<sup>Optional</sup> <a name="maxSharesInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.maxSharesInput"></a>

```java
public java.lang.Number getMaxSharesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkAccessPolicyInput`<sup>Optional</sup> <a name="networkAccessPolicyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.networkAccessPolicyInput"></a>

```java
public java.lang.String getNetworkAccessPolicyInput();
```

- *Type:* java.lang.String

---

##### `onDemandBurstingEnabledInput`<sup>Optional</sup> <a name="onDemandBurstingEnabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.onDemandBurstingEnabledInput"></a>

```java
public java.lang.Object getOnDemandBurstingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `secureVmDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="secureVmDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.secureVmDiskEncryptionSetIdInput"></a>

```java
public java.lang.String getSecureVmDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `securityTypeInput`<sup>Optional</sup> <a name="securityTypeInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.securityTypeInput"></a>

```java
public java.lang.String getSecurityTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceResourceIdInput`<sup>Optional</sup> <a name="sourceResourceIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceResourceIdInput"></a>

```java
public java.lang.String getSourceResourceIdInput();
```

- *Type:* java.lang.String

---

##### `sourceUriInput`<sup>Optional</sup> <a name="sourceUriInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceUriInput"></a>

```java
public java.lang.String getSourceUriInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `trustedLaunchEnabledInput`<sup>Optional</sup> <a name="trustedLaunchEnabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.trustedLaunchEnabledInput"></a>

```java
public java.lang.Object getTrustedLaunchEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uploadSizeBytesInput`<sup>Optional</sup> <a name="uploadSizeBytesInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.uploadSizeBytesInput"></a>

```java
public java.lang.Number getUploadSizeBytesInput();
```

- *Type:* java.lang.Number

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

---

##### `diskAccessId`<sup>Required</sup> <a name="diskAccessId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskAccessId"></a>

```java
public java.lang.String getDiskAccessId();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `diskIopsReadOnly`<sup>Required</sup> <a name="diskIopsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadOnly"></a>

```java
public java.lang.Number getDiskIopsReadOnly();
```

- *Type:* java.lang.Number

---

##### `diskIopsReadWrite`<sup>Required</sup> <a name="diskIopsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskIopsReadWrite"></a>

```java
public java.lang.Number getDiskIopsReadWrite();
```

- *Type:* java.lang.Number

---

##### `diskMbpsReadOnly`<sup>Required</sup> <a name="diskMbpsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadOnly"></a>

```java
public java.lang.Number getDiskMbpsReadOnly();
```

- *Type:* java.lang.Number

---

##### `diskMbpsReadWrite`<sup>Required</sup> <a name="diskMbpsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskMbpsReadWrite"></a>

```java
public java.lang.Number getDiskMbpsReadWrite();
```

- *Type:* java.lang.Number

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

---

##### `galleryImageReferenceId`<sup>Required</sup> <a name="galleryImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.galleryImageReferenceId"></a>

```java
public java.lang.String getGalleryImageReferenceId();
```

- *Type:* java.lang.String

---

##### `hyperVGeneration`<sup>Required</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.hyperVGeneration"></a>

```java
public java.lang.String getHyperVGeneration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageReferenceId`<sup>Required</sup> <a name="imageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.imageReferenceId"></a>

```java
public java.lang.String getImageReferenceId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `logicalSectorSize`<sup>Required</sup> <a name="logicalSectorSize" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.logicalSectorSize"></a>

```java
public java.lang.Number getLogicalSectorSize();
```

- *Type:* java.lang.Number

---

##### `maxShares`<sup>Required</sup> <a name="maxShares" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.maxShares"></a>

```java
public java.lang.Number getMaxShares();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkAccessPolicy`<sup>Required</sup> <a name="networkAccessPolicy" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.networkAccessPolicy"></a>

```java
public java.lang.String getNetworkAccessPolicy();
```

- *Type:* java.lang.String

---

##### `onDemandBurstingEnabled`<sup>Required</sup> <a name="onDemandBurstingEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.onDemandBurstingEnabled"></a>

```java
public java.lang.Object getOnDemandBurstingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `secureVmDiskEncryptionSetId`<sup>Required</sup> <a name="secureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.secureVmDiskEncryptionSetId"></a>

```java
public java.lang.String getSecureVmDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `securityType`<sup>Required</sup> <a name="securityType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.securityType"></a>

```java
public java.lang.String getSecurityType();
```

- *Type:* java.lang.String

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceResourceId"></a>

```java
public java.lang.String getSourceResourceId();
```

- *Type:* java.lang.String

---

##### `sourceUri`<sup>Required</sup> <a name="sourceUri" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.sourceUri"></a>

```java
public java.lang.String getSourceUri();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `trustedLaunchEnabled`<sup>Required</sup> <a name="trustedLaunchEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.trustedLaunchEnabled"></a>

```java
public java.lang.Object getTrustedLaunchEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uploadSizeBytes`<sup>Required</sup> <a name="uploadSizeBytes" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.uploadSizeBytes"></a>

```java
public java.lang.Number getUploadSizeBytes();
```

- *Type:* java.lang.Number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managedDisk.ManagedDisk.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDiskConfig <a name="ManagedDiskConfig" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDiskConfig;

ManagedDiskConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .createOption(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountType(java.lang.String)
//  .diskAccessId(java.lang.String)
//  .diskEncryptionSetId(java.lang.String)
//  .diskIopsReadOnly(java.lang.Number)
//  .diskIopsReadWrite(java.lang.Number)
//  .diskMbpsReadOnly(java.lang.Number)
//  .diskMbpsReadWrite(java.lang.Number)
//  .diskSizeGb(java.lang.Number)
//  .edgeZone(java.lang.String)
//  .encryptionSettings(ManagedDiskEncryptionSettings)
//  .galleryImageReferenceId(java.lang.String)
//  .hyperVGeneration(java.lang.String)
//  .id(java.lang.String)
//  .imageReferenceId(java.lang.String)
//  .logicalSectorSize(java.lang.Number)
//  .maxShares(java.lang.Number)
//  .networkAccessPolicy(java.lang.String)
//  .onDemandBurstingEnabled(java.lang.Boolean)
//  .onDemandBurstingEnabled(IResolvable)
//  .osType(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .secureVmDiskEncryptionSetId(java.lang.String)
//  .securityType(java.lang.String)
//  .sourceResourceId(java.lang.String)
//  .sourceUri(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tier(java.lang.String)
//  .timeouts(ManagedDiskTimeouts)
//  .trustedLaunchEnabled(java.lang.Boolean)
//  .trustedLaunchEnabled(IResolvable)
//  .uploadSizeBytes(java.lang.Number)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.createOption">createOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#location ManagedDisk#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#name ManagedDisk#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskAccessId">diskAccessId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_access_id ManagedDisk#disk_access_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_encryption_set_id ManagedDisk#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskIopsReadOnly">diskIopsReadOnly</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_iops_read_only ManagedDisk#disk_iops_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskIopsReadWrite">diskIopsReadWrite</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_iops_read_write ManagedDisk#disk_iops_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskMbpsReadOnly">diskMbpsReadOnly</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_mbps_read_only ManagedDisk#disk_mbps_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskMbpsReadWrite">diskMbpsReadWrite</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_mbps_read_write ManagedDisk#disk_mbps_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#edge_zone ManagedDisk#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.encryptionSettings">encryptionSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a></code> | encryption_settings block. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.galleryImageReferenceId">galleryImageReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#gallery_image_reference_id ManagedDisk#gallery_image_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.hyperVGeneration">hyperVGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#id ManagedDisk#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.imageReferenceId">imageReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.logicalSectorSize">logicalSectorSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#logical_sector_size ManagedDisk#logical_sector_size}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.maxShares">maxShares</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#max_shares ManagedDisk#max_shares}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.networkAccessPolicy">networkAccessPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#network_access_policy ManagedDisk#network_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.onDemandBurstingEnabled">onDemandBurstingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#on_demand_bursting_enabled ManagedDisk#on_demand_bursting_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#public_network_access_enabled ManagedDisk#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.secureVmDiskEncryptionSetId">secureVmDiskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#secure_vm_disk_encryption_set_id ManagedDisk#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.securityType">securityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#security_type ManagedDisk#security_type}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.sourceResourceId">sourceResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.sourceUri">sourceUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#tags ManagedDisk#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#tier ManagedDisk#tier}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.trustedLaunchEnabled">trustedLaunchEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#trusted_launch_enabled ManagedDisk#trusted_launch_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.uploadSizeBytes">uploadSizeBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#upload_size_bytes ManagedDisk#upload_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#zone ManagedDisk#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#location ManagedDisk#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#name ManagedDisk#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}.

---

##### `diskAccessId`<sup>Optional</sup> <a name="diskAccessId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskAccessId"></a>

```java
public java.lang.String getDiskAccessId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_access_id ManagedDisk#disk_access_id}.

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_encryption_set_id ManagedDisk#disk_encryption_set_id}.

---

##### `diskIopsReadOnly`<sup>Optional</sup> <a name="diskIopsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskIopsReadOnly"></a>

```java
public java.lang.Number getDiskIopsReadOnly();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_iops_read_only ManagedDisk#disk_iops_read_only}.

---

##### `diskIopsReadWrite`<sup>Optional</sup> <a name="diskIopsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskIopsReadWrite"></a>

```java
public java.lang.Number getDiskIopsReadWrite();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_iops_read_write ManagedDisk#disk_iops_read_write}.

---

##### `diskMbpsReadOnly`<sup>Optional</sup> <a name="diskMbpsReadOnly" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskMbpsReadOnly"></a>

```java
public java.lang.Number getDiskMbpsReadOnly();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_mbps_read_only ManagedDisk#disk_mbps_read_only}.

---

##### `diskMbpsReadWrite`<sup>Optional</sup> <a name="diskMbpsReadWrite" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskMbpsReadWrite"></a>

```java
public java.lang.Number getDiskMbpsReadWrite();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_mbps_read_write ManagedDisk#disk_mbps_read_write}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#edge_zone ManagedDisk#edge_zone}.

---

##### `encryptionSettings`<sup>Optional</sup> <a name="encryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.encryptionSettings"></a>

```java
public ManagedDiskEncryptionSettings getEncryptionSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a>

encryption_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#encryption_settings ManagedDisk#encryption_settings}

---

##### `galleryImageReferenceId`<sup>Optional</sup> <a name="galleryImageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.galleryImageReferenceId"></a>

```java
public java.lang.String getGalleryImageReferenceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#gallery_image_reference_id ManagedDisk#gallery_image_reference_id}.

---

##### `hyperVGeneration`<sup>Optional</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.hyperVGeneration"></a>

```java
public java.lang.String getHyperVGeneration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#id ManagedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageReferenceId`<sup>Optional</sup> <a name="imageReferenceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.imageReferenceId"></a>

```java
public java.lang.String getImageReferenceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}.

---

##### `logicalSectorSize`<sup>Optional</sup> <a name="logicalSectorSize" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.logicalSectorSize"></a>

```java
public java.lang.Number getLogicalSectorSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#logical_sector_size ManagedDisk#logical_sector_size}.

---

##### `maxShares`<sup>Optional</sup> <a name="maxShares" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.maxShares"></a>

```java
public java.lang.Number getMaxShares();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#max_shares ManagedDisk#max_shares}.

---

##### `networkAccessPolicy`<sup>Optional</sup> <a name="networkAccessPolicy" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.networkAccessPolicy"></a>

```java
public java.lang.String getNetworkAccessPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#network_access_policy ManagedDisk#network_access_policy}.

---

##### `onDemandBurstingEnabled`<sup>Optional</sup> <a name="onDemandBurstingEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.onDemandBurstingEnabled"></a>

```java
public java.lang.Object getOnDemandBurstingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#on_demand_bursting_enabled ManagedDisk#on_demand_bursting_enabled}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#public_network_access_enabled ManagedDisk#public_network_access_enabled}.

---

##### `secureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="secureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.secureVmDiskEncryptionSetId"></a>

```java
public java.lang.String getSecureVmDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#secure_vm_disk_encryption_set_id ManagedDisk#secure_vm_disk_encryption_set_id}.

---

##### `securityType`<sup>Optional</sup> <a name="securityType" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.securityType"></a>

```java
public java.lang.String getSecurityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#security_type ManagedDisk#security_type}.

---

##### `sourceResourceId`<sup>Optional</sup> <a name="sourceResourceId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.sourceResourceId"></a>

```java
public java.lang.String getSourceResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}.

---

##### `sourceUri`<sup>Optional</sup> <a name="sourceUri" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.sourceUri"></a>

```java
public java.lang.String getSourceUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#tags ManagedDisk#tags}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#tier ManagedDisk#tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.timeouts"></a>

```java
public ManagedDiskTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#timeouts ManagedDisk#timeouts}

---

##### `trustedLaunchEnabled`<sup>Optional</sup> <a name="trustedLaunchEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.trustedLaunchEnabled"></a>

```java
public java.lang.Object getTrustedLaunchEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#trusted_launch_enabled ManagedDisk#trusted_launch_enabled}.

---

##### `uploadSizeBytes`<sup>Optional</sup> <a name="uploadSizeBytes" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.uploadSizeBytes"></a>

```java
public java.lang.Number getUploadSizeBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#upload_size_bytes ManagedDisk#upload_size_bytes}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#zone ManagedDisk#zone}.

---

### ManagedDiskEncryptionSettings <a name="ManagedDiskEncryptionSettings" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDiskEncryptionSettings;

ManagedDiskEncryptionSettings.builder()
//  .diskEncryptionKey(ManagedDiskEncryptionSettingsDiskEncryptionKey)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .keyEncryptionKey(ManagedDiskEncryptionSettingsKeyEncryptionKey)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#enabled ManagedDisk#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.keyEncryptionKey">keyEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a></code> | key_encryption_key block. |

---

##### `diskEncryptionKey`<sup>Optional</sup> <a name="diskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.diskEncryptionKey"></a>

```java
public ManagedDiskEncryptionSettingsDiskEncryptionKey getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#disk_encryption_key ManagedDisk#disk_encryption_key}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#enabled ManagedDisk#enabled}.

---

##### `keyEncryptionKey`<sup>Optional</sup> <a name="keyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings.property.keyEncryptionKey"></a>

```java
public ManagedDiskEncryptionSettingsKeyEncryptionKey getKeyEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a>

key_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#key_encryption_key ManagedDisk#key_encryption_key}

---

### ManagedDiskEncryptionSettingsDiskEncryptionKey <a name="ManagedDiskEncryptionSettingsDiskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDiskEncryptionSettingsDiskEncryptionKey;

ManagedDiskEncryptionSettingsDiskEncryptionKey.builder()
    .secretUrl(java.lang.String)
    .sourceVaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.property.secretUrl">secretUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#secret_url ManagedDisk#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}. |

---

##### `secretUrl`<sup>Required</sup> <a name="secretUrl" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.property.secretUrl"></a>

```java
public java.lang.String getSecretUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#secret_url ManagedDisk#secret_url}.

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}.

---

### ManagedDiskEncryptionSettingsKeyEncryptionKey <a name="ManagedDiskEncryptionSettingsKeyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDiskEncryptionSettingsKeyEncryptionKey;

ManagedDiskEncryptionSettingsKeyEncryptionKey.builder()
    .keyUrl(java.lang.String)
    .sourceVaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.property.keyUrl">keyUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#key_url ManagedDisk#key_url}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}. |

---

##### `keyUrl`<sup>Required</sup> <a name="keyUrl" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.property.keyUrl"></a>

```java
public java.lang.String getKeyUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#key_url ManagedDisk#key_url}.

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}.

---

### ManagedDiskTimeouts <a name="ManagedDiskTimeouts" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDiskTimeouts;

ManagedDiskTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#create ManagedDisk#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#delete ManagedDisk#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#read ManagedDisk#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#update ManagedDisk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#create ManagedDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#delete ManagedDisk#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#read ManagedDisk#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/managed_disk#update ManagedDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference <a name="ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference;

new ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrlInput">secretUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultIdInput">sourceVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrl">secretUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretUrlInput`<sup>Optional</sup> <a name="secretUrlInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrlInput"></a>

```java
public java.lang.String getSecretUrlInput();
```

- *Type:* java.lang.String

---

##### `sourceVaultIdInput`<sup>Optional</sup> <a name="sourceVaultIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```java
public java.lang.String getSourceVaultIdInput();
```

- *Type:* java.lang.String

---

##### `secretUrl`<sup>Required</sup> <a name="secretUrl" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrl"></a>

```java
public java.lang.String getSecretUrl();
```

- *Type:* java.lang.String

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ManagedDiskEncryptionSettingsDiskEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a>

---


### ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference <a name="ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference;

new ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrlInput">keyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultIdInput">sourceVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrl">keyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyUrlInput`<sup>Optional</sup> <a name="keyUrlInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrlInput"></a>

```java
public java.lang.String getKeyUrlInput();
```

- *Type:* java.lang.String

---

##### `sourceVaultIdInput`<sup>Optional</sup> <a name="sourceVaultIdInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```java
public java.lang.String getSourceVaultIdInput();
```

- *Type:* java.lang.String

---

##### `keyUrl`<sup>Required</sup> <a name="keyUrl" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrl"></a>

```java
public java.lang.String getKeyUrl();
```

- *Type:* java.lang.String

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ManagedDiskEncryptionSettingsKeyEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a>

---


### ManagedDiskEncryptionSettingsOutputReference <a name="ManagedDiskEncryptionSettingsOutputReference" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDiskEncryptionSettingsOutputReference;

new ManagedDiskEncryptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putDiskEncryptionKey">putDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putKeyEncryptionKey">putKeyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetDiskEncryptionKey">resetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetKeyEncryptionKey">resetKeyEncryptionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskEncryptionKey` <a name="putDiskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putDiskEncryptionKey"></a>

```java
public void putDiskEncryptionKey(ManagedDiskEncryptionSettingsDiskEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a>

---

##### `putKeyEncryptionKey` <a name="putKeyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putKeyEncryptionKey"></a>

```java
public void putKeyEncryptionKey(ManagedDiskEncryptionSettingsKeyEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.putKeyEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a>

---

##### `resetDiskEncryptionKey` <a name="resetDiskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetDiskEncryptionKey"></a>

```java
public void resetDiskEncryptionKey()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetKeyEncryptionKey` <a name="resetKeyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.resetKeyEncryptionKey"></a>

```java
public void resetKeyEncryptionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference">ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKey">keyEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference">ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKeyInput">diskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKeyInput">keyEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKey"></a>

```java
public ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference">ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference</a>

---

##### `keyEncryptionKey`<sup>Required</sup> <a name="keyEncryptionKey" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKey"></a>

```java
public ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference getKeyEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference">ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference</a>

---

##### `diskEncryptionKeyInput`<sup>Optional</sup> <a name="diskEncryptionKeyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKeyInput"></a>

```java
public ManagedDiskEncryptionSettingsDiskEncryptionKey getDiskEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsDiskEncryptionKey">ManagedDiskEncryptionSettingsDiskEncryptionKey</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyEncryptionKeyInput`<sup>Optional</sup> <a name="keyEncryptionKeyInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKeyInput"></a>

```java
public ManagedDiskEncryptionSettingsKeyEncryptionKey getKeyEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsKeyEncryptionKey">ManagedDiskEncryptionSettingsKeyEncryptionKey</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettingsOutputReference.property.internalValue"></a>

```java
public ManagedDiskEncryptionSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskEncryptionSettings">ManagedDiskEncryptionSettings</a>

---


### ManagedDiskTimeoutsOutputReference <a name="ManagedDiskTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_disk.ManagedDiskTimeoutsOutputReference;

new ManagedDiskTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedDisk.ManagedDiskTimeouts">ManagedDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



