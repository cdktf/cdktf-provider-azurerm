# `springCloudNewRelicApplicationPerformanceMonitoring` Submodule <a name="`springCloudNewRelicApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudNewRelicApplicationPerformanceMonitoring <a name="SpringCloudNewRelicApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring azurerm_spring_cloud_new_relic_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_new_relic_application_performance_monitoring

springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_name: str,
  license_key: str,
  name: str,
  spring_cloud_service_id: str,
  agent_enabled: typing.Union[bool, IResolvable] = None,
  app_server_port: typing.Union[int, float] = None,
  audit_mode_enabled: typing.Union[bool, IResolvable] = None,
  auto_app_naming_enabled: typing.Union[bool, IResolvable] = None,
  auto_transaction_naming_enabled: typing.Union[bool, IResolvable] = None,
  custom_tracing_enabled: typing.Union[bool, IResolvable] = None,
  globally_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  timeouts: SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.appName">app_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.licenseKey">license_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.agentEnabled">agent_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.appServerPort">app_server_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.auditModeEnabled">audit_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.autoAppNamingEnabled">auto_app_naming_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.autoTransactionNamingEnabled">auto_transaction_naming_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.customTracingEnabled">custom_tracing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled">globally_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.appName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}.

---

##### `license_key`<sup>Required</sup> <a name="license_key" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.licenseKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `agent_enabled`<sup>Optional</sup> <a name="agent_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.agentEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}.

---

##### `app_server_port`<sup>Optional</sup> <a name="app_server_port" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.appServerPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}.

---

##### `audit_mode_enabled`<sup>Optional</sup> <a name="audit_mode_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.auditModeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}.

---

##### `auto_app_naming_enabled`<sup>Optional</sup> <a name="auto_app_naming_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.autoAppNamingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}.

---

##### `auto_transaction_naming_enabled`<sup>Optional</sup> <a name="auto_transaction_naming_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.autoTransactionNamingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}.

---

##### `custom_tracing_enabled`<sup>Optional</sup> <a name="custom_tracing_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.customTracingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}.

---

##### `globally_enabled`<sup>Optional</sup> <a name="globally_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#timeouts SpringCloudNewRelicApplicationPerformanceMonitoring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAgentEnabled">reset_agent_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAppServerPort">reset_app_server_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAuditModeEnabled">reset_audit_mode_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoAppNamingEnabled">reset_auto_app_naming_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoTransactionNamingEnabled">reset_auto_transaction_naming_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetCustomTracingEnabled">reset_custom_tracing_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetGloballyEnabled">reset_globally_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#create SpringCloudNewRelicApplicationPerformanceMonitoring#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#delete SpringCloudNewRelicApplicationPerformanceMonitoring#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#read SpringCloudNewRelicApplicationPerformanceMonitoring#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#update SpringCloudNewRelicApplicationPerformanceMonitoring#update}.

---

##### `reset_agent_enabled` <a name="reset_agent_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAgentEnabled"></a>

```python
def reset_agent_enabled() -> None
```

##### `reset_app_server_port` <a name="reset_app_server_port" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAppServerPort"></a>

```python
def reset_app_server_port() -> None
```

##### `reset_audit_mode_enabled` <a name="reset_audit_mode_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAuditModeEnabled"></a>

```python
def reset_audit_mode_enabled() -> None
```

##### `reset_auto_app_naming_enabled` <a name="reset_auto_app_naming_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoAppNamingEnabled"></a>

```python
def reset_auto_app_naming_enabled() -> None
```

##### `reset_auto_transaction_naming_enabled` <a name="reset_auto_transaction_naming_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoTransactionNamingEnabled"></a>

```python
def reset_auto_transaction_naming_enabled() -> None
```

##### `reset_custom_tracing_enabled` <a name="reset_custom_tracing_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetCustomTracingEnabled"></a>

```python
def reset_custom_tracing_enabled() -> None
```

##### `reset_globally_enabled` <a name="reset_globally_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```python
def reset_globally_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpringCloudNewRelicApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_new_relic_application_performance_monitoring

springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_new_relic_application_performance_monitoring

springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_new_relic_application_performance_monitoring

springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_new_relic_application_performance_monitoring

springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpringCloudNewRelicApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpringCloudNewRelicApplicationPerformanceMonitoring to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpringCloudNewRelicApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudNewRelicApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabledInput">agent_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appNameInput">app_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPortInput">app_server_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabledInput">audit_mode_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabledInput">auto_app_naming_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabledInput">auto_transaction_naming_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabledInput">custom_tracing_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabledInput">globally_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKeyInput">license_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceIdInput">spring_cloud_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabled">agent_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPort">app_server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabled">audit_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabled">auto_app_naming_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabled">auto_transaction_naming_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabled">custom_tracing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabled">globally_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKey">license_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeouts"></a>

```python
timeouts: SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `agent_enabled_input`<sup>Optional</sup> <a name="agent_enabled_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabledInput"></a>

```python
agent_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_name_input`<sup>Optional</sup> <a name="app_name_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appNameInput"></a>

```python
app_name_input: str
```

- *Type:* str

---

##### `app_server_port_input`<sup>Optional</sup> <a name="app_server_port_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPortInput"></a>

```python
app_server_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `audit_mode_enabled_input`<sup>Optional</sup> <a name="audit_mode_enabled_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabledInput"></a>

```python
audit_mode_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_app_naming_enabled_input`<sup>Optional</sup> <a name="auto_app_naming_enabled_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabledInput"></a>

```python
auto_app_naming_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_transaction_naming_enabled_input`<sup>Optional</sup> <a name="auto_transaction_naming_enabled_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabledInput"></a>

```python
auto_transaction_naming_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_tracing_enabled_input`<sup>Optional</sup> <a name="custom_tracing_enabled_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabledInput"></a>

```python
custom_tracing_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `globally_enabled_input`<sup>Optional</sup> <a name="globally_enabled_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```python
globally_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `license_key_input`<sup>Optional</sup> <a name="license_key_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKeyInput"></a>

```python
license_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spring_cloud_service_id_input`<sup>Optional</sup> <a name="spring_cloud_service_id_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```python
spring_cloud_service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>]

---

##### `agent_enabled`<sup>Required</sup> <a name="agent_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabled"></a>

```python
agent_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `app_server_port`<sup>Required</sup> <a name="app_server_port" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPort"></a>

```python
app_server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `audit_mode_enabled`<sup>Required</sup> <a name="audit_mode_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabled"></a>

```python
audit_mode_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_app_naming_enabled`<sup>Required</sup> <a name="auto_app_naming_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabled"></a>

```python
auto_app_naming_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_transaction_naming_enabled`<sup>Required</sup> <a name="auto_transaction_naming_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabled"></a>

```python
auto_transaction_naming_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_tracing_enabled`<sup>Required</sup> <a name="custom_tracing_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabled"></a>

```python
custom_tracing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `globally_enabled`<sup>Required</sup> <a name="globally_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```python
globally_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `license_key`<sup>Required</sup> <a name="license_key" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKey"></a>

```python
license_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudNewRelicApplicationPerformanceMonitoringConfig <a name="SpringCloudNewRelicApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_new_relic_application_performance_monitoring

springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_name: str,
  license_key: str,
  name: str,
  spring_cloud_service_id: str,
  agent_enabled: typing.Union[bool, IResolvable] = None,
  app_server_port: typing.Union[int, float] = None,
  audit_mode_enabled: typing.Union[bool, IResolvable] = None,
  auto_app_naming_enabled: typing.Union[bool, IResolvable] = None,
  auto_transaction_naming_enabled: typing.Union[bool, IResolvable] = None,
  custom_tracing_enabled: typing.Union[bool, IResolvable] = None,
  globally_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  timeouts: SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appName">app_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.licenseKey">license_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.agentEnabled">agent_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appServerPort">app_server_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.auditModeEnabled">audit_mode_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoAppNamingEnabled">auto_app_naming_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoTransactionNamingEnabled">auto_transaction_naming_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.customTracingEnabled">custom_tracing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.globallyEnabled">globally_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appName"></a>

```python
app_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}.

---

##### `license_key`<sup>Required</sup> <a name="license_key" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.licenseKey"></a>

```python
license_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `agent_enabled`<sup>Optional</sup> <a name="agent_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.agentEnabled"></a>

```python
agent_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}.

---

##### `app_server_port`<sup>Optional</sup> <a name="app_server_port" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appServerPort"></a>

```python
app_server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}.

---

##### `audit_mode_enabled`<sup>Optional</sup> <a name="audit_mode_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.auditModeEnabled"></a>

```python
audit_mode_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}.

---

##### `auto_app_naming_enabled`<sup>Optional</sup> <a name="auto_app_naming_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoAppNamingEnabled"></a>

```python
auto_app_naming_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}.

---

##### `auto_transaction_naming_enabled`<sup>Optional</sup> <a name="auto_transaction_naming_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoTransactionNamingEnabled"></a>

```python
auto_transaction_naming_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}.

---

##### `custom_tracing_enabled`<sup>Optional</sup> <a name="custom_tracing_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.customTracingEnabled"></a>

```python
custom_tracing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}.

---

##### `globally_enabled`<sup>Optional</sup> <a name="globally_enabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```python
globally_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```python
timeouts: SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#timeouts SpringCloudNewRelicApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts <a name="SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_new_relic_application_performance_monitoring

springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#create SpringCloudNewRelicApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#delete SpringCloudNewRelicApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#read SpringCloudNewRelicApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#update SpringCloudNewRelicApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#create SpringCloudNewRelicApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#delete SpringCloudNewRelicApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#read SpringCloudNewRelicApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#update SpringCloudNewRelicApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_new_relic_application_performance_monitoring

springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>]

---



