# `azurerm_mssql_server_transparent_data_encryption`

Refer to the Terraform Registory for docs: [`azurerm_mssql_server_transparent_data_encryption`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption).

# `mssqlServerTransparentDataEncryption` Submodule <a name="`mssqlServerTransparentDataEncryption` Submodule" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerTransparentDataEncryption <a name="MssqlServerTransparentDataEncryption" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption azurerm_mssql_server_transparent_data_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_transparent_data_encryption

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  server_id: str,
  auto_rotation_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  key_vault_key_id: str = None,
  timeouts: MssqlServerTransparentDataEncryptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.autoRotationEnabled">auto_rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}.

---

##### `auto_rotation_enabled`<sup>Optional</sup> <a name="auto_rotation_enabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.autoRotationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#timeouts MssqlServerTransparentDataEncryption#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetAutoRotationEnabled">reset_auto_rotation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#create MssqlServerTransparentDataEncryption#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#delete MssqlServerTransparentDataEncryption#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#read MssqlServerTransparentDataEncryption#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#update MssqlServerTransparentDataEncryption#update}.

---

##### `reset_auto_rotation_enabled` <a name="reset_auto_rotation_enabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetAutoRotationEnabled"></a>

```python
def reset_auto_rotation_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_transparent_data_encryption

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_transparent_data_encryption

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_transparent_data_encryption

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference">MssqlServerTransparentDataEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabledInput">auto_rotation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabled">auto_rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeouts"></a>

```python
timeouts: MssqlServerTransparentDataEncryptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference">MssqlServerTransparentDataEncryptionTimeoutsOutputReference</a>

---

##### `auto_rotation_enabled_input`<sup>Optional</sup> <a name="auto_rotation_enabled_input" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabledInput"></a>

```python
auto_rotation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MssqlServerTransparentDataEncryptionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>, cdktf.IResolvable]

---

##### `auto_rotation_enabled`<sup>Required</sup> <a name="auto_rotation_enabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabled"></a>

```python
auto_rotation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerTransparentDataEncryptionConfig <a name="MssqlServerTransparentDataEncryptionConfig" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_transparent_data_encryption

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  server_id: str,
  auto_rotation_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  key_vault_key_id: str = None,
  timeouts: MssqlServerTransparentDataEncryptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.autoRotationEnabled">auto_rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}.

---

##### `auto_rotation_enabled`<sup>Optional</sup> <a name="auto_rotation_enabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.autoRotationEnabled"></a>

```python
auto_rotation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.timeouts"></a>

```python
timeouts: MssqlServerTransparentDataEncryptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#timeouts MssqlServerTransparentDataEncryption#timeouts}

---

### MssqlServerTransparentDataEncryptionTimeouts <a name="MssqlServerTransparentDataEncryptionTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_transparent_data_encryption

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#create MssqlServerTransparentDataEncryption#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#delete MssqlServerTransparentDataEncryption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#read MssqlServerTransparentDataEncryption#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#update MssqlServerTransparentDataEncryption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#create MssqlServerTransparentDataEncryption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#delete MssqlServerTransparentDataEncryption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#read MssqlServerTransparentDataEncryption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/mssql_server_transparent_data_encryption#update MssqlServerTransparentDataEncryption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerTransparentDataEncryptionTimeoutsOutputReference <a name="MssqlServerTransparentDataEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server_transparent_data_encryption

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MssqlServerTransparentDataEncryptionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>, cdktf.IResolvable]

---



