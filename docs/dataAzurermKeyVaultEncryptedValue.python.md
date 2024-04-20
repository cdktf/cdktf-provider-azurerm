# `dataAzurermKeyVaultEncryptedValue` Submodule <a name="`dataAzurermKeyVaultEncryptedValue` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultEncryptedValue <a name="DataAzurermKeyVaultEncryptedValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value azurerm_key_vault_encrypted_value}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_encrypted_value

dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  algorithm: str,
  key_vault_key_id: str,
  encrypted_data: str = None,
  id: str = None,
  plain_text_value: str = None,
  timeouts: DataAzurermKeyVaultEncryptedValueTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.encryptedData">encrypted_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.plainTextValue">plain_text_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}.

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}.

---

##### `encrypted_data`<sup>Optional</sup> <a name="encrypted_data" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.encryptedData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plain_text_value`<sup>Optional</sup> <a name="plain_text_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.plainTextValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#timeouts DataAzurermKeyVaultEncryptedValue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetEncryptedData">reset_encrypted_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetPlainTextValue">reset_plain_text_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}.

---

##### `reset_encrypted_data` <a name="reset_encrypted_data" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetEncryptedData"></a>

```python
def reset_encrypted_data() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_plain_text_value` <a name="reset_plain_text_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetPlainTextValue"></a>

```python
def reset_plain_text_value() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultEncryptedValue resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_encrypted_value

dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_encrypted_value

dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_encrypted_value

dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_encrypted_value

dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermKeyVaultEncryptedValue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermKeyVaultEncryptedValue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermKeyVaultEncryptedValue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultEncryptedValue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.decodedPlainTextValue">decoded_plain_text_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference">DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedDataInput">encrypted_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValueInput">plain_text_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedData">encrypted_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValue">plain_text_value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `decoded_plain_text_value`<sup>Required</sup> <a name="decoded_plain_text_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.decodedPlainTextValue"></a>

```python
decoded_plain_text_value: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference">DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference</a>

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `encrypted_data_input`<sup>Optional</sup> <a name="encrypted_data_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedDataInput"></a>

```python
encrypted_data_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `plain_text_value_input`<sup>Optional</sup> <a name="plain_text_value_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValueInput"></a>

```python
plain_text_value_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermKeyVaultEncryptedValueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `encrypted_data`<sup>Required</sup> <a name="encrypted_data" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedData"></a>

```python
encrypted_data: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `plain_text_value`<sup>Required</sup> <a name="plain_text_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValue"></a>

```python
plain_text_value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultEncryptedValueConfig <a name="DataAzurermKeyVaultEncryptedValueConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_encrypted_value

dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  algorithm: str,
  key_vault_key_id: str,
  encrypted_data: str = None,
  id: str = None,
  plain_text_value: str = None,
  timeouts: DataAzurermKeyVaultEncryptedValueTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.encryptedData">encrypted_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.plainTextValue">plain_text_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}.

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}.

---

##### `encrypted_data`<sup>Optional</sup> <a name="encrypted_data" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.encryptedData"></a>

```python
encrypted_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plain_text_value`<sup>Optional</sup> <a name="plain_text_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.plainTextValue"></a>

```python
plain_text_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultEncryptedValueTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#timeouts DataAzurermKeyVaultEncryptedValue#timeouts}

---

### DataAzurermKeyVaultEncryptedValueTimeouts <a name="DataAzurermKeyVaultEncryptedValueTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_encrypted_value

dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference <a name="DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_encrypted_value

dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermKeyVaultEncryptedValueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>]

---



