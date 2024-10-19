# `dedicatedHardwareSecurityModule` Submodule <a name="`dedicatedHardwareSecurityModule` Submodule" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DedicatedHardwareSecurityModule <a name="DedicatedHardwareSecurityModule" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module azurerm_dedicated_hardware_security_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network_profile: DedicatedHardwareSecurityModuleNetworkProfile,
  resource_group_name: str,
  sku_name: str,
  id: str = None,
  management_network_profile: DedicatedHardwareSecurityModuleManagementNetworkProfile = None,
  stamp_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DedicatedHardwareSecurityModuleTimeouts = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.managementNetworkProfile">management_network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | management_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.stampId">stamp_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}.

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.networkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#network_profile DedicatedHardwareSecurityModule#network_profile}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_network_profile`<sup>Optional</sup> <a name="management_network_profile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.managementNetworkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

management_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#management_network_profile DedicatedHardwareSecurityModule#management_network_profile}

---

##### `stamp_id`<sup>Optional</sup> <a name="stamp_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.stampId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#timeouts DedicatedHardwareSecurityModule#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile">put_management_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile">put_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetManagementNetworkProfile">reset_management_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetStampId">reset_stamp_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_management_network_profile` <a name="put_management_network_profile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile"></a>

```python
def put_management_network_profile(
  network_interface_private_ip_addresses: typing.List[str],
  subnet_id: str
) -> None
```

###### `network_interface_private_ip_addresses`<sup>Required</sup> <a name="network_interface_private_ip_addresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile.parameter.networkInterfacePrivateIpAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}.

---

##### `put_network_profile` <a name="put_network_profile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile"></a>

```python
def put_network_profile(
  network_interface_private_ip_addresses: typing.List[str],
  subnet_id: str
) -> None
```

###### `network_interface_private_ip_addresses`<sup>Required</sup> <a name="network_interface_private_ip_addresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile.parameter.networkInterfacePrivateIpAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#create DedicatedHardwareSecurityModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#delete DedicatedHardwareSecurityModule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#read DedicatedHardwareSecurityModule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#update DedicatedHardwareSecurityModule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management_network_profile` <a name="reset_management_network_profile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetManagementNetworkProfile"></a>

```python
def reset_management_network_profile() -> None
```

##### `reset_stamp_id` <a name="reset_stamp_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetStampId"></a>

```python
def reset_stamp_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DedicatedHardwareSecurityModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DedicatedHardwareSecurityModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DedicatedHardwareSecurityModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DedicatedHardwareSecurityModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DedicatedHardwareSecurityModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfile">management_network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference">DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference">DedicatedHardwareSecurityModuleNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference">DedicatedHardwareSecurityModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfileInput">management_network_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfileInput">network_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampIdInput">stamp_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampId">stamp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_network_profile`<sup>Required</sup> <a name="management_network_profile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfile"></a>

```python
management_network_profile: DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference">DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference</a>

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfile"></a>

```python
network_profile: DedicatedHardwareSecurityModuleNetworkProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference">DedicatedHardwareSecurityModuleNetworkProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeouts"></a>

```python
timeouts: DedicatedHardwareSecurityModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference">DedicatedHardwareSecurityModuleTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `management_network_profile_input`<sup>Optional</sup> <a name="management_network_profile_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfileInput"></a>

```python
management_network_profile_input: DedicatedHardwareSecurityModuleManagementNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_profile_input`<sup>Optional</sup> <a name="network_profile_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfileInput"></a>

```python
network_profile_input: DedicatedHardwareSecurityModuleNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `stamp_id_input`<sup>Optional</sup> <a name="stamp_id_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampIdInput"></a>

```python
stamp_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DedicatedHardwareSecurityModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `stamp_id`<sup>Required</sup> <a name="stamp_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampId"></a>

```python
stamp_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DedicatedHardwareSecurityModuleConfig <a name="DedicatedHardwareSecurityModuleConfig" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network_profile: DedicatedHardwareSecurityModuleNetworkProfile,
  resource_group_name: str,
  sku_name: str,
  id: str = None,
  management_network_profile: DedicatedHardwareSecurityModuleManagementNetworkProfile = None,
  stamp_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DedicatedHardwareSecurityModuleTimeouts = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.managementNetworkProfile">management_network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | management_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.stampId">stamp_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}.

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.networkProfile"></a>

```python
network_profile: DedicatedHardwareSecurityModuleNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#network_profile DedicatedHardwareSecurityModule#network_profile}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_network_profile`<sup>Optional</sup> <a name="management_network_profile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.managementNetworkProfile"></a>

```python
management_network_profile: DedicatedHardwareSecurityModuleManagementNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

management_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#management_network_profile DedicatedHardwareSecurityModule#management_network_profile}

---

##### `stamp_id`<sup>Optional</sup> <a name="stamp_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.stampId"></a>

```python
stamp_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.timeouts"></a>

```python
timeouts: DedicatedHardwareSecurityModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#timeouts DedicatedHardwareSecurityModule#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}.

---

### DedicatedHardwareSecurityModuleManagementNetworkProfile <a name="DedicatedHardwareSecurityModuleManagementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile(
  network_interface_private_ip_addresses: typing.List[str],
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.networkInterfacePrivateIpAddresses">network_interface_private_ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}. |

---

##### `network_interface_private_ip_addresses`<sup>Required</sup> <a name="network_interface_private_ip_addresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.networkInterfacePrivateIpAddresses"></a>

```python
network_interface_private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}.

---

### DedicatedHardwareSecurityModuleNetworkProfile <a name="DedicatedHardwareSecurityModuleNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile(
  network_interface_private_ip_addresses: typing.List[str],
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.networkInterfacePrivateIpAddresses">network_interface_private_ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}. |

---

##### `network_interface_private_ip_addresses`<sup>Required</sup> <a name="network_interface_private_ip_addresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.networkInterfacePrivateIpAddresses"></a>

```python
network_interface_private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}.

---

### DedicatedHardwareSecurityModuleTimeouts <a name="DedicatedHardwareSecurityModuleTimeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#create DedicatedHardwareSecurityModule#create}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#delete DedicatedHardwareSecurityModule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#read DedicatedHardwareSecurityModule#read}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#update DedicatedHardwareSecurityModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#create DedicatedHardwareSecurityModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#delete DedicatedHardwareSecurityModule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#read DedicatedHardwareSecurityModule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/dedicated_hardware_security_module#update DedicatedHardwareSecurityModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference <a name="DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput">network_interface_private_ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses">network_interface_private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface_private_ip_addresses_input`<sup>Optional</sup> <a name="network_interface_private_ip_addresses_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput"></a>

```python
network_interface_private_ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `network_interface_private_ip_addresses`<sup>Required</sup> <a name="network_interface_private_ip_addresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses"></a>

```python
network_interface_private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.internalValue"></a>

```python
internal_value: DedicatedHardwareSecurityModuleManagementNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

---


### DedicatedHardwareSecurityModuleNetworkProfileOutputReference <a name="DedicatedHardwareSecurityModuleNetworkProfileOutputReference" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput">network_interface_private_ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses">network_interface_private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface_private_ip_addresses_input`<sup>Optional</sup> <a name="network_interface_private_ip_addresses_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput"></a>

```python
network_interface_private_ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `network_interface_private_ip_addresses`<sup>Required</sup> <a name="network_interface_private_ip_addresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses"></a>

```python
network_interface_private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.internalValue"></a>

```python
internal_value: DedicatedHardwareSecurityModuleNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

---


### DedicatedHardwareSecurityModuleTimeoutsOutputReference <a name="DedicatedHardwareSecurityModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dedicated_hardware_security_module

dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DedicatedHardwareSecurityModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>]

---



