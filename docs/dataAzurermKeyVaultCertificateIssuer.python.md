# `data_azurerm_key_vault_certificate_issuer`

Refer to the Terraform Registory for docs: [`data_azurerm_key_vault_certificate_issuer`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer).

# `dataAzurermKeyVaultCertificateIssuer` Submodule <a name="`dataAzurermKeyVaultCertificateIssuer` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultCertificateIssuer <a name="DataAzurermKeyVaultCertificateIssuer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer azurerm_key_vault_certificate_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_vault_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermKeyVaultCertificateIssuerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#key_vault_id DataAzurermKeyVaultCertificateIssuer#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#name DataAzurermKeyVaultCertificateIssuer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#id DataAzurermKeyVaultCertificateIssuer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#key_vault_id DataAzurermKeyVaultCertificateIssuer#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#name DataAzurermKeyVaultCertificateIssuer#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#id DataAzurermKeyVaultCertificateIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#timeouts DataAzurermKeyVaultCertificateIssuer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#read DataAzurermKeyVaultCertificateIssuer#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.admin">admin</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList">DataAzurermKeyVaultCertificateIssuerAdminList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference">DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.admin"></a>

```python
admin: DataAzurermKeyVaultCertificateIssuerAdminList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList">DataAzurermKeyVaultCertificateIssuerAdminList</a>

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference">DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermKeyVaultCertificateIssuerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultCertificateIssuerAdmin <a name="DataAzurermKeyVaultCertificateIssuerAdmin" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdmin.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdmin()
```


### DataAzurermKeyVaultCertificateIssuerConfig <a name="DataAzurermKeyVaultCertificateIssuerConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_vault_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermKeyVaultCertificateIssuerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#key_vault_id DataAzurermKeyVaultCertificateIssuer#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#name DataAzurermKeyVaultCertificateIssuer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#id DataAzurermKeyVaultCertificateIssuer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#key_vault_id DataAzurermKeyVaultCertificateIssuer#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#name DataAzurermKeyVaultCertificateIssuer#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#id DataAzurermKeyVaultCertificateIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultCertificateIssuerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#timeouts DataAzurermKeyVaultCertificateIssuer#timeouts}

---

### DataAzurermKeyVaultCertificateIssuerTimeouts <a name="DataAzurermKeyVaultCertificateIssuerTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#read DataAzurermKeyVaultCertificateIssuer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/key_vault_certificate_issuer#read DataAzurermKeyVaultCertificateIssuer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultCertificateIssuerAdminList <a name="DataAzurermKeyVaultCertificateIssuerAdminList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificateIssuerAdminOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificateIssuerAdminOutputReference <a name="DataAzurermKeyVaultCertificateIssuerAdminOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdmin">DataAzurermKeyVaultCertificateIssuerAdmin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificateIssuerAdmin
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdmin">DataAzurermKeyVaultCertificateIssuerAdmin</a>

---


### DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference <a name="DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_certificate_issuer

dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermKeyVaultCertificateIssuerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a>]

---



