# `keyVaultCertificate` Submodule <a name="`keyVaultCertificate` Submodule" id="@cdktf/provider-azurerm.keyVaultCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultCertificate <a name="KeyVaultCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate azurerm_key_vault_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificate(
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
  certificate: KeyVaultCertificateCertificate = None,
  certificate_policy: KeyVaultCertificateCertificatePolicy = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: KeyVaultCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_vault_id KeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.certificatePolicy">certificate_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | certificate_policy block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#id KeyVaultCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#tags KeyVaultCertificate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_vault_id KeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.certificate"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#certificate KeyVaultCertificate#certificate}

---

##### `certificate_policy`<sup>Optional</sup> <a name="certificate_policy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.certificatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

certificate_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#certificate_policy KeyVaultCertificate#certificate_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#id KeyVaultCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#tags KeyVaultCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#timeouts KeyVaultCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate">put_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy">put_certificate_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificatePolicy">reset_certificate_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate"></a>

```python
def put_certificate(
  contents: str,
  password: str = None
) -> None
```

###### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate.parameter.contents"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#contents KeyVaultCertificate#contents}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#password KeyVaultCertificate#password}.

---

##### `put_certificate_policy` <a name="put_certificate_policy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy"></a>

```python
def put_certificate_policy(
  issuer_parameters: KeyVaultCertificateCertificatePolicyIssuerParameters,
  key_properties: KeyVaultCertificateCertificatePolicyKeyProperties,
  secret_properties: KeyVaultCertificateCertificatePolicySecretProperties,
  lifetime_action: typing.Union[IResolvable, typing.List[KeyVaultCertificateCertificatePolicyLifetimeAction]] = None,
  x509_certificate_properties: KeyVaultCertificateCertificatePolicyX509CertificateProperties = None
) -> None
```

###### `issuer_parameters`<sup>Required</sup> <a name="issuer_parameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy.parameter.issuerParameters"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

issuer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#issuer_parameters KeyVaultCertificate#issuer_parameters}

---

###### `key_properties`<sup>Required</sup> <a name="key_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy.parameter.keyProperties"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_properties KeyVaultCertificate#key_properties}

---

###### `secret_properties`<sup>Required</sup> <a name="secret_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy.parameter.secretProperties"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

secret_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#secret_properties KeyVaultCertificate#secret_properties}

---

###### `lifetime_action`<sup>Optional</sup> <a name="lifetime_action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy.parameter.lifetimeAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]]

lifetime_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#lifetime_action KeyVaultCertificate#lifetime_action}

---

###### `x509_certificate_properties`<sup>Optional</sup> <a name="x509_certificate_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy.parameter.x509CertificateProperties"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

x509_certificate_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#x509_certificate_properties KeyVaultCertificate#x509_certificate_properties}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#create KeyVaultCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#delete KeyVaultCertificate#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#read KeyVaultCertificate#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#update KeyVaultCertificate#update}.

---

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_certificate_policy` <a name="reset_certificate_policy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificatePolicy"></a>

```python
def reset_certificate_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KeyVaultCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KeyVaultCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeyVaultCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeyVaultCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference">KeyVaultCertificateCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateAttribute">certificate_attribute</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList">KeyVaultCertificateCertificateAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateData">certificate_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateDataBase64">certificate_data_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicy">certificate_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference">KeyVaultCertificateCertificatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerId">resource_manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerVersionlessId">resource_manager_versionless_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference">KeyVaultCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessId">versionless_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessSecretId">versionless_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateInput">certificate_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicyInput">certificate_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificate"></a>

```python
certificate: KeyVaultCertificateCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference">KeyVaultCertificateCertificateOutputReference</a>

---

##### `certificate_attribute`<sup>Required</sup> <a name="certificate_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateAttribute"></a>

```python
certificate_attribute: KeyVaultCertificateCertificateAttributeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList">KeyVaultCertificateCertificateAttributeList</a>

---

##### `certificate_data`<sup>Required</sup> <a name="certificate_data" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateData"></a>

```python
certificate_data: str
```

- *Type:* str

---

##### `certificate_data_base64`<sup>Required</sup> <a name="certificate_data_base64" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateDataBase64"></a>

```python
certificate_data_base64: str
```

- *Type:* str

---

##### `certificate_policy`<sup>Required</sup> <a name="certificate_policy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicy"></a>

```python
certificate_policy: KeyVaultCertificateCertificatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference">KeyVaultCertificateCertificatePolicyOutputReference</a>

---

##### `resource_manager_id`<sup>Required</sup> <a name="resource_manager_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerId"></a>

```python
resource_manager_id: str
```

- *Type:* str

---

##### `resource_manager_versionless_id`<sup>Required</sup> <a name="resource_manager_versionless_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerVersionlessId"></a>

```python
resource_manager_versionless_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeouts"></a>

```python
timeouts: KeyVaultCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference">KeyVaultCertificateTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `versionless_id`<sup>Required</sup> <a name="versionless_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessId"></a>

```python
versionless_id: str
```

- *Type:* str

---

##### `versionless_secret_id`<sup>Required</sup> <a name="versionless_secret_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessSecretId"></a>

```python
versionless_secret_id: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateInput"></a>

```python
certificate_input: KeyVaultCertificateCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

---

##### `certificate_policy_input`<sup>Optional</sup> <a name="certificate_policy_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicyInput"></a>

```python
certificate_policy_input: KeyVaultCertificateCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeyVaultCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultCertificateCertificate <a name="KeyVaultCertificateCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificate(
  contents: str,
  password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.contents">contents</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#contents KeyVaultCertificate#contents}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#password KeyVaultCertificate#password}. |

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.contents"></a>

```python
contents: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#contents KeyVaultCertificate#contents}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#password KeyVaultCertificate#password}.

---

### KeyVaultCertificateCertificateAttribute <a name="KeyVaultCertificateCertificateAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificateAttribute()
```


### KeyVaultCertificateCertificatePolicy <a name="KeyVaultCertificateCertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicy(
  issuer_parameters: KeyVaultCertificateCertificatePolicyIssuerParameters,
  key_properties: KeyVaultCertificateCertificatePolicyKeyProperties,
  secret_properties: KeyVaultCertificateCertificatePolicySecretProperties,
  lifetime_action: typing.Union[IResolvable, typing.List[KeyVaultCertificateCertificatePolicyLifetimeAction]] = None,
  x509_certificate_properties: KeyVaultCertificateCertificatePolicyX509CertificateProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.issuerParameters">issuer_parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | issuer_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.keyProperties">key_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a></code> | key_properties block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.secretProperties">secret_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a></code> | secret_properties block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.lifetimeAction">lifetime_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]]</code> | lifetime_action block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.x509CertificateProperties">x509_certificate_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | x509_certificate_properties block. |

---

##### `issuer_parameters`<sup>Required</sup> <a name="issuer_parameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.issuerParameters"></a>

```python
issuer_parameters: KeyVaultCertificateCertificatePolicyIssuerParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

issuer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#issuer_parameters KeyVaultCertificate#issuer_parameters}

---

##### `key_properties`<sup>Required</sup> <a name="key_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.keyProperties"></a>

```python
key_properties: KeyVaultCertificateCertificatePolicyKeyProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_properties KeyVaultCertificate#key_properties}

---

##### `secret_properties`<sup>Required</sup> <a name="secret_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.secretProperties"></a>

```python
secret_properties: KeyVaultCertificateCertificatePolicySecretProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

secret_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#secret_properties KeyVaultCertificate#secret_properties}

---

##### `lifetime_action`<sup>Optional</sup> <a name="lifetime_action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.lifetimeAction"></a>

```python
lifetime_action: typing.Union[IResolvable, typing.List[KeyVaultCertificateCertificatePolicyLifetimeAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]]

lifetime_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#lifetime_action KeyVaultCertificate#lifetime_action}

---

##### `x509_certificate_properties`<sup>Optional</sup> <a name="x509_certificate_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.x509CertificateProperties"></a>

```python
x509_certificate_properties: KeyVaultCertificateCertificatePolicyX509CertificateProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

x509_certificate_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#x509_certificate_properties KeyVaultCertificate#x509_certificate_properties}

---

### KeyVaultCertificateCertificatePolicyIssuerParameters <a name="KeyVaultCertificateCertificatePolicyIssuerParameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}.

---

### KeyVaultCertificateCertificatePolicyKeyProperties <a name="KeyVaultCertificateCertificatePolicyKeyProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties(
  exportable: typing.Union[bool, IResolvable],
  key_type: str,
  reuse_key: typing.Union[bool, IResolvable],
  curve: str = None,
  key_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.exportable">exportable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#exportable KeyVaultCertificate#exportable}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keyType">key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_type KeyVaultCertificate#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.reuseKey">reuse_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#reuse_key KeyVaultCertificate#reuse_key}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.curve">curve</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#curve KeyVaultCertificate#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_size KeyVaultCertificate#key_size}. |

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.exportable"></a>

```python
exportable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#exportable KeyVaultCertificate#exportable}.

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_type KeyVaultCertificate#key_type}.

---

##### `reuse_key`<sup>Required</sup> <a name="reuse_key" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.reuseKey"></a>

```python
reuse_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#reuse_key KeyVaultCertificate#reuse_key}.

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.curve"></a>

```python
curve: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#curve KeyVaultCertificate#curve}.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_size KeyVaultCertificate#key_size}.

---

### KeyVaultCertificateCertificatePolicyLifetimeAction <a name="KeyVaultCertificateCertificatePolicyLifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction(
  action: KeyVaultCertificateCertificatePolicyLifetimeActionAction,
  trigger: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | trigger block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.action"></a>

```python
action: KeyVaultCertificateCertificatePolicyLifetimeActionAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#action KeyVaultCertificate#action}

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.trigger"></a>

```python
trigger: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#trigger KeyVaultCertificate#trigger}

---

### KeyVaultCertificateCertificatePolicyLifetimeActionAction <a name="KeyVaultCertificateCertificatePolicyLifetimeActionAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction(
  action_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#action_type KeyVaultCertificate#action_type}. |

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#action_type KeyVaultCertificate#action_type}.

---

### KeyVaultCertificateCertificatePolicyLifetimeActionTrigger <a name="KeyVaultCertificateCertificatePolicyLifetimeActionTrigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger(
  days_before_expiry: typing.Union[int, float] = None,
  lifetime_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.daysBeforeExpiry">days_before_expiry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#days_before_expiry KeyVaultCertificate#days_before_expiry}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.lifetimePercentage">lifetime_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#lifetime_percentage KeyVaultCertificate#lifetime_percentage}. |

---

##### `days_before_expiry`<sup>Optional</sup> <a name="days_before_expiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.daysBeforeExpiry"></a>

```python
days_before_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#days_before_expiry KeyVaultCertificate#days_before_expiry}.

---

##### `lifetime_percentage`<sup>Optional</sup> <a name="lifetime_percentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.lifetimePercentage"></a>

```python
lifetime_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#lifetime_percentage KeyVaultCertificate#lifetime_percentage}.

---

### KeyVaultCertificateCertificatePolicySecretProperties <a name="KeyVaultCertificateCertificatePolicySecretProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties(
  content_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#content_type KeyVaultCertificate#content_type}. |

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#content_type KeyVaultCertificate#content_type}.

---

### KeyVaultCertificateCertificatePolicyX509CertificateProperties <a name="KeyVaultCertificateCertificatePolicyX509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties(
  key_usage: typing.List[str],
  subject: str,
  validity_in_months: typing.Union[int, float],
  extended_key_usage: typing.List[str] = None,
  subject_alternative_names: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.keyUsage">key_usage</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_usage KeyVaultCertificate#key_usage}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#subject KeyVaultCertificate#subject}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.validityInMonths">validity_in_months</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#validity_in_months KeyVaultCertificate#validity_in_months}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.extendedKeyUsage">extended_key_usage</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#extended_key_usage KeyVaultCertificate#extended_key_usage}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | subject_alternative_names block. |

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.keyUsage"></a>

```python
key_usage: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_usage KeyVaultCertificate#key_usage}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#subject KeyVaultCertificate#subject}.

---

##### `validity_in_months`<sup>Required</sup> <a name="validity_in_months" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.validityInMonths"></a>

```python
validity_in_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#validity_in_months KeyVaultCertificate#validity_in_months}.

---

##### `extended_key_usage`<sup>Optional</sup> <a name="extended_key_usage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.extendedKeyUsage"></a>

```python
extended_key_usage: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#extended_key_usage KeyVaultCertificate#extended_key_usage}.

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#subject_alternative_names KeyVaultCertificate#subject_alternative_names}

---

### KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames <a name="KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames(
  dns_names: typing.List[str] = None,
  emails: typing.List[str] = None,
  upns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.dnsNames">dns_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#dns_names KeyVaultCertificate#dns_names}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.emails">emails</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#emails KeyVaultCertificate#emails}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.upns">upns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#upns KeyVaultCertificate#upns}. |

---

##### `dns_names`<sup>Optional</sup> <a name="dns_names" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.dnsNames"></a>

```python
dns_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#dns_names KeyVaultCertificate#dns_names}.

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.emails"></a>

```python
emails: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#emails KeyVaultCertificate#emails}.

---

##### `upns`<sup>Optional</sup> <a name="upns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.upns"></a>

```python
upns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#upns KeyVaultCertificate#upns}.

---

### KeyVaultCertificateConfig <a name="KeyVaultCertificateConfig" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_vault_id: str,
  name: str,
  certificate: KeyVaultCertificateCertificate = None,
  certificate_policy: KeyVaultCertificateCertificatePolicy = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: KeyVaultCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_vault_id KeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificatePolicy">certificate_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | certificate_policy block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#id KeyVaultCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#tags KeyVaultCertificate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_vault_id KeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificate"></a>

```python
certificate: KeyVaultCertificateCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#certificate KeyVaultCertificate#certificate}

---

##### `certificate_policy`<sup>Optional</sup> <a name="certificate_policy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificatePolicy"></a>

```python
certificate_policy: KeyVaultCertificateCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

certificate_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#certificate_policy KeyVaultCertificate#certificate_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#id KeyVaultCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#tags KeyVaultCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.timeouts"></a>

```python
timeouts: KeyVaultCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#timeouts KeyVaultCertificate#timeouts}

---

### KeyVaultCertificateTimeouts <a name="KeyVaultCertificateTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#create KeyVaultCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#delete KeyVaultCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#read KeyVaultCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#update KeyVaultCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#create KeyVaultCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#delete KeyVaultCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#read KeyVaultCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#update KeyVaultCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultCertificateCertificateAttributeList <a name="KeyVaultCertificateCertificateAttributeList" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificateAttributeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyVaultCertificateCertificateAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KeyVaultCertificateCertificateAttributeOutputReference <a name="KeyVaultCertificateCertificateAttributeOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.expires">expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.recoveryLevel">recovery_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute">KeyVaultCertificateCertificateAttribute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.expires"></a>

```python
expires: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

##### `recovery_level`<sup>Required</sup> <a name="recovery_level" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.recoveryLevel"></a>

```python
recovery_level: str
```

- *Type:* str

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificateAttribute
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute">KeyVaultCertificateCertificateAttribute</a>

---


### KeyVaultCertificateCertificateOutputReference <a name="KeyVaultCertificateCertificateOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resetPassword">reset_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contentsInput">contents_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contents">contents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contents_input`<sup>Optional</sup> <a name="contents_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contentsInput"></a>

```python
contents_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contents"></a>

```python
contents: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

---


### KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference <a name="KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificatePolicyIssuerParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

---


### KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference <a name="KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetCurve">reset_curve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetKeySize">reset_key_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_curve` <a name="reset_curve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetCurve"></a>

```python
def reset_curve() -> None
```

##### `reset_key_size` <a name="reset_key_size" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetKeySize"></a>

```python
def reset_key_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curveInput">curve_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportableInput">exportable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySizeInput">key_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKeyInput">reuse_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve">curve</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable">exportable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey">reuse_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `curve_input`<sup>Optional</sup> <a name="curve_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curveInput"></a>

```python
curve_input: str
```

- *Type:* str

---

##### `exportable_input`<sup>Optional</sup> <a name="exportable_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportableInput"></a>

```python
exportable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_size_input`<sup>Optional</sup> <a name="key_size_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySizeInput"></a>

```python
key_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `reuse_key_input`<sup>Optional</sup> <a name="reuse_key_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKeyInput"></a>

```python
reuse_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve"></a>

```python
curve: str
```

- *Type:* str

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable"></a>

```python
exportable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `reuse_key`<sup>Required</sup> <a name="reuse_key" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey"></a>

```python
reuse_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificatePolicyKeyProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

---


### KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference <a name="KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificatePolicyLifetimeActionAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---


### KeyVaultCertificateCertificatePolicyLifetimeActionList <a name="KeyVaultCertificateCertificatePolicyLifetimeActionList" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeyVaultCertificateCertificatePolicyLifetimeAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]]

---


### KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference <a name="KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger">put_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putAction"></a>

```python
def put_action(
  action_type: str
) -> None
```

###### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putAction.parameter.actionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#action_type KeyVaultCertificate#action_type}.

---

##### `put_trigger` <a name="put_trigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger"></a>

```python
def put_trigger(
  days_before_expiry: typing.Union[int, float] = None,
  lifetime_percentage: typing.Union[int, float] = None
) -> None
```

###### `days_before_expiry`<sup>Optional</sup> <a name="days_before_expiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger.parameter.daysBeforeExpiry"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#days_before_expiry KeyVaultCertificate#days_before_expiry}.

---

###### `lifetime_percentage`<sup>Optional</sup> <a name="lifetime_percentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger.parameter.lifetimePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#lifetime_percentage KeyVaultCertificate#lifetime_percentage}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.triggerInput">trigger_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action"></a>

```python
action: KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger"></a>

```python
trigger: KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.actionInput"></a>

```python
action_input: KeyVaultCertificateCertificatePolicyLifetimeActionAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.triggerInput"></a>

```python
trigger_input: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultCertificateCertificatePolicyLifetimeAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]

---


### KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference <a name="KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetDaysBeforeExpiry">reset_days_before_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetLifetimePercentage">reset_lifetime_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_before_expiry` <a name="reset_days_before_expiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetDaysBeforeExpiry"></a>

```python
def reset_days_before_expiry() -> None
```

##### `reset_lifetime_percentage` <a name="reset_lifetime_percentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetLifetimePercentage"></a>

```python
def reset_lifetime_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiryInput">days_before_expiry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentageInput">lifetime_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry">days_before_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage">lifetime_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_before_expiry_input`<sup>Optional</sup> <a name="days_before_expiry_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiryInput"></a>

```python
days_before_expiry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifetime_percentage_input`<sup>Optional</sup> <a name="lifetime_percentage_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentageInput"></a>

```python
lifetime_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_before_expiry`<sup>Required</sup> <a name="days_before_expiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry"></a>

```python
days_before_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifetime_percentage`<sup>Required</sup> <a name="lifetime_percentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage"></a>

```python
lifetime_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---


### KeyVaultCertificateCertificatePolicyOutputReference <a name="KeyVaultCertificateCertificatePolicyOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putIssuerParameters">put_issuer_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties">put_key_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putLifetimeAction">put_lifetime_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putSecretProperties">put_secret_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties">put_x509_certificate_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetLifetimeAction">reset_lifetime_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetX509CertificateProperties">reset_x509_certificate_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_issuer_parameters` <a name="put_issuer_parameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putIssuerParameters"></a>

```python
def put_issuer_parameters(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putIssuerParameters.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}.

---

##### `put_key_properties` <a name="put_key_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties"></a>

```python
def put_key_properties(
  exportable: typing.Union[bool, IResolvable],
  key_type: str,
  reuse_key: typing.Union[bool, IResolvable],
  curve: str = None,
  key_size: typing.Union[int, float] = None
) -> None
```

###### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties.parameter.exportable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#exportable KeyVaultCertificate#exportable}.

---

###### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties.parameter.keyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_type KeyVaultCertificate#key_type}.

---

###### `reuse_key`<sup>Required</sup> <a name="reuse_key" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties.parameter.reuseKey"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#reuse_key KeyVaultCertificate#reuse_key}.

---

###### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties.parameter.curve"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#curve KeyVaultCertificate#curve}.

---

###### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties.parameter.keySize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_size KeyVaultCertificate#key_size}.

---

##### `put_lifetime_action` <a name="put_lifetime_action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putLifetimeAction"></a>

```python
def put_lifetime_action(
  value: typing.Union[IResolvable, typing.List[KeyVaultCertificateCertificatePolicyLifetimeAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putLifetimeAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]]

---

##### `put_secret_properties` <a name="put_secret_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putSecretProperties"></a>

```python
def put_secret_properties(
  content_type: str
) -> None
```

###### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putSecretProperties.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#content_type KeyVaultCertificate#content_type}.

---

##### `put_x509_certificate_properties` <a name="put_x509_certificate_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties"></a>

```python
def put_x509_certificate_properties(
  key_usage: typing.List[str],
  subject: str,
  validity_in_months: typing.Union[int, float],
  extended_key_usage: typing.List[str] = None,
  subject_alternative_names: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames = None
) -> None
```

###### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties.parameter.keyUsage"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#key_usage KeyVaultCertificate#key_usage}.

---

###### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#subject KeyVaultCertificate#subject}.

---

###### `validity_in_months`<sup>Required</sup> <a name="validity_in_months" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties.parameter.validityInMonths"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#validity_in_months KeyVaultCertificate#validity_in_months}.

---

###### `extended_key_usage`<sup>Optional</sup> <a name="extended_key_usage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties.parameter.extendedKeyUsage"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#extended_key_usage KeyVaultCertificate#extended_key_usage}.

---

###### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties.parameter.subjectAlternativeNames"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#subject_alternative_names KeyVaultCertificate#subject_alternative_names}

---

##### `reset_lifetime_action` <a name="reset_lifetime_action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetLifetimeAction"></a>

```python
def reset_lifetime_action() -> None
```

##### `reset_x509_certificate_properties` <a name="reset_x509_certificate_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetX509CertificateProperties"></a>

```python
def reset_x509_certificate_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters">issuer_parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference">KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties">key_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference">KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction">lifetime_action</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList">KeyVaultCertificateCertificatePolicyLifetimeActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties">secret_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference">KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties">x509_certificate_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParametersInput">issuer_parameters_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyPropertiesInput">key_properties_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeActionInput">lifetime_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretPropertiesInput">secret_properties_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificatePropertiesInput">x509_certificate_properties_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issuer_parameters`<sup>Required</sup> <a name="issuer_parameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters"></a>

```python
issuer_parameters: KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference">KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference</a>

---

##### `key_properties`<sup>Required</sup> <a name="key_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties"></a>

```python
key_properties: KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference">KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference</a>

---

##### `lifetime_action`<sup>Required</sup> <a name="lifetime_action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction"></a>

```python
lifetime_action: KeyVaultCertificateCertificatePolicyLifetimeActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList">KeyVaultCertificateCertificatePolicyLifetimeActionList</a>

---

##### `secret_properties`<sup>Required</sup> <a name="secret_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties"></a>

```python
secret_properties: KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference">KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference</a>

---

##### `x509_certificate_properties`<sup>Required</sup> <a name="x509_certificate_properties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties"></a>

```python
x509_certificate_properties: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference</a>

---

##### `issuer_parameters_input`<sup>Optional</sup> <a name="issuer_parameters_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParametersInput"></a>

```python
issuer_parameters_input: KeyVaultCertificateCertificatePolicyIssuerParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

---

##### `key_properties_input`<sup>Optional</sup> <a name="key_properties_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyPropertiesInput"></a>

```python
key_properties_input: KeyVaultCertificateCertificatePolicyKeyProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

---

##### `lifetime_action_input`<sup>Optional</sup> <a name="lifetime_action_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeActionInput"></a>

```python
lifetime_action_input: typing.Union[IResolvable, typing.List[KeyVaultCertificateCertificatePolicyLifetimeAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction">KeyVaultCertificateCertificatePolicyLifetimeAction</a>]]

---

##### `secret_properties_input`<sup>Optional</sup> <a name="secret_properties_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretPropertiesInput"></a>

```python
secret_properties_input: KeyVaultCertificateCertificatePolicySecretProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

---

##### `x509_certificate_properties_input`<sup>Optional</sup> <a name="x509_certificate_properties_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificatePropertiesInput"></a>

```python
x509_certificate_properties_input: KeyVaultCertificateCertificatePolicyX509CertificateProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

---


### KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference <a name="KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificatePolicySecretProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

---


### KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference <a name="KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames">put_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetExtendedKeyUsage">reset_extended_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetSubjectAlternativeNames">reset_subject_alternative_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subject_alternative_names` <a name="put_subject_alternative_names" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames"></a>

```python
def put_subject_alternative_names(
  dns_names: typing.List[str] = None,
  emails: typing.List[str] = None,
  upns: typing.List[str] = None
) -> None
```

###### `dns_names`<sup>Optional</sup> <a name="dns_names" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames.parameter.dnsNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#dns_names KeyVaultCertificate#dns_names}.

---

###### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames.parameter.emails"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#emails KeyVaultCertificate#emails}.

---

###### `upns`<sup>Optional</sup> <a name="upns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames.parameter.upns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/key_vault_certificate#upns KeyVaultCertificate#upns}.

---

##### `reset_extended_key_usage` <a name="reset_extended_key_usage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetExtendedKeyUsage"></a>

```python
def reset_extended_key_usage() -> None
```

##### `reset_subject_alternative_names` <a name="reset_subject_alternative_names" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetSubjectAlternativeNames"></a>

```python
def reset_subject_alternative_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsageInput">extended_key_usage_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsageInput">key_usage_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNamesInput">subject_alternative_names_input</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonthsInput">validity_in_months_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage">extended_key_usage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage">key_usage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths">validity_in_months</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference</a>

---

##### `extended_key_usage_input`<sup>Optional</sup> <a name="extended_key_usage_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsageInput"></a>

```python
extended_key_usage_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_usage_input`<sup>Optional</sup> <a name="key_usage_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsageInput"></a>

```python
key_usage_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_alternative_names_input`<sup>Optional</sup> <a name="subject_alternative_names_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNamesInput"></a>

```python
subject_alternative_names_input: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `validity_in_months_input`<sup>Optional</sup> <a name="validity_in_months_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonthsInput"></a>

```python
validity_in_months_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extended_key_usage`<sup>Required</sup> <a name="extended_key_usage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage"></a>

```python
extended_key_usage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage"></a>

```python
key_usage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `validity_in_months`<sup>Required</sup> <a name="validity_in_months" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths"></a>

```python
validity_in_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificatePolicyX509CertificateProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---


### KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference <a name="KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetDnsNames">reset_dns_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetEmails">reset_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetUpns">reset_upns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_names` <a name="reset_dns_names" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetDnsNames"></a>

```python
def reset_dns_names() -> None
```

##### `reset_emails` <a name="reset_emails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetEmails"></a>

```python
def reset_emails() -> None
```

##### `reset_upns` <a name="reset_upns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetUpns"></a>

```python
def reset_upns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNamesInput">dns_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emailsInput">emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upnsInput">upns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames">dns_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails">emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns">upns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_names_input`<sup>Optional</sup> <a name="dns_names_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNamesInput"></a>

```python
dns_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `emails_input`<sup>Optional</sup> <a name="emails_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emailsInput"></a>

```python
emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `upns_input`<sup>Optional</sup> <a name="upns_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upnsInput"></a>

```python
upns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_names`<sup>Required</sup> <a name="dns_names" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames"></a>

```python
dns_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails"></a>

```python
emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `upns`<sup>Required</sup> <a name="upns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns"></a>

```python
upns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```python
internal_value: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---


### KeyVaultCertificateTimeoutsOutputReference <a name="KeyVaultCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate

keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>]

---



