# `sharedImageVersion` Submodule <a name="`sharedImageVersion` Submodule" id="@cdktf/provider-azurerm.sharedImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImageVersion <a name="SharedImageVersion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version azurerm_shared_image_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_name: str,
  image_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  target_region: typing.Union[IResolvable, typing.List[SharedImageVersionTargetRegion]],
  blob_uri: str = None,
  deletion_of_replicated_locations_enabled: typing.Union[bool, IResolvable] = None,
  end_of_life_date: str = None,
  exclude_from_latest: typing.Union[bool, IResolvable] = None,
  id: str = None,
  managed_image_id: str = None,
  os_disk_snapshot_id: str = None,
  replication_mode: str = None,
  storage_account_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SharedImageVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.galleryName">gallery_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#location SharedImageVersion#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.targetRegion">target_region</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]]</code> | target_region block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.blobUri">blob_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.deletionOfReplicatedLocationsEnabled">deletion_of_replicated_locations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.endOfLifeDate">end_of_life_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.excludeFromLatest">exclude_from_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#id SharedImageVersion#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.managedImageId">managed_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.osDiskSnapshotId">os_disk_snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.replicationMode">replication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#tags SharedImageVersion#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.galleryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#location SharedImageVersion#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}.

---

##### `target_region`<sup>Required</sup> <a name="target_region" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.targetRegion"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]]

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#target_region SharedImageVersion#target_region}

---

##### `blob_uri`<sup>Optional</sup> <a name="blob_uri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.blobUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}.

---

##### `deletion_of_replicated_locations_enabled`<sup>Optional</sup> <a name="deletion_of_replicated_locations_enabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.deletionOfReplicatedLocationsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}.

---

##### `end_of_life_date`<sup>Optional</sup> <a name="end_of_life_date" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.endOfLifeDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}.

---

##### `exclude_from_latest`<sup>Optional</sup> <a name="exclude_from_latest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.excludeFromLatest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#id SharedImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_image_id`<sup>Optional</sup> <a name="managed_image_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.managedImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}.

---

##### `os_disk_snapshot_id`<sup>Optional</sup> <a name="os_disk_snapshot_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.osDiskSnapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}.

---

##### `replication_mode`<sup>Optional</sup> <a name="replication_mode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.replicationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}.

---

##### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#tags SharedImageVersion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#timeouts SharedImageVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion">put_target_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri">reset_blob_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled">reset_deletion_of_replicated_locations_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate">reset_end_of_life_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest">reset_exclude_from_latest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId">reset_managed_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId">reset_os_disk_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode">reset_replication_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId">reset_storage_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_target_region` <a name="put_target_region" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion"></a>

```python
def put_target_region(
  value: typing.Union[IResolvable, typing.List[SharedImageVersionTargetRegion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#create SharedImageVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#delete SharedImageVersion#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#read SharedImageVersion#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#update SharedImageVersion#update}.

---

##### `reset_blob_uri` <a name="reset_blob_uri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri"></a>

```python
def reset_blob_uri() -> None
```

##### `reset_deletion_of_replicated_locations_enabled` <a name="reset_deletion_of_replicated_locations_enabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled"></a>

```python
def reset_deletion_of_replicated_locations_enabled() -> None
```

##### `reset_end_of_life_date` <a name="reset_end_of_life_date" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate"></a>

```python
def reset_end_of_life_date() -> None
```

##### `reset_exclude_from_latest` <a name="reset_exclude_from_latest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest"></a>

```python
def reset_exclude_from_latest() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_image_id` <a name="reset_managed_image_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId"></a>

```python
def reset_managed_image_id() -> None
```

##### `reset_os_disk_snapshot_id` <a name="reset_os_disk_snapshot_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId"></a>

```python
def reset_os_disk_snapshot_id() -> None
```

##### `reset_replication_mode` <a name="reset_replication_mode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode"></a>

```python
def reset_replication_mode() -> None
```

##### `reset_storage_account_id` <a name="reset_storage_account_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId"></a>

```python
def reset_storage_account_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SharedImageVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersion.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SharedImageVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SharedImageVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SharedImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharedImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion">target_region</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput">blob_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput">deletion_of_replicated_locations_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput">end_of_life_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput">exclude_from_latest_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput">gallery_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput">managed_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput">os_disk_snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput">replication_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput">target_region_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri">blob_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled">deletion_of_replicated_locations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate">end_of_life_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest">exclude_from_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName">gallery_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId">managed_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId">os_disk_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode">replication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_region`<sup>Required</sup> <a name="target_region" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion"></a>

```python
target_region: SharedImageVersionTargetRegionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts"></a>

```python
timeouts: SharedImageVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a>

---

##### `blob_uri_input`<sup>Optional</sup> <a name="blob_uri_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput"></a>

```python
blob_uri_input: str
```

- *Type:* str

---

##### `deletion_of_replicated_locations_enabled_input`<sup>Optional</sup> <a name="deletion_of_replicated_locations_enabled_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput"></a>

```python
deletion_of_replicated_locations_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `end_of_life_date_input`<sup>Optional</sup> <a name="end_of_life_date_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput"></a>

```python
end_of_life_date_input: str
```

- *Type:* str

---

##### `exclude_from_latest_input`<sup>Optional</sup> <a name="exclude_from_latest_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput"></a>

```python
exclude_from_latest_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gallery_name_input`<sup>Optional</sup> <a name="gallery_name_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput"></a>

```python
gallery_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_image_id_input`<sup>Optional</sup> <a name="managed_image_id_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput"></a>

```python
managed_image_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_disk_snapshot_id_input`<sup>Optional</sup> <a name="os_disk_snapshot_id_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput"></a>

```python
os_disk_snapshot_id_input: str
```

- *Type:* str

---

##### `replication_mode_input`<sup>Optional</sup> <a name="replication_mode_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput"></a>

```python
replication_mode_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_region_input`<sup>Optional</sup> <a name="target_region_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput"></a>

```python
target_region_input: typing.Union[IResolvable, typing.List[SharedImageVersionTargetRegion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SharedImageVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>]

---

##### `blob_uri`<sup>Required</sup> <a name="blob_uri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri"></a>

```python
blob_uri: str
```

- *Type:* str

---

##### `deletion_of_replicated_locations_enabled`<sup>Required</sup> <a name="deletion_of_replicated_locations_enabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled"></a>

```python
deletion_of_replicated_locations_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `end_of_life_date`<sup>Required</sup> <a name="end_of_life_date" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate"></a>

```python
end_of_life_date: str
```

- *Type:* str

---

##### `exclude_from_latest`<sup>Required</sup> <a name="exclude_from_latest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest"></a>

```python
exclude_from_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_image_id`<sup>Required</sup> <a name="managed_image_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId"></a>

```python
managed_image_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_disk_snapshot_id`<sup>Required</sup> <a name="os_disk_snapshot_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId"></a>

```python
os_disk_snapshot_id: str
```

- *Type:* str

---

##### `replication_mode`<sup>Required</sup> <a name="replication_mode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode"></a>

```python
replication_mode: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageVersionConfig <a name="SharedImageVersionConfig" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_name: str,
  image_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  target_region: typing.Union[IResolvable, typing.List[SharedImageVersionTargetRegion]],
  blob_uri: str = None,
  deletion_of_replicated_locations_enabled: typing.Union[bool, IResolvable] = None,
  end_of_life_date: str = None,
  exclude_from_latest: typing.Union[bool, IResolvable] = None,
  id: str = None,
  managed_image_id: str = None,
  os_disk_snapshot_id: str = None,
  replication_mode: str = None,
  storage_account_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SharedImageVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName">gallery_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#location SharedImageVersion#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion">target_region</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]]</code> | target_region block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri">blob_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled">deletion_of_replicated_locations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate">end_of_life_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest">exclude_from_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#id SharedImageVersion#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId">managed_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId">os_disk_snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode">replication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#tags SharedImageVersion#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#location SharedImageVersion#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}.

---

##### `target_region`<sup>Required</sup> <a name="target_region" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion"></a>

```python
target_region: typing.Union[IResolvable, typing.List[SharedImageVersionTargetRegion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]]

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#target_region SharedImageVersion#target_region}

---

##### `blob_uri`<sup>Optional</sup> <a name="blob_uri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri"></a>

```python
blob_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}.

---

##### `deletion_of_replicated_locations_enabled`<sup>Optional</sup> <a name="deletion_of_replicated_locations_enabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled"></a>

```python
deletion_of_replicated_locations_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}.

---

##### `end_of_life_date`<sup>Optional</sup> <a name="end_of_life_date" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate"></a>

```python
end_of_life_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}.

---

##### `exclude_from_latest`<sup>Optional</sup> <a name="exclude_from_latest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest"></a>

```python
exclude_from_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#id SharedImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_image_id`<sup>Optional</sup> <a name="managed_image_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId"></a>

```python
managed_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}.

---

##### `os_disk_snapshot_id`<sup>Optional</sup> <a name="os_disk_snapshot_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId"></a>

```python
os_disk_snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}.

---

##### `replication_mode`<sup>Optional</sup> <a name="replication_mode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode"></a>

```python
replication_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}.

---

##### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#tags SharedImageVersion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts"></a>

```python
timeouts: SharedImageVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#timeouts SharedImageVersion#timeouts}

---

### SharedImageVersionTargetRegion <a name="SharedImageVersionTargetRegion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersionTargetRegion(
  name: str,
  regional_replica_count: typing.Union[int, float],
  disk_encryption_set_id: str = None,
  exclude_from_latest_enabled: typing.Union[bool, IResolvable] = None,
  storage_account_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount">regional_replica_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled">exclude_from_latest_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `regional_replica_count`<sup>Required</sup> <a name="regional_replica_count" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount"></a>

```python
regional_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}.

---

##### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}.

---

##### `exclude_from_latest_enabled`<sup>Optional</sup> <a name="exclude_from_latest_enabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled"></a>

```python
exclude_from_latest_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}.

---

##### `storage_account_type`<sup>Optional</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}.

---

### SharedImageVersionTimeouts <a name="SharedImageVersionTimeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#create SharedImageVersion#create}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#delete SharedImageVersion#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#read SharedImageVersion#read}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#update SharedImageVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#create SharedImageVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#delete SharedImageVersion#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#read SharedImageVersion#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/shared_image_version#update SharedImageVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageVersionTargetRegionList <a name="SharedImageVersionTargetRegionList" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersionTargetRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SharedImageVersionTargetRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SharedImageVersionTargetRegion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]]

---


### SharedImageVersionTargetRegionOutputReference <a name="SharedImageVersionTargetRegionOutputReference" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersionTargetRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId">reset_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled">reset_exclude_from_latest_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType">reset_storage_account_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_encryption_set_id` <a name="reset_disk_encryption_set_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId"></a>

```python
def reset_disk_encryption_set_id() -> None
```

##### `reset_exclude_from_latest_enabled` <a name="reset_exclude_from_latest_enabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled"></a>

```python
def reset_exclude_from_latest_enabled() -> None
```

##### `reset_storage_account_type` <a name="reset_storage_account_type" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```python
def reset_storage_account_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput">disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput">exclude_from_latest_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput">regional_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput">storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled">exclude_from_latest_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount">regional_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_set_id_input`<sup>Optional</sup> <a name="disk_encryption_set_id_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput"></a>

```python
disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `exclude_from_latest_enabled_input`<sup>Optional</sup> <a name="exclude_from_latest_enabled_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput"></a>

```python
exclude_from_latest_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regional_replica_count_input`<sup>Optional</sup> <a name="regional_replica_count_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```python
regional_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type_input`<sup>Optional</sup> <a name="storage_account_type_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```python
storage_account_type_input: str
```

- *Type:* str

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `exclude_from_latest_enabled`<sup>Required</sup> <a name="exclude_from_latest_enabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled"></a>

```python
exclude_from_latest_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regional_replica_count`<sup>Required</sup> <a name="regional_replica_count" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```python
regional_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SharedImageVersionTargetRegion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>]

---


### SharedImageVersionTimeoutsOutputReference <a name="SharedImageVersionTimeoutsOutputReference" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_version

sharedImageVersion.SharedImageVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SharedImageVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>]

---



