# `virtualMachineExtension` Submodule <a name="`virtualMachineExtension` Submodule" id="@cdktf/provider-azurerm.virtualMachineExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineExtension <a name="VirtualMachineExtension" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension azurerm_virtual_machine_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtension(
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
  publisher: str,
  type: str,
  type_handler_version: str,
  virtual_machine_id: str,
  automatic_upgrade_enabled: typing.Union[bool, IResolvable] = None,
  auto_upgrade_minor_version: typing.Union[bool, IResolvable] = None,
  failure_suppression_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  protected_settings: str = None,
  protected_settings_from_key_vault: VirtualMachineExtensionProtectedSettingsFromKeyVault = None,
  provision_after_extensions: typing.List[str] = None,
  settings: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualMachineExtensionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#name VirtualMachineExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#publisher VirtualMachineExtension#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#type VirtualMachineExtension#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#type_handler_version VirtualMachineExtension#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#virtual_machine_id VirtualMachineExtension#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.automaticUpgradeEnabled">automatic_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#automatic_upgrade_enabled VirtualMachineExtension#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#auto_upgrade_minor_version VirtualMachineExtension#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.failureSuppressionEnabled">failure_suppression_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#failure_suppression_enabled VirtualMachineExtension#failure_suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#id VirtualMachineExtension#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.protectedSettings">protected_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#protected_settings VirtualMachineExtension#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.protectedSettingsFromKeyVault">protected_settings_from_key_vault</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault">VirtualMachineExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#provision_after_extensions VirtualMachineExtension#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.settings">settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#settings VirtualMachineExtension#settings}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#tags VirtualMachineExtension#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#name VirtualMachineExtension#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#publisher VirtualMachineExtension#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#type VirtualMachineExtension#type}.

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.typeHandlerVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#type_handler_version VirtualMachineExtension#type_handler_version}.

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.virtualMachineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#virtual_machine_id VirtualMachineExtension#virtual_machine_id}.

---

##### `automatic_upgrade_enabled`<sup>Optional</sup> <a name="automatic_upgrade_enabled" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.automaticUpgradeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#automatic_upgrade_enabled VirtualMachineExtension#automatic_upgrade_enabled}.

---

##### `auto_upgrade_minor_version`<sup>Optional</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.autoUpgradeMinorVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#auto_upgrade_minor_version VirtualMachineExtension#auto_upgrade_minor_version}.

---

##### `failure_suppression_enabled`<sup>Optional</sup> <a name="failure_suppression_enabled" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.failureSuppressionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#failure_suppression_enabled VirtualMachineExtension#failure_suppression_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#id VirtualMachineExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protected_settings`<sup>Optional</sup> <a name="protected_settings" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.protectedSettings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#protected_settings VirtualMachineExtension#protected_settings}.

---

##### `protected_settings_from_key_vault`<sup>Optional</sup> <a name="protected_settings_from_key_vault" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.protectedSettingsFromKeyVault"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault">VirtualMachineExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#protected_settings_from_key_vault VirtualMachineExtension#protected_settings_from_key_vault}

---

##### `provision_after_extensions`<sup>Optional</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.provisionAfterExtensions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#provision_after_extensions VirtualMachineExtension#provision_after_extensions}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.settings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#settings VirtualMachineExtension#settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#tags VirtualMachineExtension#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#timeouts VirtualMachineExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putProtectedSettingsFromKeyVault">put_protected_settings_from_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetAutomaticUpgradeEnabled">reset_automatic_upgrade_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetAutoUpgradeMinorVersion">reset_auto_upgrade_minor_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetFailureSuppressionEnabled">reset_failure_suppression_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetProtectedSettings">reset_protected_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetProtectedSettingsFromKeyVault">reset_protected_settings_from_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetProvisionAfterExtensions">reset_provision_after_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_protected_settings_from_key_vault` <a name="put_protected_settings_from_key_vault" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putProtectedSettingsFromKeyVault"></a>

```python
def put_protected_settings_from_key_vault(
  secret_url: str,
  source_vault_id: str
) -> None
```

###### `secret_url`<sup>Required</sup> <a name="secret_url" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putProtectedSettingsFromKeyVault.parameter.secretUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#secret_url VirtualMachineExtension#secret_url}.

---

###### `source_vault_id`<sup>Required</sup> <a name="source_vault_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putProtectedSettingsFromKeyVault.parameter.sourceVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#source_vault_id VirtualMachineExtension#source_vault_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#create VirtualMachineExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#delete VirtualMachineExtension#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#read VirtualMachineExtension#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#update VirtualMachineExtension#update}.

---

##### `reset_automatic_upgrade_enabled` <a name="reset_automatic_upgrade_enabled" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetAutomaticUpgradeEnabled"></a>

```python
def reset_automatic_upgrade_enabled() -> None
```

##### `reset_auto_upgrade_minor_version` <a name="reset_auto_upgrade_minor_version" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetAutoUpgradeMinorVersion"></a>

```python
def reset_auto_upgrade_minor_version() -> None
```

##### `reset_failure_suppression_enabled` <a name="reset_failure_suppression_enabled" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetFailureSuppressionEnabled"></a>

```python
def reset_failure_suppression_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_protected_settings` <a name="reset_protected_settings" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetProtectedSettings"></a>

```python
def reset_protected_settings() -> None
```

##### `reset_protected_settings_from_key_vault` <a name="reset_protected_settings_from_key_vault" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetProtectedSettingsFromKeyVault"></a>

```python
def reset_protected_settings_from_key_vault() -> None
```

##### `reset_provision_after_extensions` <a name="reset_provision_after_extensions" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetProvisionAfterExtensions"></a>

```python
def reset_provision_after_extensions() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachineExtension resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachineExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachineExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachineExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.protectedSettingsFromKeyVault">protected_settings_from_key_vault</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference">VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference">VirtualMachineExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.automaticUpgradeEnabledInput">automatic_upgrade_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.autoUpgradeMinorVersionInput">auto_upgrade_minor_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.failureSuppressionEnabledInput">failure_suppression_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.protectedSettingsFromKeyVaultInput">protected_settings_from_key_vault_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault">VirtualMachineExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.protectedSettingsInput">protected_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.provisionAfterExtensionsInput">provision_after_extensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.settingsInput">settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.typeHandlerVersionInput">type_handler_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.virtualMachineIdInput">virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.automaticUpgradeEnabled">automatic_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.failureSuppressionEnabled">failure_suppression_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.protectedSettings">protected_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.settings">settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `protected_settings_from_key_vault`<sup>Required</sup> <a name="protected_settings_from_key_vault" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.protectedSettingsFromKeyVault"></a>

```python
protected_settings_from_key_vault: VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference">VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.timeouts"></a>

```python
timeouts: VirtualMachineExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference">VirtualMachineExtensionTimeoutsOutputReference</a>

---

##### `automatic_upgrade_enabled_input`<sup>Optional</sup> <a name="automatic_upgrade_enabled_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.automaticUpgradeEnabledInput"></a>

```python
automatic_upgrade_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_minor_version_input`<sup>Optional</sup> <a name="auto_upgrade_minor_version_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.autoUpgradeMinorVersionInput"></a>

```python
auto_upgrade_minor_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failure_suppression_enabled_input`<sup>Optional</sup> <a name="failure_suppression_enabled_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.failureSuppressionEnabledInput"></a>

```python
failure_suppression_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protected_settings_from_key_vault_input`<sup>Optional</sup> <a name="protected_settings_from_key_vault_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.protectedSettingsFromKeyVaultInput"></a>

```python
protected_settings_from_key_vault_input: VirtualMachineExtensionProtectedSettingsFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault">VirtualMachineExtensionProtectedSettingsFromKeyVault</a>

---

##### `protected_settings_input`<sup>Optional</sup> <a name="protected_settings_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.protectedSettingsInput"></a>

```python
protected_settings_input: str
```

- *Type:* str

---

##### `provision_after_extensions_input`<sup>Optional</sup> <a name="provision_after_extensions_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.provisionAfterExtensionsInput"></a>

```python
provision_after_extensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.settingsInput"></a>

```python
settings_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualMachineExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>]

---

##### `type_handler_version_input`<sup>Optional</sup> <a name="type_handler_version_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.typeHandlerVersionInput"></a>

```python
type_handler_version_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `virtual_machine_id_input`<sup>Optional</sup> <a name="virtual_machine_id_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.virtualMachineIdInput"></a>

```python
virtual_machine_id_input: str
```

- *Type:* str

---

##### `automatic_upgrade_enabled`<sup>Required</sup> <a name="automatic_upgrade_enabled" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.automaticUpgradeEnabled"></a>

```python
automatic_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_minor_version`<sup>Required</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failure_suppression_enabled`<sup>Required</sup> <a name="failure_suppression_enabled" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.failureSuppressionEnabled"></a>

```python
failure_suppression_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected_settings`<sup>Required</sup> <a name="protected_settings" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

---

##### `provision_after_extensions`<sup>Required</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.provisionAfterExtensions"></a>

```python
provision_after_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.settings"></a>

```python
settings: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineExtensionConfig <a name="VirtualMachineExtensionConfig" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtensionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  publisher: str,
  type: str,
  type_handler_version: str,
  virtual_machine_id: str,
  automatic_upgrade_enabled: typing.Union[bool, IResolvable] = None,
  auto_upgrade_minor_version: typing.Union[bool, IResolvable] = None,
  failure_suppression_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  protected_settings: str = None,
  protected_settings_from_key_vault: VirtualMachineExtensionProtectedSettingsFromKeyVault = None,
  provision_after_extensions: typing.List[str] = None,
  settings: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualMachineExtensionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#name VirtualMachineExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#publisher VirtualMachineExtension#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#type VirtualMachineExtension#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#type_handler_version VirtualMachineExtension#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#virtual_machine_id VirtualMachineExtension#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.automaticUpgradeEnabled">automatic_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#automatic_upgrade_enabled VirtualMachineExtension#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#auto_upgrade_minor_version VirtualMachineExtension#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.failureSuppressionEnabled">failure_suppression_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#failure_suppression_enabled VirtualMachineExtension#failure_suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#id VirtualMachineExtension#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.protectedSettings">protected_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#protected_settings VirtualMachineExtension#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.protectedSettingsFromKeyVault">protected_settings_from_key_vault</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault">VirtualMachineExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#provision_after_extensions VirtualMachineExtension#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.settings">settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#settings VirtualMachineExtension#settings}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#tags VirtualMachineExtension#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#name VirtualMachineExtension#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#publisher VirtualMachineExtension#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#type VirtualMachineExtension#type}.

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#type_handler_version VirtualMachineExtension#type_handler_version}.

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#virtual_machine_id VirtualMachineExtension#virtual_machine_id}.

---

##### `automatic_upgrade_enabled`<sup>Optional</sup> <a name="automatic_upgrade_enabled" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.automaticUpgradeEnabled"></a>

```python
automatic_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#automatic_upgrade_enabled VirtualMachineExtension#automatic_upgrade_enabled}.

---

##### `auto_upgrade_minor_version`<sup>Optional</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#auto_upgrade_minor_version VirtualMachineExtension#auto_upgrade_minor_version}.

---

##### `failure_suppression_enabled`<sup>Optional</sup> <a name="failure_suppression_enabled" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.failureSuppressionEnabled"></a>

```python
failure_suppression_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#failure_suppression_enabled VirtualMachineExtension#failure_suppression_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#id VirtualMachineExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protected_settings`<sup>Optional</sup> <a name="protected_settings" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#protected_settings VirtualMachineExtension#protected_settings}.

---

##### `protected_settings_from_key_vault`<sup>Optional</sup> <a name="protected_settings_from_key_vault" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.protectedSettingsFromKeyVault"></a>

```python
protected_settings_from_key_vault: VirtualMachineExtensionProtectedSettingsFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault">VirtualMachineExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#protected_settings_from_key_vault VirtualMachineExtension#protected_settings_from_key_vault}

---

##### `provision_after_extensions`<sup>Optional</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.provisionAfterExtensions"></a>

```python
provision_after_extensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#provision_after_extensions VirtualMachineExtension#provision_after_extensions}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.settings"></a>

```python
settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#settings VirtualMachineExtension#settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#tags VirtualMachineExtension#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionConfig.property.timeouts"></a>

```python
timeouts: VirtualMachineExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#timeouts VirtualMachineExtension#timeouts}

---

### VirtualMachineExtensionProtectedSettingsFromKeyVault <a name="VirtualMachineExtensionProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault(
  secret_url: str,
  source_vault_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault.property.secretUrl">secret_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#secret_url VirtualMachineExtension#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault.property.sourceVaultId">source_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#source_vault_id VirtualMachineExtension#source_vault_id}. |

---

##### `secret_url`<sup>Required</sup> <a name="secret_url" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault.property.secretUrl"></a>

```python
secret_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#secret_url VirtualMachineExtension#secret_url}.

---

##### `source_vault_id`<sup>Required</sup> <a name="source_vault_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault.property.sourceVaultId"></a>

```python
source_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#source_vault_id VirtualMachineExtension#source_vault_id}.

---

### VirtualMachineExtensionTimeouts <a name="VirtualMachineExtensionTimeouts" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtensionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#create VirtualMachineExtension#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#delete VirtualMachineExtension#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#read VirtualMachineExtension#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#update VirtualMachineExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#create VirtualMachineExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#delete VirtualMachineExtension#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#read VirtualMachineExtension#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_extension#update VirtualMachineExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference <a name="VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput">secret_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput">source_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl">secret_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId">source_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault">VirtualMachineExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_url_input`<sup>Optional</sup> <a name="secret_url_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput"></a>

```python
secret_url_input: str
```

- *Type:* str

---

##### `source_vault_id_input`<sup>Optional</sup> <a name="source_vault_id_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput"></a>

```python
source_vault_id_input: str
```

- *Type:* str

---

##### `secret_url`<sup>Required</sup> <a name="secret_url" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl"></a>

```python
secret_url: str
```

- *Type:* str

---

##### `source_vault_id`<sup>Required</sup> <a name="source_vault_id" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId"></a>

```python
source_vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineExtensionProtectedSettingsFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionProtectedSettingsFromKeyVault">VirtualMachineExtensionProtectedSettingsFromKeyVault</a>

---


### VirtualMachineExtensionTimeoutsOutputReference <a name="VirtualMachineExtensionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_extension

virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineExtension.VirtualMachineExtensionTimeouts">VirtualMachineExtensionTimeouts</a>]

---



