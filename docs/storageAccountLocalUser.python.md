# `azurerm_storage_account_local_user`

Refer to the Terraform Registory for docs: [`azurerm_storage_account_local_user`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user).

# `storageAccountLocalUser` Submodule <a name="`storageAccountLocalUser` Submodule" id="@cdktf/provider-azurerm.storageAccountLocalUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountLocalUser <a name="StorageAccountLocalUser" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user azurerm_storage_account_local_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUser(
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
  storage_account_id: str,
  home_directory: str = None,
  id: str = None,
  permission_scope: typing.Union[IResolvable, typing.List[StorageAccountLocalUserPermissionScope]] = None,
  ssh_authorized_key: typing.Union[IResolvable, typing.List[StorageAccountLocalUserSshAuthorizedKey]] = None,
  ssh_key_enabled: typing.Union[bool, IResolvable] = None,
  ssh_password_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: StorageAccountLocalUserTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.homeDirectory">home_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.permissionScope">permission_scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]]</code> | permission_scope block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshAuthorizedKey">ssh_authorized_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]]</code> | ssh_authorized_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshKeyEnabled">ssh_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshPasswordEnabled">ssh_password_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}.

---

##### `home_directory`<sup>Optional</sup> <a name="home_directory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.homeDirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission_scope`<sup>Optional</sup> <a name="permission_scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.permissionScope"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]]

permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#permission_scope StorageAccountLocalUser#permission_scope}

---

##### `ssh_authorized_key`<sup>Optional</sup> <a name="ssh_authorized_key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshAuthorizedKey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]]

ssh_authorized_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_authorized_key StorageAccountLocalUser#ssh_authorized_key}

---

##### `ssh_key_enabled`<sup>Optional</sup> <a name="ssh_key_enabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshKeyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}.

---

##### `ssh_password_enabled`<sup>Optional</sup> <a name="ssh_password_enabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshPasswordEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#timeouts StorageAccountLocalUser#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope">put_permission_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey">put_ssh_authorized_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetHomeDirectory">reset_home_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetPermissionScope">reset_permission_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshAuthorizedKey">reset_ssh_authorized_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshKeyEnabled">reset_ssh_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshPasswordEnabled">reset_ssh_password_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_permission_scope` <a name="put_permission_scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope"></a>

```python
def put_permission_scope(
  value: typing.Union[IResolvable, typing.List[StorageAccountLocalUserPermissionScope]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]]

---

##### `put_ssh_authorized_key` <a name="put_ssh_authorized_key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey"></a>

```python
def put_ssh_authorized_key(
  value: typing.Union[IResolvable, typing.List[StorageAccountLocalUserSshAuthorizedKey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}.

---

##### `reset_home_directory` <a name="reset_home_directory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetHomeDirectory"></a>

```python
def reset_home_directory() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_permission_scope` <a name="reset_permission_scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetPermissionScope"></a>

```python
def reset_permission_scope() -> None
```

##### `reset_ssh_authorized_key` <a name="reset_ssh_authorized_key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshAuthorizedKey"></a>

```python
def reset_ssh_authorized_key() -> None
```

##### `reset_ssh_key_enabled` <a name="reset_ssh_key_enabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshKeyEnabled"></a>

```python
def reset_ssh_key_enabled() -> None
```

##### `reset_ssh_password_enabled` <a name="reset_ssh_password_enabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshPasswordEnabled"></a>

```python
def reset_ssh_password_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScope">permission_scope</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList">StorageAccountLocalUserPermissionScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKey">ssh_authorized_key</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList">StorageAccountLocalUserSshAuthorizedKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference">StorageAccountLocalUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectoryInput">home_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScopeInput">permission_scope_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKeyInput">ssh_authorized_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabledInput">ssh_key_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabledInput">ssh_password_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectory">home_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabled">ssh_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabled">ssh_password_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `permission_scope`<sup>Required</sup> <a name="permission_scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScope"></a>

```python
permission_scope: StorageAccountLocalUserPermissionScopeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList">StorageAccountLocalUserPermissionScopeList</a>

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `ssh_authorized_key`<sup>Required</sup> <a name="ssh_authorized_key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKey"></a>

```python
ssh_authorized_key: StorageAccountLocalUserSshAuthorizedKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList">StorageAccountLocalUserSshAuthorizedKeyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeouts"></a>

```python
timeouts: StorageAccountLocalUserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference">StorageAccountLocalUserTimeoutsOutputReference</a>

---

##### `home_directory_input`<sup>Optional</sup> <a name="home_directory_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectoryInput"></a>

```python
home_directory_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_scope_input`<sup>Optional</sup> <a name="permission_scope_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScopeInput"></a>

```python
permission_scope_input: typing.Union[IResolvable, typing.List[StorageAccountLocalUserPermissionScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]]

---

##### `ssh_authorized_key_input`<sup>Optional</sup> <a name="ssh_authorized_key_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKeyInput"></a>

```python
ssh_authorized_key_input: typing.Union[IResolvable, typing.List[StorageAccountLocalUserSshAuthorizedKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]]

---

##### `ssh_key_enabled_input`<sup>Optional</sup> <a name="ssh_key_enabled_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabledInput"></a>

```python
ssh_key_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_password_enabled_input`<sup>Optional</sup> <a name="ssh_password_enabled_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabledInput"></a>

```python
ssh_password_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageAccountLocalUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>]

---

##### `home_directory`<sup>Required</sup> <a name="home_directory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectory"></a>

```python
home_directory: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ssh_key_enabled`<sup>Required</sup> <a name="ssh_key_enabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabled"></a>

```python
ssh_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_password_enabled`<sup>Required</sup> <a name="ssh_password_enabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabled"></a>

```python
ssh_password_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountLocalUserConfig <a name="StorageAccountLocalUserConfig" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  storage_account_id: str,
  home_directory: str = None,
  id: str = None,
  permission_scope: typing.Union[IResolvable, typing.List[StorageAccountLocalUserPermissionScope]] = None,
  ssh_authorized_key: typing.Union[IResolvable, typing.List[StorageAccountLocalUserSshAuthorizedKey]] = None,
  ssh_key_enabled: typing.Union[bool, IResolvable] = None,
  ssh_password_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: StorageAccountLocalUserTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.homeDirectory">home_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.permissionScope">permission_scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]]</code> | permission_scope block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshAuthorizedKey">ssh_authorized_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]]</code> | ssh_authorized_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshKeyEnabled">ssh_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshPasswordEnabled">ssh_password_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}.

---

##### `home_directory`<sup>Optional</sup> <a name="home_directory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.homeDirectory"></a>

```python
home_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission_scope`<sup>Optional</sup> <a name="permission_scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.permissionScope"></a>

```python
permission_scope: typing.Union[IResolvable, typing.List[StorageAccountLocalUserPermissionScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]]

permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#permission_scope StorageAccountLocalUser#permission_scope}

---

##### `ssh_authorized_key`<sup>Optional</sup> <a name="ssh_authorized_key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshAuthorizedKey"></a>

```python
ssh_authorized_key: typing.Union[IResolvable, typing.List[StorageAccountLocalUserSshAuthorizedKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]]

ssh_authorized_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_authorized_key StorageAccountLocalUser#ssh_authorized_key}

---

##### `ssh_key_enabled`<sup>Optional</sup> <a name="ssh_key_enabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshKeyEnabled"></a>

```python
ssh_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}.

---

##### `ssh_password_enabled`<sup>Optional</sup> <a name="ssh_password_enabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshPasswordEnabled"></a>

```python
ssh_password_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.timeouts"></a>

```python
timeouts: StorageAccountLocalUserTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#timeouts StorageAccountLocalUser#timeouts}

---

### StorageAccountLocalUserPermissionScope <a name="StorageAccountLocalUserPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserPermissionScope(
  permissions: StorageAccountLocalUserPermissionScopePermissions,
  resource_name: str,
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#resource_name StorageAccountLocalUser#resource_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#service StorageAccountLocalUser#service}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.permissions"></a>

```python
permissions: StorageAccountLocalUserPermissionScopePermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#permissions StorageAccountLocalUser#permissions}

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#resource_name StorageAccountLocalUser#resource_name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#service StorageAccountLocalUser#service}.

---

### StorageAccountLocalUserPermissionScopePermissions <a name="StorageAccountLocalUserPermissionScopePermissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions(
  create: typing.Union[bool, IResolvable] = None,
  delete: typing.Union[bool, IResolvable] = None,
  list: typing.Union[bool, IResolvable] = None,
  read: typing.Union[bool, IResolvable] = None,
  write: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.create">create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.list">list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.read">read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.write">write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.create"></a>

```python
create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

##### `list`<sup>Optional</sup> <a name="list" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.list"></a>

```python
list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.read"></a>

```python
read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

##### `write`<sup>Optional</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.write"></a>

```python
write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}.

---

### StorageAccountLocalUserSshAuthorizedKey <a name="StorageAccountLocalUserSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey(
  key: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#key StorageAccountLocalUser#key}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#description StorageAccountLocalUser#description}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#key StorageAccountLocalUser#key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#description StorageAccountLocalUser#description}.

---

### StorageAccountLocalUserTimeouts <a name="StorageAccountLocalUserTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountLocalUserPermissionScopeList <a name="StorageAccountLocalUserPermissionScopeList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageAccountLocalUserPermissionScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageAccountLocalUserPermissionScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]]

---


### StorageAccountLocalUserPermissionScopeOutputReference <a name="StorageAccountLocalUserPermissionScopeOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions">put_permissions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions"></a>

```python
def put_permissions(
  create: typing.Union[bool, IResolvable] = None,
  delete: typing.Union[bool, IResolvable] = None,
  list: typing.Union[bool, IResolvable] = None,
  read: typing.Union[bool, IResolvable] = None,
  write: typing.Union[bool, IResolvable] = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions.parameter.create"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions.parameter.delete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

###### `list`<sup>Optional</sup> <a name="list" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions.parameter.list"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions.parameter.read"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

###### `write`<sup>Optional</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions.parameter.write"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference">StorageAccountLocalUserPermissionScopePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissionsInput">permissions_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissions"></a>

```python
permissions: StorageAccountLocalUserPermissionScopePermissionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference">StorageAccountLocalUserPermissionScopePermissionsOutputReference</a>

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissionsInput"></a>

```python
permissions_input: StorageAccountLocalUserPermissionScopePermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountLocalUserPermissionScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>]

---


### StorageAccountLocalUserPermissionScopePermissionsOutputReference <a name="StorageAccountLocalUserPermissionScopePermissionsOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetList">reset_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetWrite">reset_write</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_list` <a name="reset_list" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetList"></a>

```python
def reset_list() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_write` <a name="reset_write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetWrite"></a>

```python
def reset_write() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.createInput">create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.deleteInput">delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.listInput">list_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.readInput">read_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.writeInput">write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.create">create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.list">list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.read">read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.write">write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.createInput"></a>

```python
create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.deleteInput"></a>

```python
delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `list_input`<sup>Optional</sup> <a name="list_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.listInput"></a>

```python
list_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.readInput"></a>

```python
read_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write_input`<sup>Optional</sup> <a name="write_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.writeInput"></a>

```python
write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.create"></a>

```python
create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.list"></a>

```python
list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.read"></a>

```python
read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.write"></a>

```python
write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountLocalUserPermissionScopePermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---


### StorageAccountLocalUserSshAuthorizedKeyList <a name="StorageAccountLocalUserSshAuthorizedKeyList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageAccountLocalUserSshAuthorizedKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageAccountLocalUserSshAuthorizedKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]]

---


### StorageAccountLocalUserSshAuthorizedKeyOutputReference <a name="StorageAccountLocalUserSshAuthorizedKeyOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountLocalUserSshAuthorizedKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>]

---


### StorageAccountLocalUserTimeoutsOutputReference <a name="StorageAccountLocalUserTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_local_user

storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountLocalUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>]

---



