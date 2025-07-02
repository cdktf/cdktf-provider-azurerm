# `keyVaultCertificateContacts` Submodule <a name="`keyVaultCertificateContacts` Submodule" id="@cdktf/provider-azurerm.keyVaultCertificateContacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultCertificateContacts <a name="KeyVaultCertificateContacts" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts azurerm_key_vault_certificate_contacts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContacts(
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
  contact: typing.Union[IResolvable, typing.List[KeyVaultCertificateContactsContact]] = None,
  id: str = None,
  timeouts: KeyVaultCertificateContactsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#key_vault_id KeyVaultCertificateContacts#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.contact">contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]]</code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#id KeyVaultCertificateContacts#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts">KeyVaultCertificateContactsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#key_vault_id KeyVaultCertificateContacts#key_vault_id}.

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.contact"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]]

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#contact KeyVaultCertificateContacts#contact}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#id KeyVaultCertificateContacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts">KeyVaultCertificateContactsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#timeouts KeyVaultCertificateContacts#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.putContact">put_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.resetContact">reset_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_contact` <a name="put_contact" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.putContact"></a>

```python
def put_contact(
  value: typing.Union[IResolvable, typing.List[KeyVaultCertificateContactsContact]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.putContact.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#create KeyVaultCertificateContacts#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#delete KeyVaultCertificateContacts#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#read KeyVaultCertificateContacts#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#update KeyVaultCertificateContacts#update}.

---

##### `reset_contact` <a name="reset_contact" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.resetContact"></a>

```python
def reset_contact() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KeyVaultCertificateContacts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContacts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContacts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContacts.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContacts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KeyVaultCertificateContacts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeyVaultCertificateContacts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeyVaultCertificateContacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultCertificateContacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList">KeyVaultCertificateContactsContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference">KeyVaultCertificateContactsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.contactInput">contact_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts">KeyVaultCertificateContactsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.contact"></a>

```python
contact: KeyVaultCertificateContactsContactList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList">KeyVaultCertificateContactsContactList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.timeouts"></a>

```python
timeouts: KeyVaultCertificateContactsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference">KeyVaultCertificateContactsTimeoutsOutputReference</a>

---

##### `contact_input`<sup>Optional</sup> <a name="contact_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.contactInput"></a>

```python
contact_input: typing.Union[IResolvable, typing.List[KeyVaultCertificateContactsContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeyVaultCertificateContactsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts">KeyVaultCertificateContactsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContacts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultCertificateContactsConfig <a name="KeyVaultCertificateContactsConfig" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContactsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_vault_id: str,
  contact: typing.Union[IResolvable, typing.List[KeyVaultCertificateContactsContact]] = None,
  id: str = None,
  timeouts: KeyVaultCertificateContactsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#key_vault_id KeyVaultCertificateContacts#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.contact">contact</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]]</code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#id KeyVaultCertificateContacts#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts">KeyVaultCertificateContactsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#key_vault_id KeyVaultCertificateContacts#key_vault_id}.

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.contact"></a>

```python
contact: typing.Union[IResolvable, typing.List[KeyVaultCertificateContactsContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]]

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#contact KeyVaultCertificateContacts#contact}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#id KeyVaultCertificateContacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsConfig.property.timeouts"></a>

```python
timeouts: KeyVaultCertificateContactsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts">KeyVaultCertificateContactsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#timeouts KeyVaultCertificateContacts#timeouts}

---

### KeyVaultCertificateContactsContact <a name="KeyVaultCertificateContactsContact" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContactsContact(
  email: str,
  name: str = None,
  phone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#email KeyVaultCertificateContacts#email}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#name KeyVaultCertificateContacts#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact.property.phone">phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#phone KeyVaultCertificateContacts#phone}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#email KeyVaultCertificateContacts#email}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#name KeyVaultCertificateContacts#name}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact.property.phone"></a>

```python
phone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#phone KeyVaultCertificateContacts#phone}.

---

### KeyVaultCertificateContactsTimeouts <a name="KeyVaultCertificateContactsTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#create KeyVaultCertificateContacts#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#delete KeyVaultCertificateContacts#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#read KeyVaultCertificateContacts#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#update KeyVaultCertificateContacts#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#create KeyVaultCertificateContacts#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#delete KeyVaultCertificateContacts#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#read KeyVaultCertificateContacts#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_certificate_contacts#update KeyVaultCertificateContacts#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultCertificateContactsContactList <a name="KeyVaultCertificateContactsContactList" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContactsContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyVaultCertificateContactsContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeyVaultCertificateContactsContact]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]]

---


### KeyVaultCertificateContactsContactOutputReference <a name="KeyVaultCertificateContactsContactOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.resetPhone">reset_phone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_phone` <a name="reset_phone" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.resetPhone"></a>

```python
def reset_phone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.phoneInput">phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phone_input`<sup>Optional</sup> <a name="phone_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.phoneInput"></a>

```python
phone_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContactOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultCertificateContactsContact]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsContact">KeyVaultCertificateContactsContact</a>]

---


### KeyVaultCertificateContactsTimeoutsOutputReference <a name="KeyVaultCertificateContactsTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_certificate_contacts

keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts">KeyVaultCertificateContactsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultCertificateContactsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultCertificateContacts.KeyVaultCertificateContactsTimeouts">KeyVaultCertificateContactsTimeouts</a>]

---



