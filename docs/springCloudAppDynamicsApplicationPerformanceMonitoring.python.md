# `springCloudAppDynamicsApplicationPerformanceMonitoring` Submodule <a name="`springCloudAppDynamicsApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudAppDynamicsApplicationPerformanceMonitoring <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring azurerm_spring_cloud_app_dynamics_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_dynamics_application_performance_monitoring

springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_account_access_key: str,
  agent_account_name: str,
  controller_host_name: str,
  name: str,
  spring_cloud_service_id: str,
  agent_application_name: str = None,
  agent_node_name: str = None,
  agent_tier_name: str = None,
  agent_unique_host_id: str = None,
  controller_port: typing.Union[int, float] = None,
  controller_ssl_enabled: typing.Union[bool, IResolvable] = None,
  globally_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentAccountAccessKey">agent_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentAccountName">agent_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerHostName">controller_host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentApplicationName">agent_application_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentNodeName">agent_node_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentTierName">agent_tier_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentUniqueHostId">agent_unique_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerPort">controller_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerSslEnabled">controller_ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled">globally_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_account_access_key`<sup>Required</sup> <a name="agent_account_access_key" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}.

---

##### `agent_account_name`<sup>Required</sup> <a name="agent_account_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}.

---

##### `controller_host_name`<sup>Required</sup> <a name="controller_host_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerHostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `agent_application_name`<sup>Optional</sup> <a name="agent_application_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentApplicationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}.

---

##### `agent_node_name`<sup>Optional</sup> <a name="agent_node_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentNodeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}.

---

##### `agent_tier_name`<sup>Optional</sup> <a name="agent_tier_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentTierName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}.

---

##### `agent_unique_host_id`<sup>Optional</sup> <a name="agent_unique_host_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentUniqueHostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}.

---

##### `controller_port`<sup>Optional</sup> <a name="controller_port" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}.

---

##### `controller_ssl_enabled`<sup>Optional</sup> <a name="controller_ssl_enabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerSslEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}.

---

##### `globally_enabled`<sup>Optional</sup> <a name="globally_enabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#timeouts SpringCloudAppDynamicsApplicationPerformanceMonitoring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentApplicationName">reset_agent_application_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentNodeName">reset_agent_node_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentTierName">reset_agent_tier_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentUniqueHostId">reset_agent_unique_host_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerPort">reset_controller_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerSslEnabled">reset_controller_ssl_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetGloballyEnabled">reset_globally_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#create SpringCloudAppDynamicsApplicationPerformanceMonitoring#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#delete SpringCloudAppDynamicsApplicationPerformanceMonitoring#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#read SpringCloudAppDynamicsApplicationPerformanceMonitoring#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#update SpringCloudAppDynamicsApplicationPerformanceMonitoring#update}.

---

##### `reset_agent_application_name` <a name="reset_agent_application_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentApplicationName"></a>

```python
def reset_agent_application_name() -> None
```

##### `reset_agent_node_name` <a name="reset_agent_node_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentNodeName"></a>

```python
def reset_agent_node_name() -> None
```

##### `reset_agent_tier_name` <a name="reset_agent_tier_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentTierName"></a>

```python
def reset_agent_tier_name() -> None
```

##### `reset_agent_unique_host_id` <a name="reset_agent_unique_host_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentUniqueHostId"></a>

```python
def reset_agent_unique_host_id() -> None
```

##### `reset_controller_port` <a name="reset_controller_port" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerPort"></a>

```python
def reset_controller_port() -> None
```

##### `reset_controller_ssl_enabled` <a name="reset_controller_ssl_enabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerSslEnabled"></a>

```python
def reset_controller_ssl_enabled() -> None
```

##### `reset_globally_enabled` <a name="reset_globally_enabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```python
def reset_globally_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpringCloudAppDynamicsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_dynamics_application_performance_monitoring

springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_dynamics_application_performance_monitoring

springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_dynamics_application_performance_monitoring

springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_dynamics_application_performance_monitoring

springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpringCloudAppDynamicsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpringCloudAppDynamicsApplicationPerformanceMonitoring to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpringCloudAppDynamicsApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudAppDynamicsApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKeyInput">agent_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountNameInput">agent_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationNameInput">agent_application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeNameInput">agent_node_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierNameInput">agent_tier_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostIdInput">agent_unique_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostNameInput">controller_host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPortInput">controller_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabledInput">controller_ssl_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabledInput">globally_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceIdInput">spring_cloud_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKey">agent_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountName">agent_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationName">agent_application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeName">agent_node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierName">agent_tier_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostId">agent_unique_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostName">controller_host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPort">controller_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabled">controller_ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabled">globally_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeouts"></a>

```python
timeouts: SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `agent_account_access_key_input`<sup>Optional</sup> <a name="agent_account_access_key_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKeyInput"></a>

```python
agent_account_access_key_input: str
```

- *Type:* str

---

##### `agent_account_name_input`<sup>Optional</sup> <a name="agent_account_name_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountNameInput"></a>

```python
agent_account_name_input: str
```

- *Type:* str

---

##### `agent_application_name_input`<sup>Optional</sup> <a name="agent_application_name_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationNameInput"></a>

```python
agent_application_name_input: str
```

- *Type:* str

---

##### `agent_node_name_input`<sup>Optional</sup> <a name="agent_node_name_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeNameInput"></a>

```python
agent_node_name_input: str
```

- *Type:* str

---

##### `agent_tier_name_input`<sup>Optional</sup> <a name="agent_tier_name_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierNameInput"></a>

```python
agent_tier_name_input: str
```

- *Type:* str

---

##### `agent_unique_host_id_input`<sup>Optional</sup> <a name="agent_unique_host_id_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostIdInput"></a>

```python
agent_unique_host_id_input: str
```

- *Type:* str

---

##### `controller_host_name_input`<sup>Optional</sup> <a name="controller_host_name_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostNameInput"></a>

```python
controller_host_name_input: str
```

- *Type:* str

---

##### `controller_port_input`<sup>Optional</sup> <a name="controller_port_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPortInput"></a>

```python
controller_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `controller_ssl_enabled_input`<sup>Optional</sup> <a name="controller_ssl_enabled_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabledInput"></a>

```python
controller_ssl_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `globally_enabled_input`<sup>Optional</sup> <a name="globally_enabled_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```python
globally_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spring_cloud_service_id_input`<sup>Optional</sup> <a name="spring_cloud_service_id_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```python
spring_cloud_service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>]

---

##### `agent_account_access_key`<sup>Required</sup> <a name="agent_account_access_key" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKey"></a>

```python
agent_account_access_key: str
```

- *Type:* str

---

##### `agent_account_name`<sup>Required</sup> <a name="agent_account_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountName"></a>

```python
agent_account_name: str
```

- *Type:* str

---

##### `agent_application_name`<sup>Required</sup> <a name="agent_application_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationName"></a>

```python
agent_application_name: str
```

- *Type:* str

---

##### `agent_node_name`<sup>Required</sup> <a name="agent_node_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeName"></a>

```python
agent_node_name: str
```

- *Type:* str

---

##### `agent_tier_name`<sup>Required</sup> <a name="agent_tier_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierName"></a>

```python
agent_tier_name: str
```

- *Type:* str

---

##### `agent_unique_host_id`<sup>Required</sup> <a name="agent_unique_host_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostId"></a>

```python
agent_unique_host_id: str
```

- *Type:* str

---

##### `controller_host_name`<sup>Required</sup> <a name="controller_host_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostName"></a>

```python
controller_host_name: str
```

- *Type:* str

---

##### `controller_port`<sup>Required</sup> <a name="controller_port" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPort"></a>

```python
controller_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `controller_ssl_enabled`<sup>Required</sup> <a name="controller_ssl_enabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabled"></a>

```python
controller_ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `globally_enabled`<sup>Required</sup> <a name="globally_enabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```python
globally_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_dynamics_application_performance_monitoring

springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_account_access_key: str,
  agent_account_name: str,
  controller_host_name: str,
  name: str,
  spring_cloud_service_id: str,
  agent_application_name: str = None,
  agent_node_name: str = None,
  agent_tier_name: str = None,
  agent_unique_host_id: str = None,
  controller_port: typing.Union[int, float] = None,
  controller_ssl_enabled: typing.Union[bool, IResolvable] = None,
  globally_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountAccessKey">agent_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountName">agent_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerHostName">controller_host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentApplicationName">agent_application_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentNodeName">agent_node_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentTierName">agent_tier_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentUniqueHostId">agent_unique_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerPort">controller_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerSslEnabled">controller_ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.globallyEnabled">globally_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_account_access_key`<sup>Required</sup> <a name="agent_account_access_key" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountAccessKey"></a>

```python
agent_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}.

---

##### `agent_account_name`<sup>Required</sup> <a name="agent_account_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountName"></a>

```python
agent_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}.

---

##### `controller_host_name`<sup>Required</sup> <a name="controller_host_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerHostName"></a>

```python
controller_host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `agent_application_name`<sup>Optional</sup> <a name="agent_application_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentApplicationName"></a>

```python
agent_application_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}.

---

##### `agent_node_name`<sup>Optional</sup> <a name="agent_node_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentNodeName"></a>

```python
agent_node_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}.

---

##### `agent_tier_name`<sup>Optional</sup> <a name="agent_tier_name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentTierName"></a>

```python
agent_tier_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}.

---

##### `agent_unique_host_id`<sup>Optional</sup> <a name="agent_unique_host_id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentUniqueHostId"></a>

```python
agent_unique_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}.

---

##### `controller_port`<sup>Optional</sup> <a name="controller_port" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerPort"></a>

```python
controller_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}.

---

##### `controller_ssl_enabled`<sup>Optional</sup> <a name="controller_ssl_enabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerSslEnabled"></a>

```python
controller_ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}.

---

##### `globally_enabled`<sup>Optional</sup> <a name="globally_enabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```python
globally_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```python
timeouts: SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#timeouts SpringCloudAppDynamicsApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_dynamics_application_performance_monitoring

springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#create SpringCloudAppDynamicsApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#delete SpringCloudAppDynamicsApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#read SpringCloudAppDynamicsApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#update SpringCloudAppDynamicsApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#create SpringCloudAppDynamicsApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#delete SpringCloudAppDynamicsApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#read SpringCloudAppDynamicsApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#update SpringCloudAppDynamicsApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_dynamics_application_performance_monitoring

springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>]

---



