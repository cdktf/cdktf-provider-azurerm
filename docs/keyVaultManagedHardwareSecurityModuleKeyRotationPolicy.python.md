# `keyVaultManagedHardwareSecurityModuleKeyRotationPolicy` Submodule <a name="`keyVaultManagedHardwareSecurityModuleKeyRotationPolicy` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy <a name="KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy azurerm_key_vault_managed_hardware_security_module_key_rotation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_key_rotation_policy

keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expire_after: str,
  managed_hsm_key_id: str,
  id: str = None,
  time_after_creation: str = None,
  time_before_expiry: str = None,
  timeouts: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.expireAfter">expire_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#expire_after KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#expire_after}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.managedHsmKeyId">managed_hsm_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#managed_hsm_key_id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#managed_hsm_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeAfterCreation">time_after_creation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_after_creation KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_after_creation}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeBeforeExpiry">time_before_expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_before_expiry KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_before_expiry}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expire_after`<sup>Required</sup> <a name="expire_after" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.expireAfter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#expire_after KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#expire_after}.

---

##### `managed_hsm_key_id`<sup>Required</sup> <a name="managed_hsm_key_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.managedHsmKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#managed_hsm_key_id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#managed_hsm_key_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_after_creation`<sup>Optional</sup> <a name="time_after_creation" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeAfterCreation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_after_creation KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_after_creation}.

---

##### `time_before_expiry`<sup>Optional</sup> <a name="time_before_expiry" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeBeforeExpiry"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_before_expiry KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_before_expiry}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#timeouts KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeAfterCreation">reset_time_after_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeBeforeExpiry">reset_time_before_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#create KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#delete KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#read KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#update KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_after_creation` <a name="reset_time_after_creation" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeAfterCreation"></a>

```python
def reset_time_after_creation() -> None
```

##### `reset_time_before_expiry` <a name="reset_time_before_expiry" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeBeforeExpiry"></a>

```python
def reset_time_before_expiry() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_key_rotation_policy

keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_key_rotation_policy

keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_key_rotation_policy

keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_key_rotation_policy

keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.expireAfterInput">expire_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.managedHsmKeyIdInput">managed_hsm_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeAfterCreationInput">time_after_creation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeBeforeExpiryInput">time_before_expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.expireAfter">expire_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.managedHsmKeyId">managed_hsm_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeAfterCreation">time_after_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeBeforeExpiry">time_before_expiry</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeouts"></a>

```python
timeouts: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference</a>

---

##### `expire_after_input`<sup>Optional</sup> <a name="expire_after_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.expireAfterInput"></a>

```python
expire_after_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_hsm_key_id_input`<sup>Optional</sup> <a name="managed_hsm_key_id_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.managedHsmKeyIdInput"></a>

```python
managed_hsm_key_id_input: str
```

- *Type:* str

---

##### `time_after_creation_input`<sup>Optional</sup> <a name="time_after_creation_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeAfterCreationInput"></a>

```python
time_after_creation_input: str
```

- *Type:* str

---

##### `time_before_expiry_input`<sup>Optional</sup> <a name="time_before_expiry_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeBeforeExpiryInput"></a>

```python
time_before_expiry_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>]

---

##### `expire_after`<sup>Required</sup> <a name="expire_after" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_hsm_key_id`<sup>Required</sup> <a name="managed_hsm_key_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.managedHsmKeyId"></a>

```python
managed_hsm_key_id: str
```

- *Type:* str

---

##### `time_after_creation`<sup>Required</sup> <a name="time_after_creation" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeAfterCreation"></a>

```python
time_after_creation: str
```

- *Type:* str

---

##### `time_before_expiry`<sup>Required</sup> <a name="time_before_expiry" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeBeforeExpiry"></a>

```python
time_before_expiry: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig <a name="KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_key_rotation_policy

keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expire_after: str,
  managed_hsm_key_id: str,
  id: str = None,
  time_after_creation: str = None,
  time_before_expiry: str = None,
  timeouts: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.expireAfter">expire_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#expire_after KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#expire_after}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.managedHsmKeyId">managed_hsm_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#managed_hsm_key_id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#managed_hsm_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeAfterCreation">time_after_creation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_after_creation KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_after_creation}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeBeforeExpiry">time_before_expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_before_expiry KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_before_expiry}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expire_after`<sup>Required</sup> <a name="expire_after" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#expire_after KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#expire_after}.

---

##### `managed_hsm_key_id`<sup>Required</sup> <a name="managed_hsm_key_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.managedHsmKeyId"></a>

```python
managed_hsm_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#managed_hsm_key_id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#managed_hsm_key_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_after_creation`<sup>Optional</sup> <a name="time_after_creation" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeAfterCreation"></a>

```python
time_after_creation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_after_creation KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_after_creation}.

---

##### `time_before_expiry`<sup>Optional</sup> <a name="time_before_expiry" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeBeforeExpiry"></a>

```python
time_before_expiry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_before_expiry KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_before_expiry}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeouts"></a>

```python
timeouts: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#timeouts KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts <a name="KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_key_rotation_policy

keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#create KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#delete KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#read KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#update KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#create KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#delete KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#read KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#update KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_key_rotation_policy

keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>]

---



