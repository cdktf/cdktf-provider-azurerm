# `dataAzurermKeyVaultCertificate` Submodule <a name="`dataAzurermKeyVaultCertificate` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultCertificate <a name="DataAzurermKeyVaultCertificate" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate azurerm_key_vault_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate(
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
  timeouts: DataAzurermKeyVaultCertificateTimeouts = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#timeouts DataAzurermKeyVaultCertificate#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#read DataAzurermKeyVaultCertificate#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermKeyVaultCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermKeyVaultCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermKeyVaultCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateData">certificate_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateDataBase64">certificate_data_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificatePolicy">certificate_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList">DataAzurermKeyVaultCertificateCertificatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.expires">expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.resourceManagerId">resource_manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.resourceManagerVersionlessId">resource_manager_versionless_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference">DataAzurermKeyVaultCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessId">versionless_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessSecretId">versionless_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate_data`<sup>Required</sup> <a name="certificate_data" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateData"></a>

```python
certificate_data: str
```

- *Type:* str

---

##### `certificate_data_base64`<sup>Required</sup> <a name="certificate_data_base64" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateDataBase64"></a>

```python
certificate_data_base64: str
```

- *Type:* str

---

##### `certificate_policy`<sup>Required</sup> <a name="certificate_policy" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificatePolicy"></a>

```python
certificate_policy: DataAzurermKeyVaultCertificateCertificatePolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList">DataAzurermKeyVaultCertificateCertificatePolicyList</a>

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.expires"></a>

```python
expires: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

##### `resource_manager_id`<sup>Required</sup> <a name="resource_manager_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.resourceManagerId"></a>

```python
resource_manager_id: str
```

- *Type:* str

---

##### `resource_manager_versionless_id`<sup>Required</sup> <a name="resource_manager_versionless_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.resourceManagerVersionlessId"></a>

```python
resource_manager_versionless_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference">DataAzurermKeyVaultCertificateTimeoutsOutputReference</a>

---

##### `versionless_id`<sup>Required</sup> <a name="versionless_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessId"></a>

```python
versionless_id: str
```

- *Type:* str

---

##### `versionless_secret_id`<sup>Required</sup> <a name="versionless_secret_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessSecretId"></a>

```python
versionless_secret_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermKeyVaultCertificateTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultCertificateCertificatePolicy <a name="DataAzurermKeyVaultCertificateCertificatePolicy" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy()
```


### DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters <a name="DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters()
```


### DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties <a name="DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties()
```


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction()
```


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction()
```


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger()
```


### DataAzurermKeyVaultCertificateCertificatePolicySecretProperties <a name="DataAzurermKeyVaultCertificateCertificatePolicySecretProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties()
```


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties()
```


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames()
```


### DataAzurermKeyVaultCertificateConfig <a name="DataAzurermKeyVaultCertificateConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig(
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
  timeouts: DataAzurermKeyVaultCertificateTimeouts = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#timeouts DataAzurermKeyVaultCertificate#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}.

---

### DataAzurermKeyVaultCertificateTimeouts <a name="DataAzurermKeyVaultCertificateTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#read DataAzurermKeyVaultCertificate#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/key_vault_certificate#read DataAzurermKeyVaultCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList <a name="DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList <a name="DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve">curve</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable">exportable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey">reuse_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties">DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve"></a>

```python
curve: str
```

- *Type:* str

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable"></a>

```python
exportable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `reuse_key`<sup>Required</sup> <a name="reuse_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey"></a>

```python
reuse_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties">DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action"></a>

```python
action: DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger"></a>

```python
trigger: DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry">days_before_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage">lifetime_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_before_expiry`<sup>Required</sup> <a name="days_before_expiry" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry"></a>

```python
days_before_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifetime_percentage`<sup>Required</sup> <a name="lifetime_percentage" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage"></a>

```python
lifetime_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyList <a name="DataAzurermKeyVaultCertificateCertificatePolicyList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateCertificatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateCertificatePolicyOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters">issuer_parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties">key_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction">lifetime_action</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties">secret_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties">x509_certificate_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy">DataAzurermKeyVaultCertificateCertificatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issuer_parameters`<sup>Required</sup> <a name="issuer_parameters" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters"></a>

```python
issuer_parameters: DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList</a>

---

##### `key_properties`<sup>Required</sup> <a name="key_properties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties"></a>

```python
key_properties: DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList</a>

---

##### `lifetime_action`<sup>Required</sup> <a name="lifetime_action" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction"></a>

```python
lifetime_action: DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList</a>

---

##### `secret_properties`<sup>Required</sup> <a name="secret_properties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties"></a>

```python
secret_properties: DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList</a>

---

##### `x509_certificate_properties`<sup>Required</sup> <a name="x509_certificate_properties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties"></a>

```python
x509_certificate_properties: DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy">DataAzurermKeyVaultCertificateCertificatePolicy</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList <a name="DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties">DataAzurermKeyVaultCertificateCertificatePolicySecretProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateCertificatePolicySecretProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties">DataAzurermKeyVaultCertificateCertificatePolicySecretProperties</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage">extended_key_usage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage">key_usage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths">validity_in_months</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extended_key_usage`<sup>Required</sup> <a name="extended_key_usage" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage"></a>

```python
extended_key_usage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage"></a>

```python
key_usage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList</a>

---

##### `validity_in_months`<sup>Required</sup> <a name="validity_in_months" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths"></a>

```python
validity_in_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames">dns_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails">emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns">upns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_names`<sup>Required</sup> <a name="dns_names" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames"></a>

```python
dns_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails"></a>

```python
emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `upns`<sup>Required</sup> <a name="upns" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns"></a>

```python
upns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---


### DataAzurermKeyVaultCertificateTimeoutsOutputReference <a name="DataAzurermKeyVaultCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate

dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermKeyVaultCertificateTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a>

---



