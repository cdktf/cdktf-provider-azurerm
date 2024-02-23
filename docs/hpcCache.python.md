# `hpcCache` Submodule <a name="`hpcCache` Submodule" id="@cdktf/provider-azurerm.hpcCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCache <a name="HpcCache" id="@cdktf/provider-azurerm.hpcCache.HpcCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache azurerm_hpc_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCache(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cache_size_in_gb: typing.Union[int, float],
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  subnet_id: str,
  automatically_rotate_key_to_latest_enabled: typing.Union[bool, IResolvable] = None,
  default_access_policy: HpcCacheDefaultAccessPolicy = None,
  directory_active_directory: HpcCacheDirectoryActiveDirectory = None,
  directory_flat_file: HpcCacheDirectoryFlatFile = None,
  directory_ldap: HpcCacheDirectoryLdap = None,
  dns: HpcCacheDns = None,
  id: str = None,
  identity: HpcCacheIdentity = None,
  key_vault_key_id: str = None,
  mtu: typing.Union[int, float] = None,
  ntp_server: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: HpcCacheTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.cacheSizeInGb">cache_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#location HpcCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#name HpcCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.automaticallyRotateKeyToLatestEnabled">automatically_rotate_key_to_latest_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.defaultAccessPolicy">default_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | default_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryActiveDirectory">directory_active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | directory_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryFlatFile">directory_flat_file</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | directory_flat_file block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryLdap">directory_ldap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | directory_ldap block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#id HpcCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#mtu HpcCache#mtu}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.ntpServer">ntp_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#tags HpcCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cache_size_in_gb`<sup>Required</sup> <a name="cache_size_in_gb" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.cacheSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#location HpcCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#name HpcCache#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}.

---

##### `automatically_rotate_key_to_latest_enabled`<sup>Optional</sup> <a name="automatically_rotate_key_to_latest_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.automaticallyRotateKeyToLatestEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}.

---

##### `default_access_policy`<sup>Optional</sup> <a name="default_access_policy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.defaultAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

default_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#default_access_policy HpcCache#default_access_policy}

---

##### `directory_active_directory`<sup>Optional</sup> <a name="directory_active_directory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryActiveDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

directory_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#directory_active_directory HpcCache#directory_active_directory}

---

##### `directory_flat_file`<sup>Optional</sup> <a name="directory_flat_file" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryFlatFile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

directory_flat_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#directory_flat_file HpcCache#directory_flat_file}

---

##### `directory_ldap`<sup>Optional</sup> <a name="directory_ldap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryLdap"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

directory_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#directory_ldap HpcCache#directory_ldap}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.dns"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dns HpcCache#dns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#id HpcCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#identity HpcCache#identity}

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#mtu HpcCache#mtu}.

---

##### `ntp_server`<sup>Optional</sup> <a name="ntp_server" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.ntpServer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#tags HpcCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#timeouts HpcCache#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy">put_default_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory">put_directory_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile">put_directory_flat_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap">put_directory_ldap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDns">put_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled">reset_automatically_rotate_key_to_latest_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy">reset_default_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory">reset_directory_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile">reset_directory_flat_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap">reset_directory_ldap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer">reset_ntp_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.hpcCache.HpcCache.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_access_policy` <a name="put_default_access_policy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy"></a>

```python
def put_default_access_policy(
  access_rule: typing.Union[IResolvable, typing.List[HpcCacheDefaultAccessPolicyAccessRule]]
) -> None
```

###### `access_rule`<sup>Required</sup> <a name="access_rule" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy.parameter.accessRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]]

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#access_rule HpcCache#access_rule}

---

##### `put_directory_active_directory` <a name="put_directory_active_directory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory"></a>

```python
def put_directory_active_directory(
  cache_netbios_name: str,
  dns_primary_ip: str,
  domain_name: str,
  domain_netbios_name: str,
  password: str,
  username: str,
  dns_secondary_ip: str = None
) -> None
```

###### `cache_netbios_name`<sup>Required</sup> <a name="cache_netbios_name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.cacheNetbiosName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}.

---

###### `dns_primary_ip`<sup>Required</sup> <a name="dns_primary_ip" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.dnsPrimaryIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}.

---

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}.

---

###### `domain_netbios_name`<sup>Required</sup> <a name="domain_netbios_name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.domainNetbiosName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#password HpcCache#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#username HpcCache#username}.

---

###### `dns_secondary_ip`<sup>Optional</sup> <a name="dns_secondary_ip" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.dnsSecondaryIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}.

---

##### `put_directory_flat_file` <a name="put_directory_flat_file" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile"></a>

```python
def put_directory_flat_file(
  group_file_uri: str,
  password_file_uri: str
) -> None
```

###### `group_file_uri`<sup>Required</sup> <a name="group_file_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile.parameter.groupFileUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}.

---

###### `password_file_uri`<sup>Required</sup> <a name="password_file_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile.parameter.passwordFileUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}.

---

##### `put_directory_ldap` <a name="put_directory_ldap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap"></a>

```python
def put_directory_ldap(
  base_dn: str,
  server: str,
  bind: HpcCacheDirectoryLdapBind = None,
  certificate_validation_uri: str = None,
  download_certificate_automatically: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None
) -> None
```

###### `base_dn`<sup>Required</sup> <a name="base_dn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.baseDn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}.

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#server HpcCache#server}.

---

###### `bind`<sup>Optional</sup> <a name="bind" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.bind"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

bind block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#bind HpcCache#bind}

---

###### `certificate_validation_uri`<sup>Optional</sup> <a name="certificate_validation_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.certificateValidationUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}.

---

###### `download_certificate_automatically`<sup>Optional</sup> <a name="download_certificate_automatically" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.downloadCertificateAutomatically"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}.

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}.

---

##### `put_dns` <a name="put_dns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns"></a>

```python
def put_dns(
  servers: typing.List[str],
  search_domain: str = None
) -> None
```

###### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns.parameter.servers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#servers HpcCache#servers}.

---

###### `search_domain`<sup>Optional</sup> <a name="search_domain" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns.parameter.searchDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#type HpcCache#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#create HpcCache#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#delete HpcCache#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#read HpcCache#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#update HpcCache#update}.

---

##### `reset_automatically_rotate_key_to_latest_enabled` <a name="reset_automatically_rotate_key_to_latest_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled"></a>

```python
def reset_automatically_rotate_key_to_latest_enabled() -> None
```

##### `reset_default_access_policy` <a name="reset_default_access_policy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy"></a>

```python
def reset_default_access_policy() -> None
```

##### `reset_directory_active_directory` <a name="reset_directory_active_directory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory"></a>

```python
def reset_directory_active_directory() -> None
```

##### `reset_directory_flat_file` <a name="reset_directory_flat_file" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile"></a>

```python
def reset_directory_flat_file() -> None
```

##### `reset_directory_ldap` <a name="reset_directory_ldap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap"></a>

```python
def reset_directory_ldap() -> None
```

##### `reset_dns` <a name="reset_dns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_ntp_server` <a name="reset_ntp_server" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer"></a>

```python
def reset_ntp_server() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HpcCache resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCache.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCache.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCache.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCache.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HpcCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HpcCache to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HpcCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HpcCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy">default_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory">directory_active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile">directory_flat_file</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap">directory_ldap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses">mount_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput">automatically_rotate_key_to_latest_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput">cache_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput">default_access_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput">directory_active_directory_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput">directory_flat_file_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput">directory_ldap_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput">dns_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput">ntp_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled">automatically_rotate_key_to_latest_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb">cache_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer">ntp_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_access_policy`<sup>Required</sup> <a name="default_access_policy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy"></a>

```python
default_access_policy: HpcCacheDefaultAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a>

---

##### `directory_active_directory`<sup>Required</sup> <a name="directory_active_directory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory"></a>

```python
directory_active_directory: HpcCacheDirectoryActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a>

---

##### `directory_flat_file`<sup>Required</sup> <a name="directory_flat_file" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile"></a>

```python
directory_flat_file: HpcCacheDirectoryFlatFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a>

---

##### `directory_ldap`<sup>Required</sup> <a name="directory_ldap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap"></a>

```python
directory_ldap: HpcCacheDirectoryLdapOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns"></a>

```python
dns: HpcCacheDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity"></a>

```python
identity: HpcCacheIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a>

---

##### `mount_addresses`<sup>Required</sup> <a name="mount_addresses" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses"></a>

```python
mount_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts"></a>

```python
timeouts: HpcCacheTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a>

---

##### `automatically_rotate_key_to_latest_enabled_input`<sup>Optional</sup> <a name="automatically_rotate_key_to_latest_enabled_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput"></a>

```python
automatically_rotate_key_to_latest_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_size_in_gb_input`<sup>Optional</sup> <a name="cache_size_in_gb_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput"></a>

```python
cache_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_access_policy_input`<sup>Optional</sup> <a name="default_access_policy_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput"></a>

```python
default_access_policy_input: HpcCacheDefaultAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---

##### `directory_active_directory_input`<sup>Optional</sup> <a name="directory_active_directory_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput"></a>

```python
directory_active_directory_input: HpcCacheDirectoryActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---

##### `directory_flat_file_input`<sup>Optional</sup> <a name="directory_flat_file_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput"></a>

```python
directory_flat_file_input: HpcCacheDirectoryFlatFile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---

##### `directory_ldap_input`<sup>Optional</sup> <a name="directory_ldap_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput"></a>

```python
directory_ldap_input: HpcCacheDirectoryLdap
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput"></a>

```python
dns_input: HpcCacheDns
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput"></a>

```python
identity_input: HpcCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ntp_server_input`<sup>Optional</sup> <a name="ntp_server_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput"></a>

```python
ntp_server_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HpcCacheTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>]

---

##### `automatically_rotate_key_to_latest_enabled`<sup>Required</sup> <a name="automatically_rotate_key_to_latest_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled"></a>

```python
automatically_rotate_key_to_latest_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_size_in_gb`<sup>Required</sup> <a name="cache_size_in_gb" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb"></a>

```python
cache_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ntp_server`<sup>Required</sup> <a name="ntp_server" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer"></a>

```python
ntp_server: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheConfig <a name="HpcCacheConfig" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cache_size_in_gb: typing.Union[int, float],
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  subnet_id: str,
  automatically_rotate_key_to_latest_enabled: typing.Union[bool, IResolvable] = None,
  default_access_policy: HpcCacheDefaultAccessPolicy = None,
  directory_active_directory: HpcCacheDirectoryActiveDirectory = None,
  directory_flat_file: HpcCacheDirectoryFlatFile = None,
  directory_ldap: HpcCacheDirectoryLdap = None,
  dns: HpcCacheDns = None,
  id: str = None,
  identity: HpcCacheIdentity = None,
  key_vault_key_id: str = None,
  mtu: typing.Union[int, float] = None,
  ntp_server: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: HpcCacheTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb">cache_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#location HpcCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#name HpcCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled">automatically_rotate_key_to_latest_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy">default_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | default_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory">directory_active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | directory_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile">directory_flat_file</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | directory_flat_file block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap">directory_ldap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | directory_ldap block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#id HpcCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#mtu HpcCache#mtu}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer">ntp_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#tags HpcCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cache_size_in_gb`<sup>Required</sup> <a name="cache_size_in_gb" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb"></a>

```python
cache_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#location HpcCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#name HpcCache#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}.

---

##### `automatically_rotate_key_to_latest_enabled`<sup>Optional</sup> <a name="automatically_rotate_key_to_latest_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled"></a>

```python
automatically_rotate_key_to_latest_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}.

---

##### `default_access_policy`<sup>Optional</sup> <a name="default_access_policy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy"></a>

```python
default_access_policy: HpcCacheDefaultAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

default_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#default_access_policy HpcCache#default_access_policy}

---

##### `directory_active_directory`<sup>Optional</sup> <a name="directory_active_directory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory"></a>

```python
directory_active_directory: HpcCacheDirectoryActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

directory_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#directory_active_directory HpcCache#directory_active_directory}

---

##### `directory_flat_file`<sup>Optional</sup> <a name="directory_flat_file" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile"></a>

```python
directory_flat_file: HpcCacheDirectoryFlatFile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

directory_flat_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#directory_flat_file HpcCache#directory_flat_file}

---

##### `directory_ldap`<sup>Optional</sup> <a name="directory_ldap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap"></a>

```python
directory_ldap: HpcCacheDirectoryLdap
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

directory_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#directory_ldap HpcCache#directory_ldap}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns"></a>

```python
dns: HpcCacheDns
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dns HpcCache#dns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#id HpcCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity"></a>

```python
identity: HpcCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#identity HpcCache#identity}

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#mtu HpcCache#mtu}.

---

##### `ntp_server`<sup>Optional</sup> <a name="ntp_server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer"></a>

```python
ntp_server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#tags HpcCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts"></a>

```python
timeouts: HpcCacheTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#timeouts HpcCache#timeouts}

---

### HpcCacheDefaultAccessPolicy <a name="HpcCacheDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDefaultAccessPolicy(
  access_rule: typing.Union[IResolvable, typing.List[HpcCacheDefaultAccessPolicyAccessRule]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule">access_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]]</code> | access_rule block. |

---

##### `access_rule`<sup>Required</sup> <a name="access_rule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule"></a>

```python
access_rule: typing.Union[IResolvable, typing.List[HpcCacheDefaultAccessPolicyAccessRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]]

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#access_rule HpcCache#access_rule}

---

### HpcCacheDefaultAccessPolicyAccessRule <a name="HpcCacheDefaultAccessPolicyAccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDefaultAccessPolicyAccessRule(
  access: str,
  scope: str,
  anonymous_gid: typing.Union[int, float] = None,
  anonymous_uid: typing.Union[int, float] = None,
  filter: str = None,
  root_squash_enabled: typing.Union[bool, IResolvable] = None,
  submount_access_enabled: typing.Union[bool, IResolvable] = None,
  suid_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access">access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#access HpcCache#access}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#scope HpcCache#scope}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid">anonymous_gid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid">anonymous_uid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#filter HpcCache#filter}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled">root_squash_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled">submount_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled">suid_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access"></a>

```python
access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#access HpcCache#access}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#scope HpcCache#scope}.

---

##### `anonymous_gid`<sup>Optional</sup> <a name="anonymous_gid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid"></a>

```python
anonymous_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}.

---

##### `anonymous_uid`<sup>Optional</sup> <a name="anonymous_uid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid"></a>

```python
anonymous_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#filter HpcCache#filter}.

---

##### `root_squash_enabled`<sup>Optional</sup> <a name="root_squash_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled"></a>

```python
root_squash_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}.

---

##### `submount_access_enabled`<sup>Optional</sup> <a name="submount_access_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled"></a>

```python
submount_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}.

---

##### `suid_enabled`<sup>Optional</sup> <a name="suid_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled"></a>

```python
suid_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}.

---

### HpcCacheDirectoryActiveDirectory <a name="HpcCacheDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDirectoryActiveDirectory(
  cache_netbios_name: str,
  dns_primary_ip: str,
  domain_name: str,
  domain_netbios_name: str,
  password: str,
  username: str,
  dns_secondary_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName">cache_netbios_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp">dns_primary_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName">domain_netbios_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#password HpcCache#password}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#username HpcCache#username}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp">dns_secondary_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}. |

---

##### `cache_netbios_name`<sup>Required</sup> <a name="cache_netbios_name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName"></a>

```python
cache_netbios_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}.

---

##### `dns_primary_ip`<sup>Required</sup> <a name="dns_primary_ip" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp"></a>

```python
dns_primary_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}.

---

##### `domain_netbios_name`<sup>Required</sup> <a name="domain_netbios_name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName"></a>

```python
domain_netbios_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#password HpcCache#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#username HpcCache#username}.

---

##### `dns_secondary_ip`<sup>Optional</sup> <a name="dns_secondary_ip" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp"></a>

```python
dns_secondary_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}.

---

### HpcCacheDirectoryFlatFile <a name="HpcCacheDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDirectoryFlatFile(
  group_file_uri: str,
  password_file_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri">group_file_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri">password_file_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}. |

---

##### `group_file_uri`<sup>Required</sup> <a name="group_file_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri"></a>

```python
group_file_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}.

---

##### `password_file_uri`<sup>Required</sup> <a name="password_file_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri"></a>

```python
password_file_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}.

---

### HpcCacheDirectoryLdap <a name="HpcCacheDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDirectoryLdap(
  base_dn: str,
  server: str,
  bind: HpcCacheDirectoryLdapBind = None,
  certificate_validation_uri: str = None,
  download_certificate_automatically: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn">base_dn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#server HpcCache#server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind">bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | bind block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri">certificate_validation_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically">download_certificate_automatically</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}. |

---

##### `base_dn`<sup>Required</sup> <a name="base_dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn"></a>

```python
base_dn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#server HpcCache#server}.

---

##### `bind`<sup>Optional</sup> <a name="bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind"></a>

```python
bind: HpcCacheDirectoryLdapBind
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

bind block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#bind HpcCache#bind}

---

##### `certificate_validation_uri`<sup>Optional</sup> <a name="certificate_validation_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri"></a>

```python
certificate_validation_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}.

---

##### `download_certificate_automatically`<sup>Optional</sup> <a name="download_certificate_automatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically"></a>

```python
download_certificate_automatically: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}.

---

### HpcCacheDirectoryLdapBind <a name="HpcCacheDirectoryLdapBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDirectoryLdapBind(
  dn: str,
  password: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn">dn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dn HpcCache#dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#password HpcCache#password}. |

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn"></a>

```python
dn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dn HpcCache#dn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#password HpcCache#password}.

---

### HpcCacheDns <a name="HpcCacheDns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDns(
  servers: typing.List[str],
  search_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers">servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#servers HpcCache#servers}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain">search_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}. |

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#servers HpcCache#servers}.

---

##### `search_domain`<sup>Optional</sup> <a name="search_domain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain"></a>

```python
search_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}.

---

### HpcCacheIdentity <a name="HpcCacheIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#type HpcCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#type HpcCache#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}.

---

### HpcCacheTimeouts <a name="HpcCacheTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#create HpcCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#delete HpcCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#read HpcCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#update HpcCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#create HpcCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#delete HpcCache#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#read HpcCache#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#update HpcCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheDefaultAccessPolicyAccessRuleList <a name="HpcCacheDefaultAccessPolicyAccessRuleList" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HpcCacheDefaultAccessPolicyAccessRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HpcCacheDefaultAccessPolicyAccessRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]]

---


### HpcCacheDefaultAccessPolicyAccessRuleOutputReference <a name="HpcCacheDefaultAccessPolicyAccessRuleOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid">reset_anonymous_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid">reset_anonymous_uid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled">reset_root_squash_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled">reset_submount_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled">reset_suid_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_anonymous_gid` <a name="reset_anonymous_gid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid"></a>

```python
def reset_anonymous_gid() -> None
```

##### `reset_anonymous_uid` <a name="reset_anonymous_uid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid"></a>

```python
def reset_anonymous_uid() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_root_squash_enabled` <a name="reset_root_squash_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled"></a>

```python
def reset_root_squash_enabled() -> None
```

##### `reset_submount_access_enabled` <a name="reset_submount_access_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled"></a>

```python
def reset_submount_access_enabled() -> None
```

##### `reset_suid_enabled` <a name="reset_suid_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled"></a>

```python
def reset_suid_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput">anonymous_gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput">anonymous_uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput">root_squash_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput">submount_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput">suid_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid">anonymous_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid">anonymous_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled">root_squash_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled">submount_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled">suid_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `anonymous_gid_input`<sup>Optional</sup> <a name="anonymous_gid_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput"></a>

```python
anonymous_gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anonymous_uid_input`<sup>Optional</sup> <a name="anonymous_uid_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput"></a>

```python
anonymous_uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `root_squash_enabled_input`<sup>Optional</sup> <a name="root_squash_enabled_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput"></a>

```python
root_squash_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `submount_access_enabled_input`<sup>Optional</sup> <a name="submount_access_enabled_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput"></a>

```python
submount_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suid_enabled_input`<sup>Optional</sup> <a name="suid_enabled_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput"></a>

```python
suid_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `anonymous_gid`<sup>Required</sup> <a name="anonymous_gid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid"></a>

```python
anonymous_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anonymous_uid`<sup>Required</sup> <a name="anonymous_uid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid"></a>

```python
anonymous_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `root_squash_enabled`<sup>Required</sup> <a name="root_squash_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled"></a>

```python
root_squash_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `submount_access_enabled`<sup>Required</sup> <a name="submount_access_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled"></a>

```python
submount_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suid_enabled`<sup>Required</sup> <a name="suid_enabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled"></a>

```python
suid_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HpcCacheDefaultAccessPolicyAccessRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]

---


### HpcCacheDefaultAccessPolicyOutputReference <a name="HpcCacheDefaultAccessPolicyOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDefaultAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule">put_access_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_rule` <a name="put_access_rule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule"></a>

```python
def put_access_rule(
  value: typing.Union[IResolvable, typing.List[HpcCacheDefaultAccessPolicyAccessRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule">access_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput">access_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_rule`<sup>Required</sup> <a name="access_rule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule"></a>

```python
access_rule: HpcCacheDefaultAccessPolicyAccessRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a>

---

##### `access_rule_input`<sup>Optional</sup> <a name="access_rule_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput"></a>

```python
access_rule_input: typing.Union[IResolvable, typing.List[HpcCacheDefaultAccessPolicyAccessRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: HpcCacheDefaultAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---


### HpcCacheDirectoryActiveDirectoryOutputReference <a name="HpcCacheDirectoryActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp">reset_dns_secondary_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_secondary_ip` <a name="reset_dns_secondary_ip" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp"></a>

```python
def reset_dns_secondary_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput">cache_netbios_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput">dns_primary_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput">dns_secondary_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput">domain_netbios_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName">cache_netbios_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp">dns_primary_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp">dns_secondary_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName">domain_netbios_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_netbios_name_input`<sup>Optional</sup> <a name="cache_netbios_name_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput"></a>

```python
cache_netbios_name_input: str
```

- *Type:* str

---

##### `dns_primary_ip_input`<sup>Optional</sup> <a name="dns_primary_ip_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput"></a>

```python
dns_primary_ip_input: str
```

- *Type:* str

---

##### `dns_secondary_ip_input`<sup>Optional</sup> <a name="dns_secondary_ip_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput"></a>

```python
dns_secondary_ip_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_netbios_name_input`<sup>Optional</sup> <a name="domain_netbios_name_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput"></a>

```python
domain_netbios_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `cache_netbios_name`<sup>Required</sup> <a name="cache_netbios_name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName"></a>

```python
cache_netbios_name: str
```

- *Type:* str

---

##### `dns_primary_ip`<sup>Required</sup> <a name="dns_primary_ip" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp"></a>

```python
dns_primary_ip: str
```

- *Type:* str

---

##### `dns_secondary_ip`<sup>Required</sup> <a name="dns_secondary_ip" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp"></a>

```python
dns_secondary_ip: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_netbios_name`<sup>Required</sup> <a name="domain_netbios_name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName"></a>

```python
domain_netbios_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: HpcCacheDirectoryActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---


### HpcCacheDirectoryFlatFileOutputReference <a name="HpcCacheDirectoryFlatFileOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDirectoryFlatFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput">group_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput">password_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri">group_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri">password_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_file_uri_input`<sup>Optional</sup> <a name="group_file_uri_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput"></a>

```python
group_file_uri_input: str
```

- *Type:* str

---

##### `password_file_uri_input`<sup>Optional</sup> <a name="password_file_uri_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput"></a>

```python
password_file_uri_input: str
```

- *Type:* str

---

##### `group_file_uri`<sup>Required</sup> <a name="group_file_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri"></a>

```python
group_file_uri: str
```

- *Type:* str

---

##### `password_file_uri`<sup>Required</sup> <a name="password_file_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri"></a>

```python
password_file_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue"></a>

```python
internal_value: HpcCacheDirectoryFlatFile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---


### HpcCacheDirectoryLdapBindOutputReference <a name="HpcCacheDirectoryLdapBindOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDirectoryLdapBindOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput">dn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn">dn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dn_input`<sup>Optional</sup> <a name="dn_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput"></a>

```python
dn_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn"></a>

```python
dn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue"></a>

```python
internal_value: HpcCacheDirectoryLdapBind
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---


### HpcCacheDirectoryLdapOutputReference <a name="HpcCacheDirectoryLdapOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDirectoryLdapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind">put_bind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind">reset_bind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri">reset_certificate_validation_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically">reset_download_certificate_automatically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bind` <a name="put_bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind"></a>

```python
def put_bind(
  dn: str,
  password: str
) -> None
```

###### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind.parameter.dn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#dn HpcCache#dn}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/hpc_cache#password HpcCache#password}.

---

##### `reset_bind` <a name="reset_bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind"></a>

```python
def reset_bind() -> None
```

##### `reset_certificate_validation_uri` <a name="reset_certificate_validation_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri"></a>

```python
def reset_certificate_validation_uri() -> None
```

##### `reset_download_certificate_automatically` <a name="reset_download_certificate_automatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically"></a>

```python
def reset_download_certificate_automatically() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind">bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput">base_dn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput">bind_input</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput">certificate_validation_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput">download_certificate_automatically_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn">base_dn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri">certificate_validation_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically">download_certificate_automatically</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bind`<sup>Required</sup> <a name="bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind"></a>

```python
bind: HpcCacheDirectoryLdapBindOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a>

---

##### `base_dn_input`<sup>Optional</sup> <a name="base_dn_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput"></a>

```python
base_dn_input: str
```

- *Type:* str

---

##### `bind_input`<sup>Optional</sup> <a name="bind_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput"></a>

```python
bind_input: HpcCacheDirectoryLdapBind
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---

##### `certificate_validation_uri_input`<sup>Optional</sup> <a name="certificate_validation_uri_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput"></a>

```python
certificate_validation_uri_input: str
```

- *Type:* str

---

##### `download_certificate_automatically_input`<sup>Optional</sup> <a name="download_certificate_automatically_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput"></a>

```python
download_certificate_automatically_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `base_dn`<sup>Required</sup> <a name="base_dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn"></a>

```python
base_dn: str
```

- *Type:* str

---

##### `certificate_validation_uri`<sup>Required</sup> <a name="certificate_validation_uri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri"></a>

```python
certificate_validation_uri: str
```

- *Type:* str

---

##### `download_certificate_automatically`<sup>Required</sup> <a name="download_certificate_automatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically"></a>

```python
download_certificate_automatically: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue"></a>

```python
internal_value: HpcCacheDirectoryLdap
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---


### HpcCacheDnsOutputReference <a name="HpcCacheDnsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain">reset_search_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_search_domain` <a name="reset_search_domain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain"></a>

```python
def reset_search_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput">search_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput">servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain">search_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers">servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `search_domain_input`<sup>Optional</sup> <a name="search_domain_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput"></a>

```python
search_domain_input: str
```

- *Type:* str

---

##### `servers_input`<sup>Optional</sup> <a name="servers_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput"></a>

```python
servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_domain`<sup>Required</sup> <a name="search_domain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain"></a>

```python
search_domain: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue"></a>

```python
internal_value: HpcCacheDns
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---


### HpcCacheIdentityOutputReference <a name="HpcCacheIdentityOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue"></a>

```python
internal_value: HpcCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---


### HpcCacheTimeoutsOutputReference <a name="HpcCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache

hpcCache.HpcCacheTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HpcCacheTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>]

---



