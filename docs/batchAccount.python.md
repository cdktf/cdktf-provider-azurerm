# `azurerm_batch_account`

Refer to the Terraform Registory for docs: [`azurerm_batch_account`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account).

# `batchAccount` Submodule <a name="`batchAccount` Submodule" id="@cdktf/provider-azurerm.batchAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchAccount <a name="BatchAccount" id="@cdktf/provider-azurerm.batchAccount.BatchAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account azurerm_batch_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  allowed_authentication_modes: typing.List[str] = None,
  encryption: typing.Union[IResolvable, typing.List[BatchAccountEncryption]] = None,
  id: str = None,
  identity: BatchAccountIdentity = None,
  key_vault_reference: BatchAccountKeyVaultReference = None,
  network_profile: BatchAccountNetworkProfile = None,
  pool_allocation_mode: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  storage_account_authentication_mode: str = None,
  storage_account_id: str = None,
  storage_account_node_identity: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BatchAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#location BatchAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#name BatchAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.allowedAuthenticationModes">allowed_authentication_modes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.encryption">encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#encryption BatchAccount#encryption}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#id BatchAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.keyVaultReference">key_vault_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | key_vault_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.poolAllocationMode">pool_allocation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountAuthenticationMode">storage_account_authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountNodeIdentity">storage_account_node_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#tags BatchAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#location BatchAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#name BatchAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}.

---

##### `allowed_authentication_modes`<sup>Optional</sup> <a name="allowed_authentication_modes" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.allowedAuthenticationModes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.encryption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#encryption BatchAccount#encryption}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#id BatchAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#identity BatchAccount#identity}

---

##### `key_vault_reference`<sup>Optional</sup> <a name="key_vault_reference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.keyVaultReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

key_vault_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#key_vault_reference BatchAccount#key_vault_reference}

---

##### `network_profile`<sup>Optional</sup> <a name="network_profile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.networkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#network_profile BatchAccount#network_profile}

---

##### `pool_allocation_mode`<sup>Optional</sup> <a name="pool_allocation_mode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.poolAllocationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}.

---

##### `storage_account_authentication_mode`<sup>Optional</sup> <a name="storage_account_authentication_mode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountAuthenticationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}.

---

##### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}.

---

##### `storage_account_node_identity`<sup>Optional</sup> <a name="storage_account_node_identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountNodeIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#tags BatchAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#timeouts BatchAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference">put_key_vault_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile">put_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetAllowedAuthenticationModes">reset_allowed_authentication_modes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetKeyVaultReference">reset_key_vault_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetNetworkProfile">reset_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPoolAllocationMode">reset_pool_allocation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountAuthenticationMode">reset_storage_account_authentication_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountId">reset_storage_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountNodeIdentity">reset_storage_account_node_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_encryption` <a name="put_encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putEncryption"></a>

```python
def put_encryption(
  value: typing.Union[IResolvable, typing.List[BatchAccountEncryption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putEncryption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#type BatchAccount#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#identity_ids BatchAccount#identity_ids}.

---

##### `put_key_vault_reference` <a name="put_key_vault_reference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference"></a>

```python
def put_key_vault_reference(
  id: str,
  url: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#id BatchAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#url BatchAccount#url}.

---

##### `put_network_profile` <a name="put_network_profile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile"></a>

```python
def put_network_profile(
  account_access: BatchAccountNetworkProfileAccountAccess = None,
  node_management_access: BatchAccountNetworkProfileNodeManagementAccess = None
) -> None
```

###### `account_access`<sup>Optional</sup> <a name="account_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile.parameter.accountAccess"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

account_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#account_access BatchAccount#account_access}

---

###### `node_management_access`<sup>Optional</sup> <a name="node_management_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile.parameter.nodeManagementAccess"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

node_management_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#node_management_access BatchAccount#node_management_access}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#create BatchAccount#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#delete BatchAccount#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#read BatchAccount#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#update BatchAccount#update}.

---

##### `reset_allowed_authentication_modes` <a name="reset_allowed_authentication_modes" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetAllowedAuthenticationModes"></a>

```python
def reset_allowed_authentication_modes() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_key_vault_reference` <a name="reset_key_vault_reference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetKeyVaultReference"></a>

```python
def reset_key_vault_reference() -> None
```

##### `reset_network_profile` <a name="reset_network_profile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetNetworkProfile"></a>

```python
def reset_network_profile() -> None
```

##### `reset_pool_allocation_mode` <a name="reset_pool_allocation_mode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPoolAllocationMode"></a>

```python
def reset_pool_allocation_mode() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_storage_account_authentication_mode` <a name="reset_storage_account_authentication_mode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountAuthenticationMode"></a>

```python
def reset_storage_account_authentication_mode() -> None
```

##### `reset_storage_account_id` <a name="reset_storage_account_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountId"></a>

```python
def reset_storage_account_id() -> None
```

##### `reset_storage_account_node_identity` <a name="reset_storage_account_node_identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountNodeIdentity"></a>

```python
def reset_storage_account_node_identity() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.accountEndpoint">account_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList">BatchAccountEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference">BatchAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReference">key_vault_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference">BatchAccountKeyVaultReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference">BatchAccountNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference">BatchAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModesInput">allowed_authentication_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryptionInput">encryption_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReferenceInput">key_vault_reference_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfileInput">network_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationModeInput">pool_allocation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationModeInput">storage_account_authentication_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentityInput">storage_account_node_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModes">allowed_authentication_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationMode">pool_allocation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationMode">storage_account_authentication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentity">storage_account_node_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_endpoint`<sup>Required</sup> <a name="account_endpoint" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.accountEndpoint"></a>

```python
account_endpoint: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryption"></a>

```python
encryption: BatchAccountEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList">BatchAccountEncryptionList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identity"></a>

```python
identity: BatchAccountIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference">BatchAccountIdentityOutputReference</a>

---

##### `key_vault_reference`<sup>Required</sup> <a name="key_vault_reference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReference"></a>

```python
key_vault_reference: BatchAccountKeyVaultReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference">BatchAccountKeyVaultReferenceOutputReference</a>

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfile"></a>

```python
network_profile: BatchAccountNetworkProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference">BatchAccountNetworkProfileOutputReference</a>

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeouts"></a>

```python
timeouts: BatchAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference">BatchAccountTimeoutsOutputReference</a>

---

##### `allowed_authentication_modes_input`<sup>Optional</sup> <a name="allowed_authentication_modes_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModesInput"></a>

```python
allowed_authentication_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryptionInput"></a>

```python
encryption_input: typing.Union[IResolvable, typing.List[BatchAccountEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identityInput"></a>

```python
identity_input: BatchAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_reference_input`<sup>Optional</sup> <a name="key_vault_reference_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReferenceInput"></a>

```python
key_vault_reference_input: BatchAccountKeyVaultReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_profile_input`<sup>Optional</sup> <a name="network_profile_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfileInput"></a>

```python
network_profile_input: BatchAccountNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

---

##### `pool_allocation_mode_input`<sup>Optional</sup> <a name="pool_allocation_mode_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationModeInput"></a>

```python
pool_allocation_mode_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `storage_account_authentication_mode_input`<sup>Optional</sup> <a name="storage_account_authentication_mode_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationModeInput"></a>

```python
storage_account_authentication_mode_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `storage_account_node_identity_input`<sup>Optional</sup> <a name="storage_account_node_identity_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentityInput"></a>

```python
storage_account_node_identity_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BatchAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>]

---

##### `allowed_authentication_modes`<sup>Required</sup> <a name="allowed_authentication_modes" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModes"></a>

```python
allowed_authentication_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pool_allocation_mode`<sup>Required</sup> <a name="pool_allocation_mode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationMode"></a>

```python
pool_allocation_mode: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_account_authentication_mode`<sup>Required</sup> <a name="storage_account_authentication_mode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationMode"></a>

```python
storage_account_authentication_mode: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `storage_account_node_identity`<sup>Required</sup> <a name="storage_account_node_identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentity"></a>

```python
storage_account_node_identity: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BatchAccountConfig <a name="BatchAccountConfig" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  allowed_authentication_modes: typing.List[str] = None,
  encryption: typing.Union[IResolvable, typing.List[BatchAccountEncryption]] = None,
  id: str = None,
  identity: BatchAccountIdentity = None,
  key_vault_reference: BatchAccountKeyVaultReference = None,
  network_profile: BatchAccountNetworkProfile = None,
  pool_allocation_mode: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  storage_account_authentication_mode: str = None,
  storage_account_id: str = None,
  storage_account_node_identity: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BatchAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#location BatchAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#name BatchAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.allowedAuthenticationModes">allowed_authentication_modes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.encryption">encryption</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#encryption BatchAccount#encryption}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#id BatchAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.keyVaultReference">key_vault_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | key_vault_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.poolAllocationMode">pool_allocation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountAuthenticationMode">storage_account_authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountNodeIdentity">storage_account_node_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#tags BatchAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#location BatchAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#name BatchAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}.

---

##### `allowed_authentication_modes`<sup>Optional</sup> <a name="allowed_authentication_modes" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.allowedAuthenticationModes"></a>

```python
allowed_authentication_modes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.encryption"></a>

```python
encryption: typing.Union[IResolvable, typing.List[BatchAccountEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#encryption BatchAccount#encryption}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#id BatchAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.identity"></a>

```python
identity: BatchAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#identity BatchAccount#identity}

---

##### `key_vault_reference`<sup>Optional</sup> <a name="key_vault_reference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.keyVaultReference"></a>

```python
key_vault_reference: BatchAccountKeyVaultReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

key_vault_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#key_vault_reference BatchAccount#key_vault_reference}

---

##### `network_profile`<sup>Optional</sup> <a name="network_profile" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.networkProfile"></a>

```python
network_profile: BatchAccountNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#network_profile BatchAccount#network_profile}

---

##### `pool_allocation_mode`<sup>Optional</sup> <a name="pool_allocation_mode" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.poolAllocationMode"></a>

```python
pool_allocation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}.

---

##### `storage_account_authentication_mode`<sup>Optional</sup> <a name="storage_account_authentication_mode" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountAuthenticationMode"></a>

```python
storage_account_authentication_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}.

---

##### `storage_account_id`<sup>Optional</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}.

---

##### `storage_account_node_identity`<sup>Optional</sup> <a name="storage_account_node_identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountNodeIdentity"></a>

```python
storage_account_node_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#tags BatchAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.timeouts"></a>

```python
timeouts: BatchAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#timeouts BatchAccount#timeouts}

---

### BatchAccountEncryption <a name="BatchAccountEncryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountEncryption(
  key_vault_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#key_vault_key_id BatchAccount#key_vault_key_id}. |

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#key_vault_key_id BatchAccount#key_vault_key_id}.

---

### BatchAccountIdentity <a name="BatchAccountIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#type BatchAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#identity_ids BatchAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#type BatchAccount#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#identity_ids BatchAccount#identity_ids}.

---

### BatchAccountKeyVaultReference <a name="BatchAccountKeyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountKeyVaultReference(
  id: str,
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#id BatchAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#url BatchAccount#url}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#id BatchAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#url BatchAccount#url}.

---

### BatchAccountNetworkProfile <a name="BatchAccountNetworkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfile(
  account_access: BatchAccountNetworkProfileAccountAccess = None,
  node_management_access: BatchAccountNetworkProfileNodeManagementAccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.accountAccess">account_access</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a></code> | account_access block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.nodeManagementAccess">node_management_access</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a></code> | node_management_access block. |

---

##### `account_access`<sup>Optional</sup> <a name="account_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.accountAccess"></a>

```python
account_access: BatchAccountNetworkProfileAccountAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

account_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#account_access BatchAccount#account_access}

---

##### `node_management_access`<sup>Optional</sup> <a name="node_management_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.nodeManagementAccess"></a>

```python
node_management_access: BatchAccountNetworkProfileNodeManagementAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

node_management_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#node_management_access BatchAccount#node_management_access}

---

### BatchAccountNetworkProfileAccountAccess <a name="BatchAccountNetworkProfileAccountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileAccountAccess(
  default_action: str = None,
  ip_rule: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileAccountAccessIpRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#default_action BatchAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.ipRule">ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]]</code> | ip_rule block. |

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#default_action BatchAccount#default_action}.

---

##### `ip_rule`<sup>Optional</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.ipRule"></a>

```python
ip_rule: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileAccountAccessIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]]

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}

---

### BatchAccountNetworkProfileAccountAccessIpRule <a name="BatchAccountNetworkProfileAccountAccessIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileAccountAccessIpRule(
  ip_range: str,
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.ipRange">ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#action BatchAccount#action}. |

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#action BatchAccount#action}.

---

### BatchAccountNetworkProfileNodeManagementAccess <a name="BatchAccountNetworkProfileNodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileNodeManagementAccess(
  default_action: str = None,
  ip_rule: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileNodeManagementAccessIpRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#default_action BatchAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.ipRule">ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]]</code> | ip_rule block. |

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#default_action BatchAccount#default_action}.

---

##### `ip_rule`<sup>Optional</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.ipRule"></a>

```python
ip_rule: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileNodeManagementAccessIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]]

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}

---

### BatchAccountNetworkProfileNodeManagementAccessIpRule <a name="BatchAccountNetworkProfileNodeManagementAccessIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule(
  ip_range: str,
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.ipRange">ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#action BatchAccount#action}. |

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#action BatchAccount#action}.

---

### BatchAccountTimeouts <a name="BatchAccountTimeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#create BatchAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#delete BatchAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#read BatchAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#update BatchAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#create BatchAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#delete BatchAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#read BatchAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#update BatchAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchAccountEncryptionList <a name="BatchAccountEncryptionList" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchAccountEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchAccountEncryption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]]

---


### BatchAccountEncryptionOutputReference <a name="BatchAccountEncryptionOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchAccountEncryption]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>]

---


### BatchAccountIdentityOutputReference <a name="BatchAccountIdentityOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.internalValue"></a>

```python
internal_value: BatchAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

---


### BatchAccountKeyVaultReferenceOutputReference <a name="BatchAccountKeyVaultReferenceOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountKeyVaultReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.internalValue"></a>

```python
internal_value: BatchAccountKeyVaultReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

---


### BatchAccountNetworkProfileAccountAccessIpRuleList <a name="BatchAccountNetworkProfileAccountAccessIpRuleList" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchAccountNetworkProfileAccountAccessIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileAccountAccessIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]]

---


### BatchAccountNetworkProfileAccountAccessIpRuleOutputReference <a name="BatchAccountNetworkProfileAccountAccessIpRuleOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchAccountNetworkProfileAccountAccessIpRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]

---


### BatchAccountNetworkProfileAccountAccessOutputReference <a name="BatchAccountNetworkProfileAccountAccessOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.putIpRule">put_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetDefaultAction">reset_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetIpRule">reset_ip_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_rule` <a name="put_ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.putIpRule"></a>

```python
def put_ip_rule(
  value: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileAccountAccessIpRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.putIpRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]]

---

##### `reset_default_action` <a name="reset_default_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetDefaultAction"></a>

```python
def reset_default_action() -> None
```

##### `reset_ip_rule` <a name="reset_ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetIpRule"></a>

```python
def reset_ip_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRule">ip_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList">BatchAccountNetworkProfileAccountAccessIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRuleInput">ip_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_rule`<sup>Required</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRule"></a>

```python
ip_rule: BatchAccountNetworkProfileAccountAccessIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList">BatchAccountNetworkProfileAccountAccessIpRuleList</a>

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `ip_rule_input`<sup>Optional</sup> <a name="ip_rule_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRuleInput"></a>

```python
ip_rule_input: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileAccountAccessIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.internalValue"></a>

```python
internal_value: BatchAccountNetworkProfileAccountAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

---


### BatchAccountNetworkProfileNodeManagementAccessIpRuleList <a name="BatchAccountNetworkProfileNodeManagementAccessIpRuleList" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileNodeManagementAccessIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]]

---


### BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference <a name="BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchAccountNetworkProfileNodeManagementAccessIpRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]

---


### BatchAccountNetworkProfileNodeManagementAccessOutputReference <a name="BatchAccountNetworkProfileNodeManagementAccessOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.putIpRule">put_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetDefaultAction">reset_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetIpRule">reset_ip_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_rule` <a name="put_ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.putIpRule"></a>

```python
def put_ip_rule(
  value: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileNodeManagementAccessIpRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.putIpRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]]

---

##### `reset_default_action` <a name="reset_default_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetDefaultAction"></a>

```python
def reset_default_action() -> None
```

##### `reset_ip_rule` <a name="reset_ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetIpRule"></a>

```python
def reset_ip_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRule">ip_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList">BatchAccountNetworkProfileNodeManagementAccessIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRuleInput">ip_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_rule`<sup>Required</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRule"></a>

```python
ip_rule: BatchAccountNetworkProfileNodeManagementAccessIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList">BatchAccountNetworkProfileNodeManagementAccessIpRuleList</a>

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `ip_rule_input`<sup>Optional</sup> <a name="ip_rule_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRuleInput"></a>

```python
ip_rule_input: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileNodeManagementAccessIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.internalValue"></a>

```python
internal_value: BatchAccountNetworkProfileNodeManagementAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

---


### BatchAccountNetworkProfileOutputReference <a name="BatchAccountNetworkProfileOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountNetworkProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess">put_account_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess">put_node_management_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetAccountAccess">reset_account_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetNodeManagementAccess">reset_node_management_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_account_access` <a name="put_account_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess"></a>

```python
def put_account_access(
  default_action: str = None,
  ip_rule: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileAccountAccessIpRule]] = None
) -> None
```

###### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#default_action BatchAccount#default_action}.

---

###### `ip_rule`<sup>Optional</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess.parameter.ipRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>]]

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}

---

##### `put_node_management_access` <a name="put_node_management_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess"></a>

```python
def put_node_management_access(
  default_action: str = None,
  ip_rule: typing.Union[IResolvable, typing.List[BatchAccountNetworkProfileNodeManagementAccessIpRule]] = None
) -> None
```

###### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#default_action BatchAccount#default_action}.

---

###### `ip_rule`<sup>Optional</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess.parameter.ipRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>]]

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}

---

##### `reset_account_access` <a name="reset_account_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetAccountAccess"></a>

```python
def reset_account_access() -> None
```

##### `reset_node_management_access` <a name="reset_node_management_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetNodeManagementAccess"></a>

```python
def reset_node_management_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccess">account_access</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference">BatchAccountNetworkProfileAccountAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccess">node_management_access</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference">BatchAccountNetworkProfileNodeManagementAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccessInput">account_access_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccessInput">node_management_access_input</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_access`<sup>Required</sup> <a name="account_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccess"></a>

```python
account_access: BatchAccountNetworkProfileAccountAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference">BatchAccountNetworkProfileAccountAccessOutputReference</a>

---

##### `node_management_access`<sup>Required</sup> <a name="node_management_access" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccess"></a>

```python
node_management_access: BatchAccountNetworkProfileNodeManagementAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference">BatchAccountNetworkProfileNodeManagementAccessOutputReference</a>

---

##### `account_access_input`<sup>Optional</sup> <a name="account_access_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccessInput"></a>

```python
account_access_input: BatchAccountNetworkProfileAccountAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

---

##### `node_management_access_input`<sup>Optional</sup> <a name="node_management_access_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccessInput"></a>

```python
node_management_access_input: BatchAccountNetworkProfileNodeManagementAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.internalValue"></a>

```python
internal_value: BatchAccountNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

---


### BatchAccountTimeoutsOutputReference <a name="BatchAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import batch_account

batchAccount.BatchAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>]

---



