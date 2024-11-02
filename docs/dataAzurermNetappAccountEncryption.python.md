# `dataAzurermNetappAccountEncryption` Submodule <a name="`dataAzurermNetappAccountEncryption` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappAccountEncryption <a name="DataAzurermNetappAccountEncryption" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption azurerm_netapp_account_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_account_encryption

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  netapp_account_id: str,
  encryption_key: str = None,
  id: str = None,
  system_assigned_identity_principal_id: str = None,
  timeouts: DataAzurermNetappAccountEncryptionTimeouts = None,
  user_assigned_identity_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.netappAccountId">netapp_account_id</a></code> | <code>str</code> | The ID of the NetApp Account where encryption will be set. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code>str</code> | The versionless encryption key url. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#id DataAzurermNetappAccountEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.systemAssignedIdentityPrincipalId">system_assigned_identity_principal_id</a></code> | <code>str</code> | The Principal ID of the System Assigned Identity to use for encryption. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | The resource ID of the User Assigned Identity to use for encryption. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `netapp_account_id`<sup>Required</sup> <a name="netapp_account_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.netappAccountId"></a>

- *Type:* str

The ID of the NetApp Account where encryption will be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#netapp_account_id DataAzurermNetappAccountEncryption#netapp_account_id}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.encryptionKey"></a>

- *Type:* str

The versionless encryption key url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#encryption_key DataAzurermNetappAccountEncryption#encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#id DataAzurermNetappAccountEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `system_assigned_identity_principal_id`<sup>Optional</sup> <a name="system_assigned_identity_principal_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.systemAssignedIdentityPrincipalId"></a>

- *Type:* str

The Principal ID of the System Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#system_assigned_identity_principal_id DataAzurermNetappAccountEncryption#system_assigned_identity_principal_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#timeouts DataAzurermNetappAccountEncryption#timeouts}

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.userAssignedIdentityId"></a>

- *Type:* str

The resource ID of the User Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#user_assigned_identity_id DataAzurermNetappAccountEncryption#user_assigned_identity_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetSystemAssignedIdentityPrincipalId">reset_system_assigned_identity_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#read DataAzurermNetappAccountEncryption#read}.

---

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_system_assigned_identity_principal_id` <a name="reset_system_assigned_identity_principal_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetSystemAssignedIdentityPrincipalId"></a>

```python
def reset_system_assigned_identity_principal_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermNetappAccountEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_account_encryption

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_account_encryption

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_account_encryption

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_account_encryption

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermNetappAccountEncryption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermNetappAccountEncryption to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermNetappAccountEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappAccountEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference">DataAzurermNetappAccountEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.netappAccountIdInput">netapp_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput">system_assigned_identity_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.netappAccountId">netapp_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.systemAssignedIdentityPrincipalId">system_assigned_identity_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.timeouts"></a>

```python
timeouts: DataAzurermNetappAccountEncryptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference">DataAzurermNetappAccountEncryptionTimeoutsOutputReference</a>

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `netapp_account_id_input`<sup>Optional</sup> <a name="netapp_account_id_input" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.netappAccountIdInput"></a>

```python
netapp_account_id_input: str
```

- *Type:* str

---

##### `system_assigned_identity_principal_id_input`<sup>Optional</sup> <a name="system_assigned_identity_principal_id_input" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput"></a>

```python
system_assigned_identity_principal_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermNetappAccountEncryptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>]

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `netapp_account_id`<sup>Required</sup> <a name="netapp_account_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.netappAccountId"></a>

```python
netapp_account_id: str
```

- *Type:* str

---

##### `system_assigned_identity_principal_id`<sup>Required</sup> <a name="system_assigned_identity_principal_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.systemAssignedIdentityPrincipalId"></a>

```python
system_assigned_identity_principal_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappAccountEncryptionConfig <a name="DataAzurermNetappAccountEncryptionConfig" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_account_encryption

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  netapp_account_id: str,
  encryption_key: str = None,
  id: str = None,
  system_assigned_identity_principal_id: str = None,
  timeouts: DataAzurermNetappAccountEncryptionTimeouts = None,
  user_assigned_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.netappAccountId">netapp_account_id</a></code> | <code>str</code> | The ID of the NetApp Account where encryption will be set. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.encryptionKey">encryption_key</a></code> | <code>str</code> | The versionless encryption key url. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#id DataAzurermNetappAccountEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId">system_assigned_identity_principal_id</a></code> | <code>str</code> | The Principal ID of the System Assigned Identity to use for encryption. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | The resource ID of the User Assigned Identity to use for encryption. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `netapp_account_id`<sup>Required</sup> <a name="netapp_account_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.netappAccountId"></a>

```python
netapp_account_id: str
```

- *Type:* str

The ID of the NetApp Account where encryption will be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#netapp_account_id DataAzurermNetappAccountEncryption#netapp_account_id}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

The versionless encryption key url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#encryption_key DataAzurermNetappAccountEncryption#encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#id DataAzurermNetappAccountEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `system_assigned_identity_principal_id`<sup>Optional</sup> <a name="system_assigned_identity_principal_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId"></a>

```python
system_assigned_identity_principal_id: str
```

- *Type:* str

The Principal ID of the System Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#system_assigned_identity_principal_id DataAzurermNetappAccountEncryption#system_assigned_identity_principal_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.timeouts"></a>

```python
timeouts: DataAzurermNetappAccountEncryptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#timeouts DataAzurermNetappAccountEncryption#timeouts}

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

The resource ID of the User Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#user_assigned_identity_id DataAzurermNetappAccountEncryption#user_assigned_identity_id}

---

### DataAzurermNetappAccountEncryptionTimeouts <a name="DataAzurermNetappAccountEncryptionTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_account_encryption

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#read DataAzurermNetappAccountEncryption#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/data-sources/netapp_account_encryption#read DataAzurermNetappAccountEncryption#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappAccountEncryptionTimeoutsOutputReference <a name="DataAzurermNetappAccountEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_account_encryption

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermNetappAccountEncryptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>]

---



