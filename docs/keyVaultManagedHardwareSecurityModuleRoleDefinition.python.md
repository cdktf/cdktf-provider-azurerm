# `keyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule <a name="`keyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinition <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinition" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition azurerm_key_vault_managed_hardware_security_module_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_hsm_id: str,
  name: str,
  description: str = None,
  id: str = None,
  permission: typing.Union[IResolvable, typing.List[KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission]] = None,
  role_name: str = None,
  timeouts: KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.managedHsmId">managed_hsm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.permission">permission</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]]</code> | permission block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_hsm_id`<sup>Required</sup> <a name="managed_hsm_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.managedHsmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.permission"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]]

permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#permission KeyVaultManagedHardwareSecurityModuleRoleDefinition#permission}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.roleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#timeouts KeyVaultManagedHardwareSecurityModuleRoleDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission">put_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetPermission">reset_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetRoleName">reset_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_permission` <a name="put_permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission"></a>

```python
def put_permission(
  value: typing.Union[IResolvable, typing.List[KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#create KeyVaultManagedHardwareSecurityModuleRoleDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#delete KeyVaultManagedHardwareSecurityModuleRoleDefinition#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#read KeyVaultManagedHardwareSecurityModuleRoleDefinition#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#update KeyVaultManagedHardwareSecurityModuleRoleDefinition#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetPermission"></a>

```python
def reset_permission() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetRoleName"></a>

```python
def reset_role_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleRoleDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeyVaultManagedHardwareSecurityModuleRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission">permission</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId">resource_manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType">role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmIdInput">managed_hsm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permissionInput">permission_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmId">managed_hsm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission"></a>

```python
permission: KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a>

---

##### `resource_manager_id`<sup>Required</sup> <a name="resource_manager_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId"></a>

```python
resource_manager_id: str
```

- *Type:* str

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts"></a>

```python
timeouts: KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_hsm_id_input`<sup>Optional</sup> <a name="managed_hsm_id_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmIdInput"></a>

```python
managed_hsm_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permissionInput"></a>

```python
permission_input: typing.Union[IResolvable, typing.List[KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]]

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_hsm_id`<sup>Required</sup> <a name="managed_hsm_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmId"></a>

```python
managed_hsm_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_hsm_id: str,
  name: str,
  description: str = None,
  id: str = None,
  permission: typing.Union[IResolvable, typing.List[KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission]] = None,
  role_name: str = None,
  timeouts: KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.managedHsmId">managed_hsm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.permission">permission</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]]</code> | permission block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_hsm_id`<sup>Required</sup> <a name="managed_hsm_id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.managedHsmId"></a>

```python
managed_hsm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.permission"></a>

```python
permission: typing.Union[IResolvable, typing.List[KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]]

permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#permission KeyVaultManagedHardwareSecurityModuleRoleDefinition#permission}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts"></a>

```python
timeouts: KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#timeouts KeyVaultManagedHardwareSecurityModuleRoleDefinition#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission(
  actions: typing.List[str] = None,
  data_actions: typing.List[str] = None,
  not_actions: typing.List[str] = None,
  not_data_actions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.dataActions">data_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#data_actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notDataActions">not_data_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_data_actions}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#actions}.

---

##### `data_actions`<sup>Optional</sup> <a name="data_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.dataActions"></a>

```python
data_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#data_actions}.

---

##### `not_actions`<sup>Optional</sup> <a name="not_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_actions}.

---

##### `not_data_actions`<sup>Optional</sup> <a name="not_data_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notDataActions"></a>

```python
not_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_data_actions}.

---

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#create KeyVaultManagedHardwareSecurityModuleRoleDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#delete KeyVaultManagedHardwareSecurityModuleRoleDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#read KeyVaultManagedHardwareSecurityModuleRoleDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#update KeyVaultManagedHardwareSecurityModuleRoleDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#create KeyVaultManagedHardwareSecurityModuleRoleDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#delete KeyVaultManagedHardwareSecurityModuleRoleDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#read KeyVaultManagedHardwareSecurityModuleRoleDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#update KeyVaultManagedHardwareSecurityModuleRoleDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]]

---


### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetDataActions">reset_data_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotActions">reset_not_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotDataActions">reset_not_data_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_data_actions` <a name="reset_data_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetDataActions"></a>

```python
def reset_data_actions() -> None
```

##### `reset_not_actions` <a name="reset_not_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotActions"></a>

```python
def reset_not_actions() -> None
```

##### `reset_not_data_actions` <a name="reset_not_data_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotDataActions"></a>

```python
def reset_not_data_actions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActionsInput">data_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActionsInput">not_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActionsInput">not_data_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions">data_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions">not_data_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_actions_input`<sup>Optional</sup> <a name="data_actions_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActionsInput"></a>

```python
data_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_actions_input`<sup>Optional</sup> <a name="not_actions_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActionsInput"></a>

```python
not_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_data_actions_input`<sup>Optional</sup> <a name="not_data_actions_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActionsInput"></a>

```python
not_data_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_actions`<sup>Required</sup> <a name="data_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions"></a>

```python
data_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_actions`<sup>Required</sup> <a name="not_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_data_actions`<sup>Required</sup> <a name="not_data_actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions"></a>

```python
not_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>]

---


### KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_managed_hardware_security_module_role_definition

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>]

---



