# `storageSyncServerEndpoint` Submodule <a name="`storageSyncServerEndpoint` Submodule" id="@cdktf/provider-azurerm.storageSyncServerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageSyncServerEndpoint <a name="StorageSyncServerEndpoint" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint azurerm_storage_sync_server_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_sync_server_endpoint

storageSyncServerEndpoint.StorageSyncServerEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  registered_server_id: str,
  server_local_path: str,
  storage_sync_group_id: str,
  cloud_tiering_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  initial_download_policy: str = None,
  local_cache_mode: str = None,
  tier_files_older_than_days: typing.Union[int, float] = None,
  timeouts: StorageSyncServerEndpointTimeouts = None,
  volume_free_space_percent: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.registeredServerId">registered_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.serverLocalPath">server_local_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.storageSyncGroupId">storage_sync_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.cloudTieringEnabled">cloud_tiering_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.initialDownloadPolicy">initial_download_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.localCacheMode">local_cache_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.tierFilesOlderThanDays">tier_files_older_than_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.volumeFreeSpacePercent">volume_free_space_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}.

---

##### `registered_server_id`<sup>Required</sup> <a name="registered_server_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.registeredServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}.

---

##### `server_local_path`<sup>Required</sup> <a name="server_local_path" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.serverLocalPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}.

---

##### `storage_sync_group_id`<sup>Required</sup> <a name="storage_sync_group_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.storageSyncGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}.

---

##### `cloud_tiering_enabled`<sup>Optional</sup> <a name="cloud_tiering_enabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.cloudTieringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_download_policy`<sup>Optional</sup> <a name="initial_download_policy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.initialDownloadPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}.

---

##### `local_cache_mode`<sup>Optional</sup> <a name="local_cache_mode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.localCacheMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}.

---

##### `tier_files_older_than_days`<sup>Optional</sup> <a name="tier_files_older_than_days" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.tierFilesOlderThanDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#timeouts StorageSyncServerEndpoint#timeouts}

---

##### `volume_free_space_percent`<sup>Optional</sup> <a name="volume_free_space_percent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.volumeFreeSpacePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetCloudTieringEnabled">reset_cloud_tiering_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetInitialDownloadPolicy">reset_initial_download_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetLocalCacheMode">reset_local_cache_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTierFilesOlderThanDays">reset_tier_files_older_than_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetVolumeFreeSpacePercent">reset_volume_free_space_percent</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}.

---

##### `reset_cloud_tiering_enabled` <a name="reset_cloud_tiering_enabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetCloudTieringEnabled"></a>

```python
def reset_cloud_tiering_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_download_policy` <a name="reset_initial_download_policy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetInitialDownloadPolicy"></a>

```python
def reset_initial_download_policy() -> None
```

##### `reset_local_cache_mode` <a name="reset_local_cache_mode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetLocalCacheMode"></a>

```python
def reset_local_cache_mode() -> None
```

##### `reset_tier_files_older_than_days` <a name="reset_tier_files_older_than_days" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTierFilesOlderThanDays"></a>

```python
def reset_tier_files_older_than_days() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_volume_free_space_percent` <a name="reset_volume_free_space_percent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetVolumeFreeSpacePercent"></a>

```python
def reset_volume_free_space_percent() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageSyncServerEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_sync_server_endpoint

storageSyncServerEndpoint.StorageSyncServerEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_sync_server_endpoint

storageSyncServerEndpoint.StorageSyncServerEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_sync_server_endpoint

storageSyncServerEndpoint.StorageSyncServerEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_sync_server_endpoint

storageSyncServerEndpoint.StorageSyncServerEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageSyncServerEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageSyncServerEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageSyncServerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageSyncServerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference">StorageSyncServerEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabledInput">cloud_tiering_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicyInput">initial_download_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheModeInput">local_cache_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerIdInput">registered_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPathInput">server_local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupIdInput">storage_sync_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDaysInput">tier_files_older_than_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercentInput">volume_free_space_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabled">cloud_tiering_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicy">initial_download_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheMode">local_cache_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerId">registered_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPath">server_local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupId">storage_sync_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDays">tier_files_older_than_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercent">volume_free_space_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeouts"></a>

```python
timeouts: StorageSyncServerEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference">StorageSyncServerEndpointTimeoutsOutputReference</a>

---

##### `cloud_tiering_enabled_input`<sup>Optional</sup> <a name="cloud_tiering_enabled_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabledInput"></a>

```python
cloud_tiering_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_download_policy_input`<sup>Optional</sup> <a name="initial_download_policy_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicyInput"></a>

```python
initial_download_policy_input: str
```

- *Type:* str

---

##### `local_cache_mode_input`<sup>Optional</sup> <a name="local_cache_mode_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheModeInput"></a>

```python
local_cache_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `registered_server_id_input`<sup>Optional</sup> <a name="registered_server_id_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerIdInput"></a>

```python
registered_server_id_input: str
```

- *Type:* str

---

##### `server_local_path_input`<sup>Optional</sup> <a name="server_local_path_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPathInput"></a>

```python
server_local_path_input: str
```

- *Type:* str

---

##### `storage_sync_group_id_input`<sup>Optional</sup> <a name="storage_sync_group_id_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupIdInput"></a>

```python
storage_sync_group_id_input: str
```

- *Type:* str

---

##### `tier_files_older_than_days_input`<sup>Optional</sup> <a name="tier_files_older_than_days_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDaysInput"></a>

```python
tier_files_older_than_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageSyncServerEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>]

---

##### `volume_free_space_percent_input`<sup>Optional</sup> <a name="volume_free_space_percent_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercentInput"></a>

```python
volume_free_space_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_tiering_enabled`<sup>Required</sup> <a name="cloud_tiering_enabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabled"></a>

```python
cloud_tiering_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_download_policy`<sup>Required</sup> <a name="initial_download_policy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicy"></a>

```python
initial_download_policy: str
```

- *Type:* str

---

##### `local_cache_mode`<sup>Required</sup> <a name="local_cache_mode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheMode"></a>

```python
local_cache_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `registered_server_id`<sup>Required</sup> <a name="registered_server_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerId"></a>

```python
registered_server_id: str
```

- *Type:* str

---

##### `server_local_path`<sup>Required</sup> <a name="server_local_path" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPath"></a>

```python
server_local_path: str
```

- *Type:* str

---

##### `storage_sync_group_id`<sup>Required</sup> <a name="storage_sync_group_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupId"></a>

```python
storage_sync_group_id: str
```

- *Type:* str

---

##### `tier_files_older_than_days`<sup>Required</sup> <a name="tier_files_older_than_days" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDays"></a>

```python
tier_files_older_than_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_free_space_percent`<sup>Required</sup> <a name="volume_free_space_percent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercent"></a>

```python
volume_free_space_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageSyncServerEndpointConfig <a name="StorageSyncServerEndpointConfig" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_sync_server_endpoint

storageSyncServerEndpoint.StorageSyncServerEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  registered_server_id: str,
  server_local_path: str,
  storage_sync_group_id: str,
  cloud_tiering_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  initial_download_policy: str = None,
  local_cache_mode: str = None,
  tier_files_older_than_days: typing.Union[int, float] = None,
  timeouts: StorageSyncServerEndpointTimeouts = None,
  volume_free_space_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.registeredServerId">registered_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.serverLocalPath">server_local_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.storageSyncGroupId">storage_sync_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.cloudTieringEnabled">cloud_tiering_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.initialDownloadPolicy">initial_download_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.localCacheMode">local_cache_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.tierFilesOlderThanDays">tier_files_older_than_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.volumeFreeSpacePercent">volume_free_space_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}.

---

##### `registered_server_id`<sup>Required</sup> <a name="registered_server_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.registeredServerId"></a>

```python
registered_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}.

---

##### `server_local_path`<sup>Required</sup> <a name="server_local_path" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.serverLocalPath"></a>

```python
server_local_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}.

---

##### `storage_sync_group_id`<sup>Required</sup> <a name="storage_sync_group_id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.storageSyncGroupId"></a>

```python
storage_sync_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}.

---

##### `cloud_tiering_enabled`<sup>Optional</sup> <a name="cloud_tiering_enabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.cloudTieringEnabled"></a>

```python
cloud_tiering_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_download_policy`<sup>Optional</sup> <a name="initial_download_policy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.initialDownloadPolicy"></a>

```python
initial_download_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}.

---

##### `local_cache_mode`<sup>Optional</sup> <a name="local_cache_mode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.localCacheMode"></a>

```python
local_cache_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}.

---

##### `tier_files_older_than_days`<sup>Optional</sup> <a name="tier_files_older_than_days" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.tierFilesOlderThanDays"></a>

```python
tier_files_older_than_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.timeouts"></a>

```python
timeouts: StorageSyncServerEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#timeouts StorageSyncServerEndpoint#timeouts}

---

##### `volume_free_space_percent`<sup>Optional</sup> <a name="volume_free_space_percent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.volumeFreeSpacePercent"></a>

```python
volume_free_space_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}.

---

### StorageSyncServerEndpointTimeouts <a name="StorageSyncServerEndpointTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_sync_server_endpoint

storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageSyncServerEndpointTimeoutsOutputReference <a name="StorageSyncServerEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_sync_server_endpoint

storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageSyncServerEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>]

---



