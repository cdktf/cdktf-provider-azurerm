# `dataAzurermKeyVaultCertificateData` Submodule <a name="`dataAzurermKeyVaultCertificateData` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultCertificateData <a name="DataAzurermKeyVaultCertificateData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data azurerm_key_vault_certificate_data}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_data

dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_vault_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermKeyVaultCertificateDataTimeouts = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#key_vault_id DataAzurermKeyVaultCertificateData#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#name DataAzurermKeyVaultCertificateData#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#id DataAzurermKeyVaultCertificateData#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts">DataAzurermKeyVaultCertificateDataTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#version DataAzurermKeyVaultCertificateData#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#key_vault_id DataAzurermKeyVaultCertificateData#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#name DataAzurermKeyVaultCertificateData#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#id DataAzurermKeyVaultCertificateData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts">DataAzurermKeyVaultCertificateDataTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#timeouts DataAzurermKeyVaultCertificateData#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#version DataAzurermKeyVaultCertificateData#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#read DataAzurermKeyVaultCertificateData#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultCertificateData resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_data

dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_data

dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_data

dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_data

dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermKeyVaultCertificateData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermKeyVaultCertificateData to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermKeyVaultCertificateData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultCertificateData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.certificatesCount">certificates_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.expires">expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.hex">hex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.pem">pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference">DataAzurermKeyVaultCertificateDataTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts">DataAzurermKeyVaultCertificateDataTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificates_count`<sup>Required</sup> <a name="certificates_count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.certificatesCount"></a>

```python
certificates_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.expires"></a>

```python
expires: str
```

- *Type:* str

---

##### `hex`<sup>Required</sup> <a name="hex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.hex"></a>

```python
hex: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.pem"></a>

```python
pem: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultCertificateDataTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference">DataAzurermKeyVaultCertificateDataTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermKeyVaultCertificateDataTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts">DataAzurermKeyVaultCertificateDataTimeouts</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateData.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultCertificateDataConfig <a name="DataAzurermKeyVaultCertificateDataConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_data

dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_vault_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermKeyVaultCertificateDataTimeouts = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#key_vault_id DataAzurermKeyVaultCertificateData#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#name DataAzurermKeyVaultCertificateData#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#id DataAzurermKeyVaultCertificateData#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts">DataAzurermKeyVaultCertificateDataTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#version DataAzurermKeyVaultCertificateData#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#key_vault_id DataAzurermKeyVaultCertificateData#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#name DataAzurermKeyVaultCertificateData#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#id DataAzurermKeyVaultCertificateData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultCertificateDataTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts">DataAzurermKeyVaultCertificateDataTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#timeouts DataAzurermKeyVaultCertificateData#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#version DataAzurermKeyVaultCertificateData#version}.

---

### DataAzurermKeyVaultCertificateDataTimeouts <a name="DataAzurermKeyVaultCertificateDataTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_data

dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#read DataAzurermKeyVaultCertificateData#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate_data#read DataAzurermKeyVaultCertificateData#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultCertificateDataTimeoutsOutputReference <a name="DataAzurermKeyVaultCertificateDataTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_data

dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts">DataAzurermKeyVaultCertificateDataTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermKeyVaultCertificateDataTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateData.DataAzurermKeyVaultCertificateDataTimeouts">DataAzurermKeyVaultCertificateDataTimeouts</a>

---



