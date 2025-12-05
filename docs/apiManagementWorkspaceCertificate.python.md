# `apiManagementWorkspaceCertificate` Submodule <a name="`apiManagementWorkspaceCertificate` Submodule" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementWorkspaceCertificate <a name="ApiManagementWorkspaceCertificate" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate azurerm_api_management_workspace_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_certificate

apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_management_workspace_id: str,
  name: str,
  certificate_data_base64: str = None,
  id: str = None,
  key_vault_secret_id: str = None,
  password: str = None,
  timeouts: ApiManagementWorkspaceCertificateTimeouts = None,
  user_assigned_identity_client_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.apiManagementWorkspaceId">api_management_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#api_management_workspace_id ApiManagementWorkspaceCertificate#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#name ApiManagementWorkspaceCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.certificateDataBase64">certificate_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#certificate_data_base64 ApiManagementWorkspaceCertificate#certificate_data_base64}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#id ApiManagementWorkspaceCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.keyVaultSecretId">key_vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#key_vault_secret_id ApiManagementWorkspaceCertificate#key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#password ApiManagementWorkspaceCertificate#password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts">ApiManagementWorkspaceCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.userAssignedIdentityClientId">user_assigned_identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#user_assigned_identity_client_id ApiManagementWorkspaceCertificate#user_assigned_identity_client_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `api_management_workspace_id`<sup>Required</sup> <a name="api_management_workspace_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.apiManagementWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#api_management_workspace_id ApiManagementWorkspaceCertificate#api_management_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#name ApiManagementWorkspaceCertificate#name}.

---

##### `certificate_data_base64`<sup>Optional</sup> <a name="certificate_data_base64" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.certificateDataBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#certificate_data_base64 ApiManagementWorkspaceCertificate#certificate_data_base64}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#id ApiManagementWorkspaceCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault_secret_id`<sup>Optional</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.keyVaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#key_vault_secret_id ApiManagementWorkspaceCertificate#key_vault_secret_id}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#password ApiManagementWorkspaceCertificate#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts">ApiManagementWorkspaceCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#timeouts ApiManagementWorkspaceCertificate#timeouts}

---

##### `user_assigned_identity_client_id`<sup>Optional</sup> <a name="user_assigned_identity_client_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.Initializer.parameter.userAssignedIdentityClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#user_assigned_identity_client_id ApiManagementWorkspaceCertificate#user_assigned_identity_client_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetCertificateDataBase64">reset_certificate_data_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetKeyVaultSecretId">reset_key_vault_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetUserAssignedIdentityClientId">reset_user_assigned_identity_client_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#create ApiManagementWorkspaceCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#delete ApiManagementWorkspaceCertificate#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#read ApiManagementWorkspaceCertificate#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#update ApiManagementWorkspaceCertificate#update}.

---

##### `reset_certificate_data_base64` <a name="reset_certificate_data_base64" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetCertificateDataBase64"></a>

```python
def reset_certificate_data_base64() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_vault_secret_id` <a name="reset_key_vault_secret_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetKeyVaultSecretId"></a>

```python
def reset_key_vault_secret_id() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_assigned_identity_client_id` <a name="reset_user_assigned_identity_client_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.resetUserAssignedIdentityClientId"></a>

```python
def reset_user_assigned_identity_client_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementWorkspaceCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_certificate

apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_certificate

apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_certificate

apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_certificate

apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementWorkspaceCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementWorkspaceCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementWorkspaceCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementWorkspaceCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference">ApiManagementWorkspaceCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.apiManagementWorkspaceIdInput">api_management_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.certificateDataBase64Input">certificate_data_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.keyVaultSecretIdInput">key_vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts">ApiManagementWorkspaceCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.userAssignedIdentityClientIdInput">user_assigned_identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.apiManagementWorkspaceId">api_management_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.certificateDataBase64">certificate_data_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.keyVaultSecretId">key_vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.userAssignedIdentityClientId">user_assigned_identity_client_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.timeouts"></a>

```python
timeouts: ApiManagementWorkspaceCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference">ApiManagementWorkspaceCertificateTimeoutsOutputReference</a>

---

##### `api_management_workspace_id_input`<sup>Optional</sup> <a name="api_management_workspace_id_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.apiManagementWorkspaceIdInput"></a>

```python
api_management_workspace_id_input: str
```

- *Type:* str

---

##### `certificate_data_base64_input`<sup>Optional</sup> <a name="certificate_data_base64_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.certificateDataBase64Input"></a>

```python
certificate_data_base64_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_secret_id_input`<sup>Optional</sup> <a name="key_vault_secret_id_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.keyVaultSecretIdInput"></a>

```python
key_vault_secret_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiManagementWorkspaceCertificateTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts">ApiManagementWorkspaceCertificateTimeouts</a>

---

##### `user_assigned_identity_client_id_input`<sup>Optional</sup> <a name="user_assigned_identity_client_id_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.userAssignedIdentityClientIdInput"></a>

```python
user_assigned_identity_client_id_input: str
```

- *Type:* str

---

##### `api_management_workspace_id`<sup>Required</sup> <a name="api_management_workspace_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.apiManagementWorkspaceId"></a>

```python
api_management_workspace_id: str
```

- *Type:* str

---

##### `certificate_data_base64`<sup>Required</sup> <a name="certificate_data_base64" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.certificateDataBase64"></a>

```python
certificate_data_base64: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_secret_id`<sup>Required</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.keyVaultSecretId"></a>

```python
key_vault_secret_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user_assigned_identity_client_id`<sup>Required</sup> <a name="user_assigned_identity_client_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.userAssignedIdentityClientId"></a>

```python
user_assigned_identity_client_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementWorkspaceCertificateConfig <a name="ApiManagementWorkspaceCertificateConfig" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_certificate

apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_management_workspace_id: str,
  name: str,
  certificate_data_base64: str = None,
  id: str = None,
  key_vault_secret_id: str = None,
  password: str = None,
  timeouts: ApiManagementWorkspaceCertificateTimeouts = None,
  user_assigned_identity_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.apiManagementWorkspaceId">api_management_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#api_management_workspace_id ApiManagementWorkspaceCertificate#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#name ApiManagementWorkspaceCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.certificateDataBase64">certificate_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#certificate_data_base64 ApiManagementWorkspaceCertificate#certificate_data_base64}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#id ApiManagementWorkspaceCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.keyVaultSecretId">key_vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#key_vault_secret_id ApiManagementWorkspaceCertificate#key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#password ApiManagementWorkspaceCertificate#password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts">ApiManagementWorkspaceCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.userAssignedIdentityClientId">user_assigned_identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#user_assigned_identity_client_id ApiManagementWorkspaceCertificate#user_assigned_identity_client_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `api_management_workspace_id`<sup>Required</sup> <a name="api_management_workspace_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.apiManagementWorkspaceId"></a>

```python
api_management_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#api_management_workspace_id ApiManagementWorkspaceCertificate#api_management_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#name ApiManagementWorkspaceCertificate#name}.

---

##### `certificate_data_base64`<sup>Optional</sup> <a name="certificate_data_base64" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.certificateDataBase64"></a>

```python
certificate_data_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#certificate_data_base64 ApiManagementWorkspaceCertificate#certificate_data_base64}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#id ApiManagementWorkspaceCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault_secret_id`<sup>Optional</sup> <a name="key_vault_secret_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.keyVaultSecretId"></a>

```python
key_vault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#key_vault_secret_id ApiManagementWorkspaceCertificate#key_vault_secret_id}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#password ApiManagementWorkspaceCertificate#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.timeouts"></a>

```python
timeouts: ApiManagementWorkspaceCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts">ApiManagementWorkspaceCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#timeouts ApiManagementWorkspaceCertificate#timeouts}

---

##### `user_assigned_identity_client_id`<sup>Optional</sup> <a name="user_assigned_identity_client_id" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateConfig.property.userAssignedIdentityClientId"></a>

```python
user_assigned_identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#user_assigned_identity_client_id ApiManagementWorkspaceCertificate#user_assigned_identity_client_id}.

---

### ApiManagementWorkspaceCertificateTimeouts <a name="ApiManagementWorkspaceCertificateTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_certificate

apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#create ApiManagementWorkspaceCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#delete ApiManagementWorkspaceCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#read ApiManagementWorkspaceCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#update ApiManagementWorkspaceCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#create ApiManagementWorkspaceCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#delete ApiManagementWorkspaceCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#read ApiManagementWorkspaceCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_certificate#update ApiManagementWorkspaceCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementWorkspaceCertificateTimeoutsOutputReference <a name="ApiManagementWorkspaceCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_certificate

apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts">ApiManagementWorkspaceCertificateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiManagementWorkspaceCertificateTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceCertificate.ApiManagementWorkspaceCertificateTimeouts">ApiManagementWorkspaceCertificateTimeouts</a>

---



