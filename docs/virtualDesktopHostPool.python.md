# `virtualDesktopHostPool` Submodule <a name="`virtualDesktopHostPool` Submodule" id="@cdktf/provider-azurerm.virtualDesktopHostPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopHostPool <a name="VirtualDesktopHostPool" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool azurerm_virtual_desktop_host_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_type: str,
  location: str,
  name: str,
  resource_group_name: str,
  type: str,
  custom_rdp_properties: str = None,
  description: str = None,
  friendly_name: str = None,
  id: str = None,
  maximum_sessions_allowed: typing.Union[int, float] = None,
  personal_desktop_assignment_type: str = None,
  preferred_app_group_type: str = None,
  public_network_access: str = None,
  scheduled_agent_updates: VirtualDesktopHostPoolScheduledAgentUpdates = None,
  start_vm_on_connect: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualDesktopHostPoolTimeouts = None,
  validate_environment: typing.Union[bool, IResolvable] = None,
  vm_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.customRdpProperties">custom_rdp_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.friendlyName">friendly_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.maximumSessionsAllowed">maximum_sessions_allowed</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.personalDesktopAssignmentType">personal_desktop_assignment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.preferredAppGroupType">preferred_app_group_type</a></code> | <code>str</code> | Preferred App Group type to display. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#public_network_access VirtualDesktopHostPool#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.scheduledAgentUpdates">scheduled_agent_updates</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a></code> | scheduled_agent_updates block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.startVmOnConnect">start_vm_on_connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.validateEnvironment">validate_environment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.vmTemplate">vm_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#vm_template VirtualDesktopHostPool#vm_template}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.loadBalancerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}.

---

##### `custom_rdp_properties`<sup>Optional</sup> <a name="custom_rdp_properties" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.customRdpProperties"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}.

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.friendlyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_sessions_allowed`<sup>Optional</sup> <a name="maximum_sessions_allowed" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.maximumSessionsAllowed"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}.

---

##### `personal_desktop_assignment_type`<sup>Optional</sup> <a name="personal_desktop_assignment_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.personalDesktopAssignmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}.

---

##### `preferred_app_group_type`<sup>Optional</sup> <a name="preferred_app_group_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.preferredAppGroupType"></a>

- *Type:* str

Preferred App Group type to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#preferred_app_group_type VirtualDesktopHostPool#preferred_app_group_type}

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.publicNetworkAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#public_network_access VirtualDesktopHostPool#public_network_access}.

---

##### `scheduled_agent_updates`<sup>Optional</sup> <a name="scheduled_agent_updates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.scheduledAgentUpdates"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a>

scheduled_agent_updates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#scheduled_agent_updates VirtualDesktopHostPool#scheduled_agent_updates}

---

##### `start_vm_on_connect`<sup>Optional</sup> <a name="start_vm_on_connect" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.startVmOnConnect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#timeouts VirtualDesktopHostPool#timeouts}

---

##### `validate_environment`<sup>Optional</sup> <a name="validate_environment" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.validateEnvironment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}.

---

##### `vm_template`<sup>Optional</sup> <a name="vm_template" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.Initializer.parameter.vmTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#vm_template VirtualDesktopHostPool#vm_template}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putScheduledAgentUpdates">put_scheduled_agent_updates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetCustomRdpProperties">reset_custom_rdp_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetMaximumSessionsAllowed">reset_maximum_sessions_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPersonalDesktopAssignmentType">reset_personal_desktop_assignment_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPreferredAppGroupType">reset_preferred_app_group_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPublicNetworkAccess">reset_public_network_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetScheduledAgentUpdates">reset_scheduled_agent_updates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetStartVmOnConnect">reset_start_vm_on_connect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetValidateEnvironment">reset_validate_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetVmTemplate">reset_vm_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scheduled_agent_updates` <a name="put_scheduled_agent_updates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putScheduledAgentUpdates"></a>

```python
def put_scheduled_agent_updates(
  enabled: typing.Union[bool, IResolvable] = None,
  schedule: typing.Union[IResolvable, typing.List[VirtualDesktopHostPoolScheduledAgentUpdatesSchedule]] = None,
  timezone: str = None,
  use_session_host_timezone: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putScheduledAgentUpdates.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#enabled VirtualDesktopHostPool#enabled}.

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putScheduledAgentUpdates.parameter.schedule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#schedule VirtualDesktopHostPool#schedule}

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putScheduledAgentUpdates.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#timezone VirtualDesktopHostPool#timezone}.

---

###### `use_session_host_timezone`<sup>Optional</sup> <a name="use_session_host_timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putScheduledAgentUpdates.parameter.useSessionHostTimezone"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#use_session_host_timezone VirtualDesktopHostPool#use_session_host_timezone}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#create VirtualDesktopHostPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#delete VirtualDesktopHostPool#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#read VirtualDesktopHostPool#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#update VirtualDesktopHostPool#update}.

---

##### `reset_custom_rdp_properties` <a name="reset_custom_rdp_properties" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetCustomRdpProperties"></a>

```python
def reset_custom_rdp_properties() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maximum_sessions_allowed` <a name="reset_maximum_sessions_allowed" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetMaximumSessionsAllowed"></a>

```python
def reset_maximum_sessions_allowed() -> None
```

##### `reset_personal_desktop_assignment_type` <a name="reset_personal_desktop_assignment_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPersonalDesktopAssignmentType"></a>

```python
def reset_personal_desktop_assignment_type() -> None
```

##### `reset_preferred_app_group_type` <a name="reset_preferred_app_group_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPreferredAppGroupType"></a>

```python
def reset_preferred_app_group_type() -> None
```

##### `reset_public_network_access` <a name="reset_public_network_access" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetPublicNetworkAccess"></a>

```python
def reset_public_network_access() -> None
```

##### `reset_scheduled_agent_updates` <a name="reset_scheduled_agent_updates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetScheduledAgentUpdates"></a>

```python
def reset_scheduled_agent_updates() -> None
```

##### `reset_start_vm_on_connect` <a name="reset_start_vm_on_connect" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetStartVmOnConnect"></a>

```python
def reset_start_vm_on_connect() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validate_environment` <a name="reset_validate_environment" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetValidateEnvironment"></a>

```python
def reset_validate_environment() -> None
```

##### `reset_vm_template` <a name="reset_vm_template" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.resetVmTemplate"></a>

```python
def reset_vm_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualDesktopHostPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualDesktopHostPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualDesktopHostPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualDesktopHostPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopHostPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.scheduledAgentUpdates">scheduled_agent_updates</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference">VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference">VirtualDesktopHostPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.customRdpPropertiesInput">custom_rdp_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.maximumSessionsAllowedInput">maximum_sessions_allowed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.personalDesktopAssignmentTypeInput">personal_desktop_assignment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.preferredAppGroupTypeInput">preferred_app_group_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.publicNetworkAccessInput">public_network_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.scheduledAgentUpdatesInput">scheduled_agent_updates_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.startVmOnConnectInput">start_vm_on_connect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.validateEnvironmentInput">validate_environment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.vmTemplateInput">vm_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.customRdpProperties">custom_rdp_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.maximumSessionsAllowed">maximum_sessions_allowed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.personalDesktopAssignmentType">personal_desktop_assignment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.preferredAppGroupType">preferred_app_group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.startVmOnConnect">start_vm_on_connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.validateEnvironment">validate_environment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.vmTemplate">vm_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scheduled_agent_updates`<sup>Required</sup> <a name="scheduled_agent_updates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.scheduledAgentUpdates"></a>

```python
scheduled_agent_updates: VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference">VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.timeouts"></a>

```python
timeouts: VirtualDesktopHostPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference">VirtualDesktopHostPoolTimeoutsOutputReference</a>

---

##### `custom_rdp_properties_input`<sup>Optional</sup> <a name="custom_rdp_properties_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.customRdpPropertiesInput"></a>

```python
custom_rdp_properties_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maximum_sessions_allowed_input`<sup>Optional</sup> <a name="maximum_sessions_allowed_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.maximumSessionsAllowedInput"></a>

```python
maximum_sessions_allowed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `personal_desktop_assignment_type_input`<sup>Optional</sup> <a name="personal_desktop_assignment_type_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.personalDesktopAssignmentTypeInput"></a>

```python
personal_desktop_assignment_type_input: str
```

- *Type:* str

---

##### `preferred_app_group_type_input`<sup>Optional</sup> <a name="preferred_app_group_type_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.preferredAppGroupTypeInput"></a>

```python
preferred_app_group_type_input: str
```

- *Type:* str

---

##### `public_network_access_input`<sup>Optional</sup> <a name="public_network_access_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.publicNetworkAccessInput"></a>

```python
public_network_access_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scheduled_agent_updates_input`<sup>Optional</sup> <a name="scheduled_agent_updates_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.scheduledAgentUpdatesInput"></a>

```python
scheduled_agent_updates_input: VirtualDesktopHostPoolScheduledAgentUpdates
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a>

---

##### `start_vm_on_connect_input`<sup>Optional</sup> <a name="start_vm_on_connect_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.startVmOnConnectInput"></a>

```python
start_vm_on_connect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualDesktopHostPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `validate_environment_input`<sup>Optional</sup> <a name="validate_environment_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.validateEnvironmentInput"></a>

```python
validate_environment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vm_template_input`<sup>Optional</sup> <a name="vm_template_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.vmTemplateInput"></a>

```python
vm_template_input: str
```

- *Type:* str

---

##### `custom_rdp_properties`<sup>Required</sup> <a name="custom_rdp_properties" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.customRdpProperties"></a>

```python
custom_rdp_properties: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `maximum_sessions_allowed`<sup>Required</sup> <a name="maximum_sessions_allowed" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.maximumSessionsAllowed"></a>

```python
maximum_sessions_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `personal_desktop_assignment_type`<sup>Required</sup> <a name="personal_desktop_assignment_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.personalDesktopAssignmentType"></a>

```python
personal_desktop_assignment_type: str
```

- *Type:* str

---

##### `preferred_app_group_type`<sup>Required</sup> <a name="preferred_app_group_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.preferredAppGroupType"></a>

```python
preferred_app_group_type: str
```

- *Type:* str

---

##### `public_network_access`<sup>Required</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `start_vm_on_connect`<sup>Required</sup> <a name="start_vm_on_connect" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.startVmOnConnect"></a>

```python
start_vm_on_connect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validate_environment`<sup>Required</sup> <a name="validate_environment" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.validateEnvironment"></a>

```python
validate_environment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vm_template`<sup>Required</sup> <a name="vm_template" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.vmTemplate"></a>

```python
vm_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopHostPoolConfig <a name="VirtualDesktopHostPoolConfig" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer_type: str,
  location: str,
  name: str,
  resource_group_name: str,
  type: str,
  custom_rdp_properties: str = None,
  description: str = None,
  friendly_name: str = None,
  id: str = None,
  maximum_sessions_allowed: typing.Union[int, float] = None,
  personal_desktop_assignment_type: str = None,
  preferred_app_group_type: str = None,
  public_network_access: str = None,
  scheduled_agent_updates: VirtualDesktopHostPoolScheduledAgentUpdates = None,
  start_vm_on_connect: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualDesktopHostPoolTimeouts = None,
  validate_environment: typing.Union[bool, IResolvable] = None,
  vm_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.customRdpProperties">custom_rdp_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.friendlyName">friendly_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.maximumSessionsAllowed">maximum_sessions_allowed</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.personalDesktopAssignmentType">personal_desktop_assignment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.preferredAppGroupType">preferred_app_group_type</a></code> | <code>str</code> | Preferred App Group type to display. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#public_network_access VirtualDesktopHostPool#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.scheduledAgentUpdates">scheduled_agent_updates</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a></code> | scheduled_agent_updates block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.startVmOnConnect">start_vm_on_connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.validateEnvironment">validate_environment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.vmTemplate">vm_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#vm_template VirtualDesktopHostPool#vm_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}.

---

##### `custom_rdp_properties`<sup>Optional</sup> <a name="custom_rdp_properties" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.customRdpProperties"></a>

```python
custom_rdp_properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}.

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_sessions_allowed`<sup>Optional</sup> <a name="maximum_sessions_allowed" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.maximumSessionsAllowed"></a>

```python
maximum_sessions_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}.

---

##### `personal_desktop_assignment_type`<sup>Optional</sup> <a name="personal_desktop_assignment_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.personalDesktopAssignmentType"></a>

```python
personal_desktop_assignment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}.

---

##### `preferred_app_group_type`<sup>Optional</sup> <a name="preferred_app_group_type" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.preferredAppGroupType"></a>

```python
preferred_app_group_type: str
```

- *Type:* str

Preferred App Group type to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#preferred_app_group_type VirtualDesktopHostPool#preferred_app_group_type}

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#public_network_access VirtualDesktopHostPool#public_network_access}.

---

##### `scheduled_agent_updates`<sup>Optional</sup> <a name="scheduled_agent_updates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.scheduledAgentUpdates"></a>

```python
scheduled_agent_updates: VirtualDesktopHostPoolScheduledAgentUpdates
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a>

scheduled_agent_updates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#scheduled_agent_updates VirtualDesktopHostPool#scheduled_agent_updates}

---

##### `start_vm_on_connect`<sup>Optional</sup> <a name="start_vm_on_connect" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.startVmOnConnect"></a>

```python
start_vm_on_connect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.timeouts"></a>

```python
timeouts: VirtualDesktopHostPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#timeouts VirtualDesktopHostPool#timeouts}

---

##### `validate_environment`<sup>Optional</sup> <a name="validate_environment" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.validateEnvironment"></a>

```python
validate_environment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}.

---

##### `vm_template`<sup>Optional</sup> <a name="vm_template" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolConfig.property.vmTemplate"></a>

```python
vm_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#vm_template VirtualDesktopHostPool#vm_template}.

---

### VirtualDesktopHostPoolScheduledAgentUpdates <a name="VirtualDesktopHostPoolScheduledAgentUpdates" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates(
  enabled: typing.Union[bool, IResolvable] = None,
  schedule: typing.Union[IResolvable, typing.List[VirtualDesktopHostPoolScheduledAgentUpdatesSchedule]] = None,
  timezone: str = None,
  use_session_host_timezone: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#enabled VirtualDesktopHostPool#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.schedule">schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]]</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#timezone VirtualDesktopHostPool#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.useSessionHostTimezone">use_session_host_timezone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#use_session_host_timezone VirtualDesktopHostPool#use_session_host_timezone}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#enabled VirtualDesktopHostPool#enabled}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.schedule"></a>

```python
schedule: typing.Union[IResolvable, typing.List[VirtualDesktopHostPoolScheduledAgentUpdatesSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#schedule VirtualDesktopHostPool#schedule}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#timezone VirtualDesktopHostPool#timezone}.

---

##### `use_session_host_timezone`<sup>Optional</sup> <a name="use_session_host_timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates.property.useSessionHostTimezone"></a>

```python
use_session_host_timezone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#use_session_host_timezone VirtualDesktopHostPool#use_session_host_timezone}.

---

### VirtualDesktopHostPoolScheduledAgentUpdatesSchedule <a name="VirtualDesktopHostPoolScheduledAgentUpdatesSchedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule(
  day_of_week: str,
  hour_of_day: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#day_of_week VirtualDesktopHostPool#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#hour_of_day VirtualDesktopHostPool#hour_of_day}. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#day_of_week VirtualDesktopHostPool#day_of_week}.

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#hour_of_day VirtualDesktopHostPool#hour_of_day}.

---

### VirtualDesktopHostPoolTimeouts <a name="VirtualDesktopHostPoolTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#create VirtualDesktopHostPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#delete VirtualDesktopHostPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#read VirtualDesktopHostPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#update VirtualDesktopHostPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#create VirtualDesktopHostPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#delete VirtualDesktopHostPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#read VirtualDesktopHostPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/virtual_desktop_host_pool#update VirtualDesktopHostPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference <a name="VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetUseSessionHostTimezone">reset_use_session_host_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.putSchedule"></a>

```python
def put_schedule(
  value: typing.Union[IResolvable, typing.List[VirtualDesktopHostPoolScheduledAgentUpdatesSchedule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.putSchedule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_use_session_host_timezone` <a name="reset_use_session_host_timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resetUseSessionHostTimezone"></a>

```python
def reset_use_session_host_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.scheduleInput">schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezoneInput">use_session_host_timezone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone">use_session_host_timezone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule"></a>

```python
schedule: VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.scheduleInput"></a>

```python
schedule_input: typing.Union[IResolvable, typing.List[VirtualDesktopHostPoolScheduledAgentUpdatesSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `use_session_host_timezone_input`<sup>Optional</sup> <a name="use_session_host_timezone_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezoneInput"></a>

```python
use_session_host_timezone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `use_session_host_timezone`<sup>Required</sup> <a name="use_session_host_timezone" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone"></a>

```python
use_session_host_timezone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue"></a>

```python
internal_value: VirtualDesktopHostPoolScheduledAgentUpdates
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdates">VirtualDesktopHostPoolScheduledAgentUpdates</a>

---


### VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList <a name="VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualDesktopHostPoolScheduledAgentUpdatesSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]]

---


### VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference <a name="VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualDesktopHostPoolScheduledAgentUpdatesSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolScheduledAgentUpdatesSchedule">VirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>]

---


### VirtualDesktopHostPoolTimeoutsOutputReference <a name="VirtualDesktopHostPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool

virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualDesktopHostPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopHostPool.VirtualDesktopHostPoolTimeouts">VirtualDesktopHostPoolTimeouts</a>]

---



