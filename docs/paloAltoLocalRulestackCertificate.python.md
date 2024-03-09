# `paloAltoLocalRulestackCertificate` Submodule <a name="`paloAltoLocalRulestackCertificate` Submodule" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestackCertificate <a name="PaloAltoLocalRulestackCertificate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate azurerm_palo_alto_local_rulestack_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_certificate

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate(
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
  rulestack_id: str,
  audit_comment: str = None,
  description: str = None,
  id: str = None,
  key_vault_certificate_id: str = None,
  self_signed: typing.Union[bool, IResolvable] = None,
  timeouts: PaloAltoLocalRulestackCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#name PaloAltoLocalRulestackCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.rulestackId">rulestack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#rulestack_id PaloAltoLocalRulestackCertificate#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.auditComment">audit_comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#audit_comment PaloAltoLocalRulestackCertificate#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#description PaloAltoLocalRulestackCertificate#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#id PaloAltoLocalRulestackCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.keyVaultCertificateId">key_vault_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#key_vault_certificate_id PaloAltoLocalRulestackCertificate#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.selfSigned">self_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#self_signed PaloAltoLocalRulestackCertificate#self_signed}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#name PaloAltoLocalRulestackCertificate#name}.

---

##### `rulestack_id`<sup>Required</sup> <a name="rulestack_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.rulestackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#rulestack_id PaloAltoLocalRulestackCertificate#rulestack_id}.

---

##### `audit_comment`<sup>Optional</sup> <a name="audit_comment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.auditComment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#audit_comment PaloAltoLocalRulestackCertificate#audit_comment}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#description PaloAltoLocalRulestackCertificate#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#id PaloAltoLocalRulestackCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault_certificate_id`<sup>Optional</sup> <a name="key_vault_certificate_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.keyVaultCertificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#key_vault_certificate_id PaloAltoLocalRulestackCertificate#key_vault_certificate_id}.

---

##### `self_signed`<sup>Optional</sup> <a name="self_signed" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.selfSigned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#self_signed PaloAltoLocalRulestackCertificate#self_signed}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#timeouts PaloAltoLocalRulestackCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetAuditComment">reset_audit_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetKeyVaultCertificateId">reset_key_vault_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetSelfSigned">reset_self_signed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#create PaloAltoLocalRulestackCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#delete PaloAltoLocalRulestackCertificate#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#read PaloAltoLocalRulestackCertificate#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#update PaloAltoLocalRulestackCertificate#update}.

---

##### `reset_audit_comment` <a name="reset_audit_comment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetAuditComment"></a>

```python
def reset_audit_comment() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_vault_certificate_id` <a name="reset_key_vault_certificate_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetKeyVaultCertificateId"></a>

```python
def reset_key_vault_certificate_id() -> None
```

##### `reset_self_signed` <a name="reset_self_signed" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetSelfSigned"></a>

```python
def reset_self_signed() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PaloAltoLocalRulestackCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_certificate

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_certificate

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_certificate

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_certificate

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PaloAltoLocalRulestackCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PaloAltoLocalRulestackCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PaloAltoLocalRulestackCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoLocalRulestackCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference">PaloAltoLocalRulestackCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditCommentInput">audit_comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateIdInput">key_vault_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackIdInput">rulestack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSignedInput">self_signed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditComment">audit_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateId">key_vault_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackId">rulestack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSigned">self_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeouts"></a>

```python
timeouts: PaloAltoLocalRulestackCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference">PaloAltoLocalRulestackCertificateTimeoutsOutputReference</a>

---

##### `audit_comment_input`<sup>Optional</sup> <a name="audit_comment_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditCommentInput"></a>

```python
audit_comment_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_certificate_id_input`<sup>Optional</sup> <a name="key_vault_certificate_id_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateIdInput"></a>

```python
key_vault_certificate_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rulestack_id_input`<sup>Optional</sup> <a name="rulestack_id_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackIdInput"></a>

```python
rulestack_id_input: str
```

- *Type:* str

---

##### `self_signed_input`<sup>Optional</sup> <a name="self_signed_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSignedInput"></a>

```python
self_signed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PaloAltoLocalRulestackCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>]

---

##### `audit_comment`<sup>Required</sup> <a name="audit_comment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditComment"></a>

```python
audit_comment: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_certificate_id`<sup>Required</sup> <a name="key_vault_certificate_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateId"></a>

```python
key_vault_certificate_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rulestack_id`<sup>Required</sup> <a name="rulestack_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackId"></a>

```python
rulestack_id: str
```

- *Type:* str

---

##### `self_signed`<sup>Required</sup> <a name="self_signed" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSigned"></a>

```python
self_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackCertificateConfig <a name="PaloAltoLocalRulestackCertificateConfig" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_certificate

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rulestack_id: str,
  audit_comment: str = None,
  description: str = None,
  id: str = None,
  key_vault_certificate_id: str = None,
  self_signed: typing.Union[bool, IResolvable] = None,
  timeouts: PaloAltoLocalRulestackCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#name PaloAltoLocalRulestackCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.rulestackId">rulestack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#rulestack_id PaloAltoLocalRulestackCertificate#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.auditComment">audit_comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#audit_comment PaloAltoLocalRulestackCertificate#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#description PaloAltoLocalRulestackCertificate#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#id PaloAltoLocalRulestackCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.keyVaultCertificateId">key_vault_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#key_vault_certificate_id PaloAltoLocalRulestackCertificate#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.selfSigned">self_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#self_signed PaloAltoLocalRulestackCertificate#self_signed}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#name PaloAltoLocalRulestackCertificate#name}.

---

##### `rulestack_id`<sup>Required</sup> <a name="rulestack_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.rulestackId"></a>

```python
rulestack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#rulestack_id PaloAltoLocalRulestackCertificate#rulestack_id}.

---

##### `audit_comment`<sup>Optional</sup> <a name="audit_comment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.auditComment"></a>

```python
audit_comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#audit_comment PaloAltoLocalRulestackCertificate#audit_comment}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#description PaloAltoLocalRulestackCertificate#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#id PaloAltoLocalRulestackCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault_certificate_id`<sup>Optional</sup> <a name="key_vault_certificate_id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.keyVaultCertificateId"></a>

```python
key_vault_certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#key_vault_certificate_id PaloAltoLocalRulestackCertificate#key_vault_certificate_id}.

---

##### `self_signed`<sup>Optional</sup> <a name="self_signed" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.selfSigned"></a>

```python
self_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#self_signed PaloAltoLocalRulestackCertificate#self_signed}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.timeouts"></a>

```python
timeouts: PaloAltoLocalRulestackCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#timeouts PaloAltoLocalRulestackCertificate#timeouts}

---

### PaloAltoLocalRulestackCertificateTimeouts <a name="PaloAltoLocalRulestackCertificateTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_certificate

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#create PaloAltoLocalRulestackCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#delete PaloAltoLocalRulestackCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#read PaloAltoLocalRulestackCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#update PaloAltoLocalRulestackCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#create PaloAltoLocalRulestackCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#delete PaloAltoLocalRulestackCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#read PaloAltoLocalRulestackCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/palo_alto_local_rulestack_certificate#update PaloAltoLocalRulestackCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackCertificateTimeoutsOutputReference <a name="PaloAltoLocalRulestackCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import palo_alto_local_rulestack_certificate

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PaloAltoLocalRulestackCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>]

---



