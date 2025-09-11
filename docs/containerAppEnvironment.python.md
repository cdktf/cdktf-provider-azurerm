# `containerAppEnvironment` Submodule <a name="`containerAppEnvironment` Submodule" id="@cdktf/provider-azurerm.containerAppEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironment <a name="ContainerAppEnvironment" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment azurerm_container_app_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironment(
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
  resource_group_name: str,
  dapr_application_insights_connection_string: str = None,
  id: str = None,
  identity: ContainerAppEnvironmentIdentity = None,
  infrastructure_resource_group_name: str = None,
  infrastructure_subnet_id: str = None,
  internal_load_balancer_enabled: typing.Union[bool, IResolvable] = None,
  log_analytics_workspace_id: str = None,
  logs_destination: str = None,
  mutual_tls_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerAppEnvironmentTimeouts = None,
  workload_profile: typing.Union[IResolvable, typing.List[ContainerAppEnvironmentWorkloadProfile]] = None,
  zone_redundancy_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Container Apps Managed Environment. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.daprApplicationInsightsConnectionString">dapr_application_insights_connection_string</a></code> | <code>str</code> | Application Insights connection string used by Dapr to export Service to Service communication telemetry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity">ContainerAppEnvironmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.infrastructureResourceGroupName">infrastructure_resource_group_name</a></code> | <code>str</code> | Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.infrastructureSubnetId">infrastructure_subnet_id</a></code> | <code>str</code> | The existing Subnet to use for the Container Apps Control Plane. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.internalLoadBalancerEnabled">internal_load_balancer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the Container Environment operate in Internal Load Balancing Mode? |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.logsDestination">logs_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#logs_destination ContainerAppEnvironment#logs_destination}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.mutualTlsEnabled">mutual_tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should mutual transport layer security (mTLS) be enabled? |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.workloadProfile">workload_profile</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]]</code> | workload_profile block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.zoneRedundancyEnabled">zone_redundancy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#zone_redundancy_enabled ContainerAppEnvironment#zone_redundancy_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.name"></a>

- *Type:* str

The name of the Container Apps Managed Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}.

---

##### `dapr_application_insights_connection_string`<sup>Optional</sup> <a name="dapr_application_insights_connection_string" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.daprApplicationInsightsConnectionString"></a>

- *Type:* str

Application Insights connection string used by Dapr to export Service to Service communication telemetry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#dapr_application_insights_connection_string ContainerAppEnvironment#dapr_application_insights_connection_string}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity">ContainerAppEnvironmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#identity ContainerAppEnvironment#identity}

---

##### `infrastructure_resource_group_name`<sup>Optional</sup> <a name="infrastructure_resource_group_name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.infrastructureResourceGroupName"></a>

- *Type:* str

Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources.

**Note:** Only valid if a `workload_profile` is specified. If `infrastructure_subnet_id` is specified, this resource group will be created in the same subscription as `infrastructure_subnet_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#infrastructure_resource_group_name ContainerAppEnvironment#infrastructure_resource_group_name}

---

##### `infrastructure_subnet_id`<sup>Optional</sup> <a name="infrastructure_subnet_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.infrastructureSubnetId"></a>

- *Type:* str

The existing Subnet to use for the Container Apps Control Plane.

**NOTE:** The Subnet must have a `/21` or larger address space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#infrastructure_subnet_id ContainerAppEnvironment#infrastructure_subnet_id}

---

##### `internal_load_balancer_enabled`<sup>Optional</sup> <a name="internal_load_balancer_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.internalLoadBalancerEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Container Environment operate in Internal Load Balancing Mode?

Defaults to `false`. **Note:** can only be set to `true` if `infrastructure_subnet_id` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#internal_load_balancer_enabled ContainerAppEnvironment#internal_load_balancer_enabled}

---

##### `log_analytics_workspace_id`<sup>Optional</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#log_analytics_workspace_id ContainerAppEnvironment#log_analytics_workspace_id}

---

##### `logs_destination`<sup>Optional</sup> <a name="logs_destination" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.logsDestination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#logs_destination ContainerAppEnvironment#logs_destination}.

---

##### `mutual_tls_enabled`<sup>Optional</sup> <a name="mutual_tls_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.mutualTlsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should mutual transport layer security (mTLS) be enabled?

Defaults to `false`. **Note:** This feature is in public preview. Enabling mTLS for your applications may increase response latency and reduce maximum throughput in high-load scenarios.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#mutual_tls_enabled ContainerAppEnvironment#mutual_tls_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#timeouts ContainerAppEnvironment#timeouts}

---

##### `workload_profile`<sup>Optional</sup> <a name="workload_profile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.workloadProfile"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]]

workload_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#workload_profile ContainerAppEnvironment#workload_profile}

---

##### `zone_redundancy_enabled`<sup>Optional</sup> <a name="zone_redundancy_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.zoneRedundancyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#zone_redundancy_enabled ContainerAppEnvironment#zone_redundancy_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putWorkloadProfile">put_workload_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetDaprApplicationInsightsConnectionString">reset_dapr_application_insights_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureResourceGroupName">reset_infrastructure_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureSubnetId">reset_infrastructure_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInternalLoadBalancerEnabled">reset_internal_load_balancer_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetLogAnalyticsWorkspaceId">reset_log_analytics_workspace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetLogsDestination">reset_logs_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetMutualTlsEnabled">reset_mutual_tls_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetWorkloadProfile">reset_workload_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetZoneRedundancyEnabled">reset_zone_redundancy_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#type ContainerAppEnvironment#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#identity_ids ContainerAppEnvironment#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#create ContainerAppEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#delete ContainerAppEnvironment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#read ContainerAppEnvironment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#update ContainerAppEnvironment#update}.

---

##### `put_workload_profile` <a name="put_workload_profile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putWorkloadProfile"></a>

```python
def put_workload_profile(
  value: typing.Union[IResolvable, typing.List[ContainerAppEnvironmentWorkloadProfile]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putWorkloadProfile.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]]

---

##### `reset_dapr_application_insights_connection_string` <a name="reset_dapr_application_insights_connection_string" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetDaprApplicationInsightsConnectionString"></a>

```python
def reset_dapr_application_insights_connection_string() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_infrastructure_resource_group_name` <a name="reset_infrastructure_resource_group_name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureResourceGroupName"></a>

```python
def reset_infrastructure_resource_group_name() -> None
```

##### `reset_infrastructure_subnet_id` <a name="reset_infrastructure_subnet_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureSubnetId"></a>

```python
def reset_infrastructure_subnet_id() -> None
```

##### `reset_internal_load_balancer_enabled` <a name="reset_internal_load_balancer_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInternalLoadBalancerEnabled"></a>

```python
def reset_internal_load_balancer_enabled() -> None
```

##### `reset_log_analytics_workspace_id` <a name="reset_log_analytics_workspace_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetLogAnalyticsWorkspaceId"></a>

```python
def reset_log_analytics_workspace_id() -> None
```

##### `reset_logs_destination` <a name="reset_logs_destination" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetLogsDestination"></a>

```python
def reset_logs_destination() -> None
```

##### `reset_mutual_tls_enabled` <a name="reset_mutual_tls_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetMutualTlsEnabled"></a>

```python
def reset_mutual_tls_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workload_profile` <a name="reset_workload_profile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetWorkloadProfile"></a>

```python
def reset_workload_profile() -> None
```

##### `reset_zone_redundancy_enabled` <a name="reset_zone_redundancy_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetZoneRedundancyEnabled"></a>

```python
def reset_zone_redundancy_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerAppEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerAppEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerAppEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerAppEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.customDomainVerificationId">custom_domain_verification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.defaultDomain">default_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dockerBridgeCidr">docker_bridge_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference">ContainerAppEnvironmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedCidr">platform_reserved_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedDnsIpAddress">platform_reserved_dns_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.staticIpAddress">static_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference">ContainerAppEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.workloadProfile">workload_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList">ContainerAppEnvironmentWorkloadProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.daprApplicationInsightsConnectionStringInput">dapr_application_insights_connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity">ContainerAppEnvironmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureResourceGroupNameInput">infrastructure_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetIdInput">infrastructure_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabledInput">internal_load_balancer_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logsDestinationInput">logs_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.mutualTlsEnabledInput">mutual_tls_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.workloadProfileInput">workload_profile_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.zoneRedundancyEnabledInput">zone_redundancy_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.daprApplicationInsightsConnectionString">dapr_application_insights_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureResourceGroupName">infrastructure_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetId">infrastructure_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabled">internal_load_balancer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logsDestination">logs_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.mutualTlsEnabled">mutual_tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.zoneRedundancyEnabled">zone_redundancy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_domain_verification_id`<sup>Required</sup> <a name="custom_domain_verification_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.customDomainVerificationId"></a>

```python
custom_domain_verification_id: str
```

- *Type:* str

---

##### `default_domain`<sup>Required</sup> <a name="default_domain" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.defaultDomain"></a>

```python
default_domain: str
```

- *Type:* str

---

##### `docker_bridge_cidr`<sup>Required</sup> <a name="docker_bridge_cidr" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dockerBridgeCidr"></a>

```python
docker_bridge_cidr: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.identity"></a>

```python
identity: ContainerAppEnvironmentIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference">ContainerAppEnvironmentIdentityOutputReference</a>

---

##### `platform_reserved_cidr`<sup>Required</sup> <a name="platform_reserved_cidr" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedCidr"></a>

```python
platform_reserved_cidr: str
```

- *Type:* str

---

##### `platform_reserved_dns_ip_address`<sup>Required</sup> <a name="platform_reserved_dns_ip_address" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedDnsIpAddress"></a>

```python
platform_reserved_dns_ip_address: str
```

- *Type:* str

---

##### `static_ip_address`<sup>Required</sup> <a name="static_ip_address" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.staticIpAddress"></a>

```python
static_ip_address: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeouts"></a>

```python
timeouts: ContainerAppEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference">ContainerAppEnvironmentTimeoutsOutputReference</a>

---

##### `workload_profile`<sup>Required</sup> <a name="workload_profile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.workloadProfile"></a>

```python
workload_profile: ContainerAppEnvironmentWorkloadProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList">ContainerAppEnvironmentWorkloadProfileList</a>

---

##### `dapr_application_insights_connection_string_input`<sup>Optional</sup> <a name="dapr_application_insights_connection_string_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.daprApplicationInsightsConnectionStringInput"></a>

```python
dapr_application_insights_connection_string_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.identityInput"></a>

```python
identity_input: ContainerAppEnvironmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity">ContainerAppEnvironmentIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infrastructure_resource_group_name_input`<sup>Optional</sup> <a name="infrastructure_resource_group_name_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureResourceGroupNameInput"></a>

```python
infrastructure_resource_group_name_input: str
```

- *Type:* str

---

##### `infrastructure_subnet_id_input`<sup>Optional</sup> <a name="infrastructure_subnet_id_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetIdInput"></a>

```python
infrastructure_subnet_id_input: str
```

- *Type:* str

---

##### `internal_load_balancer_enabled_input`<sup>Optional</sup> <a name="internal_load_balancer_enabled_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabledInput"></a>

```python
internal_load_balancer_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `logs_destination_input`<sup>Optional</sup> <a name="logs_destination_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logsDestinationInput"></a>

```python
logs_destination_input: str
```

- *Type:* str

---

##### `mutual_tls_enabled_input`<sup>Optional</sup> <a name="mutual_tls_enabled_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.mutualTlsEnabledInput"></a>

```python
mutual_tls_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerAppEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>]

---

##### `workload_profile_input`<sup>Optional</sup> <a name="workload_profile_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.workloadProfileInput"></a>

```python
workload_profile_input: typing.Union[IResolvable, typing.List[ContainerAppEnvironmentWorkloadProfile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]]

---

##### `zone_redundancy_enabled_input`<sup>Optional</sup> <a name="zone_redundancy_enabled_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.zoneRedundancyEnabledInput"></a>

```python
zone_redundancy_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dapr_application_insights_connection_string`<sup>Required</sup> <a name="dapr_application_insights_connection_string" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.daprApplicationInsightsConnectionString"></a>

```python
dapr_application_insights_connection_string: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_resource_group_name`<sup>Required</sup> <a name="infrastructure_resource_group_name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureResourceGroupName"></a>

```python
infrastructure_resource_group_name: str
```

- *Type:* str

---

##### `infrastructure_subnet_id`<sup>Required</sup> <a name="infrastructure_subnet_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetId"></a>

```python
infrastructure_subnet_id: str
```

- *Type:* str

---

##### `internal_load_balancer_enabled`<sup>Required</sup> <a name="internal_load_balancer_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabled"></a>

```python
internal_load_balancer_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `logs_destination`<sup>Required</sup> <a name="logs_destination" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logsDestination"></a>

```python
logs_destination: str
```

- *Type:* str

---

##### `mutual_tls_enabled`<sup>Required</sup> <a name="mutual_tls_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.mutualTlsEnabled"></a>

```python
mutual_tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zone_redundancy_enabled`<sup>Required</sup> <a name="zone_redundancy_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.zoneRedundancyEnabled"></a>

```python
zone_redundancy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentConfig <a name="ContainerAppEnvironmentConfig" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  dapr_application_insights_connection_string: str = None,
  id: str = None,
  identity: ContainerAppEnvironmentIdentity = None,
  infrastructure_resource_group_name: str = None,
  infrastructure_subnet_id: str = None,
  internal_load_balancer_enabled: typing.Union[bool, IResolvable] = None,
  log_analytics_workspace_id: str = None,
  logs_destination: str = None,
  mutual_tls_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerAppEnvironmentTimeouts = None,
  workload_profile: typing.Union[IResolvable, typing.List[ContainerAppEnvironmentWorkloadProfile]] = None,
  zone_redundancy_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.name">name</a></code> | <code>str</code> | The name of the Container Apps Managed Environment. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.daprApplicationInsightsConnectionString">dapr_application_insights_connection_string</a></code> | <code>str</code> | Application Insights connection string used by Dapr to export Service to Service communication telemetry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity">ContainerAppEnvironmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureResourceGroupName">infrastructure_resource_group_name</a></code> | <code>str</code> | Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureSubnetId">infrastructure_subnet_id</a></code> | <code>str</code> | The existing Subnet to use for the Container Apps Control Plane. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.internalLoadBalancerEnabled">internal_load_balancer_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the Container Environment operate in Internal Load Balancing Mode? |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.logsDestination">logs_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#logs_destination ContainerAppEnvironment#logs_destination}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.mutualTlsEnabled">mutual_tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should mutual transport layer security (mTLS) be enabled? |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.workloadProfile">workload_profile</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]]</code> | workload_profile block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.zoneRedundancyEnabled">zone_redundancy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#zone_redundancy_enabled ContainerAppEnvironment#zone_redundancy_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Container Apps Managed Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}.

---

##### `dapr_application_insights_connection_string`<sup>Optional</sup> <a name="dapr_application_insights_connection_string" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.daprApplicationInsightsConnectionString"></a>

```python
dapr_application_insights_connection_string: str
```

- *Type:* str

Application Insights connection string used by Dapr to export Service to Service communication telemetry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#dapr_application_insights_connection_string ContainerAppEnvironment#dapr_application_insights_connection_string}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.identity"></a>

```python
identity: ContainerAppEnvironmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity">ContainerAppEnvironmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#identity ContainerAppEnvironment#identity}

---

##### `infrastructure_resource_group_name`<sup>Optional</sup> <a name="infrastructure_resource_group_name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureResourceGroupName"></a>

```python
infrastructure_resource_group_name: str
```

- *Type:* str

Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources.

**Note:** Only valid if a `workload_profile` is specified. If `infrastructure_subnet_id` is specified, this resource group will be created in the same subscription as `infrastructure_subnet_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#infrastructure_resource_group_name ContainerAppEnvironment#infrastructure_resource_group_name}

---

##### `infrastructure_subnet_id`<sup>Optional</sup> <a name="infrastructure_subnet_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureSubnetId"></a>

```python
infrastructure_subnet_id: str
```

- *Type:* str

The existing Subnet to use for the Container Apps Control Plane.

**NOTE:** The Subnet must have a `/21` or larger address space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#infrastructure_subnet_id ContainerAppEnvironment#infrastructure_subnet_id}

---

##### `internal_load_balancer_enabled`<sup>Optional</sup> <a name="internal_load_balancer_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.internalLoadBalancerEnabled"></a>

```python
internal_load_balancer_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Container Environment operate in Internal Load Balancing Mode?

Defaults to `false`. **Note:** can only be set to `true` if `infrastructure_subnet_id` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#internal_load_balancer_enabled ContainerAppEnvironment#internal_load_balancer_enabled}

---

##### `log_analytics_workspace_id`<sup>Optional</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#log_analytics_workspace_id ContainerAppEnvironment#log_analytics_workspace_id}

---

##### `logs_destination`<sup>Optional</sup> <a name="logs_destination" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.logsDestination"></a>

```python
logs_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#logs_destination ContainerAppEnvironment#logs_destination}.

---

##### `mutual_tls_enabled`<sup>Optional</sup> <a name="mutual_tls_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.mutualTlsEnabled"></a>

```python
mutual_tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should mutual transport layer security (mTLS) be enabled?

Defaults to `false`. **Note:** This feature is in public preview. Enabling mTLS for your applications may increase response latency and reduce maximum throughput in high-load scenarios.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#mutual_tls_enabled ContainerAppEnvironment#mutual_tls_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.timeouts"></a>

```python
timeouts: ContainerAppEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#timeouts ContainerAppEnvironment#timeouts}

---

##### `workload_profile`<sup>Optional</sup> <a name="workload_profile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.workloadProfile"></a>

```python
workload_profile: typing.Union[IResolvable, typing.List[ContainerAppEnvironmentWorkloadProfile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]]

workload_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#workload_profile ContainerAppEnvironment#workload_profile}

---

##### `zone_redundancy_enabled`<sup>Optional</sup> <a name="zone_redundancy_enabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.zoneRedundancyEnabled"></a>

```python
zone_redundancy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#zone_redundancy_enabled ContainerAppEnvironment#zone_redundancy_enabled}.

---

### ContainerAppEnvironmentIdentity <a name="ContainerAppEnvironmentIdentity" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironmentIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#type ContainerAppEnvironment#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#identity_ids ContainerAppEnvironment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#type ContainerAppEnvironment#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#identity_ids ContainerAppEnvironment#identity_ids}.

---

### ContainerAppEnvironmentTimeouts <a name="ContainerAppEnvironmentTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#create ContainerAppEnvironment#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#delete ContainerAppEnvironment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#read ContainerAppEnvironment#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#update ContainerAppEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#create ContainerAppEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#delete ContainerAppEnvironment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#read ContainerAppEnvironment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#update ContainerAppEnvironment#update}.

---

### ContainerAppEnvironmentWorkloadProfile <a name="ContainerAppEnvironmentWorkloadProfile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile(
  name: str,
  workload_profile_type: str,
  maximum_count: typing.Union[int, float] = None,
  minimum_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.workloadProfileType">workload_profile_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#workload_profile_type ContainerAppEnvironment#workload_profile_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#maximum_count ContainerAppEnvironment#maximum_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#minimum_count ContainerAppEnvironment#minimum_count}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}.

---

##### `workload_profile_type`<sup>Required</sup> <a name="workload_profile_type" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.workloadProfileType"></a>

```python
workload_profile_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#workload_profile_type ContainerAppEnvironment#workload_profile_type}.

---

##### `maximum_count`<sup>Optional</sup> <a name="maximum_count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#maximum_count ContainerAppEnvironment#maximum_count}.

---

##### `minimum_count`<sup>Optional</sup> <a name="minimum_count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/container_app_environment#minimum_count ContainerAppEnvironment#minimum_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentIdentityOutputReference <a name="ContainerAppEnvironmentIdentityOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity">ContainerAppEnvironmentIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppEnvironmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentIdentity">ContainerAppEnvironmentIdentity</a>

---


### ContainerAppEnvironmentTimeoutsOutputReference <a name="ContainerAppEnvironmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>]

---


### ContainerAppEnvironmentWorkloadProfileList <a name="ContainerAppEnvironmentWorkloadProfileList" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppEnvironmentWorkloadProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppEnvironmentWorkloadProfile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]]

---


### ContainerAppEnvironmentWorkloadProfileOutputReference <a name="ContainerAppEnvironmentWorkloadProfileOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app_environment

containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resetMaximumCount">reset_maximum_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resetMinimumCount">reset_minimum_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_count` <a name="reset_maximum_count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resetMaximumCount"></a>

```python
def reset_maximum_count() -> None
```

##### `reset_minimum_count` <a name="reset_minimum_count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resetMinimumCount"></a>

```python
def reset_minimum_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.maximumCountInput">maximum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.minimumCountInput">minimum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.workloadProfileTypeInput">workload_profile_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.workloadProfileType">workload_profile_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_count_input`<sup>Optional</sup> <a name="maximum_count_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.maximumCountInput"></a>

```python
maximum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count_input`<sup>Optional</sup> <a name="minimum_count_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.minimumCountInput"></a>

```python
minimum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `workload_profile_type_input`<sup>Optional</sup> <a name="workload_profile_type_input" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.workloadProfileTypeInput"></a>

```python
workload_profile_type_input: str
```

- *Type:* str

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workload_profile_type`<sup>Required</sup> <a name="workload_profile_type" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.workloadProfileType"></a>

```python
workload_profile_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppEnvironmentWorkloadProfile]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>]

---



