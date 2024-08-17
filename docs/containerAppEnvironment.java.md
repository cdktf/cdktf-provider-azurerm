# `containerAppEnvironment` Submodule <a name="`containerAppEnvironment` Submodule" id="@cdktf/provider-azurerm.containerAppEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironment <a name="ContainerAppEnvironment" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment azurerm_container_app_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironment;

ContainerAppEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .daprApplicationInsightsConnectionString(java.lang.String)
//  .id(java.lang.String)
//  .infrastructureResourceGroupName(java.lang.String)
//  .infrastructureSubnetId(java.lang.String)
//  .internalLoadBalancerEnabled(java.lang.Boolean)
//  .internalLoadBalancerEnabled(IResolvable)
//  .logAnalyticsWorkspaceId(java.lang.String)
//  .mutualTlsEnabled(java.lang.Boolean)
//  .mutualTlsEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerAppEnvironmentTimeouts)
//  .workloadProfile(IResolvable)
//  .workloadProfile(java.util.List<ContainerAppEnvironmentWorkloadProfile>)
//  .zoneRedundancyEnabled(java.lang.Boolean)
//  .zoneRedundancyEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Container Apps Managed Environment. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.daprApplicationInsightsConnectionString">daprApplicationInsightsConnectionString</a></code> | <code>java.lang.String</code> | Application Insights connection string used by Dapr to export Service to Service communication telemetry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.infrastructureResourceGroupName">infrastructureResourceGroupName</a></code> | <code>java.lang.String</code> | Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.infrastructureSubnetId">infrastructureSubnetId</a></code> | <code>java.lang.String</code> | The existing Subnet to use for the Container Apps Control Plane. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.internalLoadBalancerEnabled">internalLoadBalancerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Container Environment operate in Internal Load Balancing Mode? |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.mutualTlsEnabled">mutualTlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should mutual transport layer security (mTLS) be enabled? |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.workloadProfile">workloadProfile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>></code> | workload_profile block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#zone_redundancy_enabled ContainerAppEnvironment#zone_redundancy_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Container Apps Managed Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}.

---

##### `daprApplicationInsightsConnectionString`<sup>Optional</sup> <a name="daprApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.daprApplicationInsightsConnectionString"></a>

- *Type:* java.lang.String

Application Insights connection string used by Dapr to export Service to Service communication telemetry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#dapr_application_insights_connection_string ContainerAppEnvironment#dapr_application_insights_connection_string}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureResourceGroupName`<sup>Optional</sup> <a name="infrastructureResourceGroupName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.infrastructureResourceGroupName"></a>

- *Type:* java.lang.String

Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources.

**Note:** Only valid if a `workload_profile` is specified. If `infrastructure_subnet_id` is specified, this resource group will be created in the same subscription as `infrastructure_subnet_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#infrastructure_resource_group_name ContainerAppEnvironment#infrastructure_resource_group_name}

---

##### `infrastructureSubnetId`<sup>Optional</sup> <a name="infrastructureSubnetId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.infrastructureSubnetId"></a>

- *Type:* java.lang.String

The existing Subnet to use for the Container Apps Control Plane.

**NOTE:** The Subnet must have a `/21` or larger address space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#infrastructure_subnet_id ContainerAppEnvironment#infrastructure_subnet_id}

---

##### `internalLoadBalancerEnabled`<sup>Optional</sup> <a name="internalLoadBalancerEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.internalLoadBalancerEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Container Environment operate in Internal Load Balancing Mode?

Defaults to `false`. **Note:** can only be set to `true` if `infrastructure_subnet_id` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#internal_load_balancer_enabled ContainerAppEnvironment#internal_load_balancer_enabled}

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#log_analytics_workspace_id ContainerAppEnvironment#log_analytics_workspace_id}

---

##### `mutualTlsEnabled`<sup>Optional</sup> <a name="mutualTlsEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.mutualTlsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should mutual transport layer security (mTLS) be enabled?

Defaults to `false`. **Note:** This feature is in public preview. Enabling mTLS for your applications may increase response latency and reduce maximum throughput in high-load scenarios.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#mutual_tls_enabled ContainerAppEnvironment#mutual_tls_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#timeouts ContainerAppEnvironment#timeouts}

---

##### `workloadProfile`<sup>Optional</sup> <a name="workloadProfile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.workloadProfile"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>>

workload_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#workload_profile ContainerAppEnvironment#workload_profile}

---

##### `zoneRedundancyEnabled`<sup>Optional</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.Initializer.parameter.zoneRedundancyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#zone_redundancy_enabled ContainerAppEnvironment#zone_redundancy_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putWorkloadProfile">putWorkloadProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetDaprApplicationInsightsConnectionString">resetDaprApplicationInsightsConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureResourceGroupName">resetInfrastructureResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureSubnetId">resetInfrastructureSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInternalLoadBalancerEnabled">resetInternalLoadBalancerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetLogAnalyticsWorkspaceId">resetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetMutualTlsEnabled">resetMutualTlsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetWorkloadProfile">resetWorkloadProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetZoneRedundancyEnabled">resetZoneRedundancyEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts"></a>

```java
public void putTimeouts(ContainerAppEnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

---

##### `putWorkloadProfile` <a name="putWorkloadProfile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putWorkloadProfile"></a>

```java
public void putWorkloadProfile(IResolvable OR java.util.List<ContainerAppEnvironmentWorkloadProfile> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.putWorkloadProfile.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>>

---

##### `resetDaprApplicationInsightsConnectionString` <a name="resetDaprApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetDaprApplicationInsightsConnectionString"></a>

```java
public void resetDaprApplicationInsightsConnectionString()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetInfrastructureResourceGroupName` <a name="resetInfrastructureResourceGroupName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureResourceGroupName"></a>

```java
public void resetInfrastructureResourceGroupName()
```

##### `resetInfrastructureSubnetId` <a name="resetInfrastructureSubnetId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInfrastructureSubnetId"></a>

```java
public void resetInfrastructureSubnetId()
```

##### `resetInternalLoadBalancerEnabled` <a name="resetInternalLoadBalancerEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetInternalLoadBalancerEnabled"></a>

```java
public void resetInternalLoadBalancerEnabled()
```

##### `resetLogAnalyticsWorkspaceId` <a name="resetLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetLogAnalyticsWorkspaceId"></a>

```java
public void resetLogAnalyticsWorkspaceId()
```

##### `resetMutualTlsEnabled` <a name="resetMutualTlsEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetMutualTlsEnabled"></a>

```java
public void resetMutualTlsEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkloadProfile` <a name="resetWorkloadProfile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetWorkloadProfile"></a>

```java
public void resetWorkloadProfile()
```

##### `resetZoneRedundancyEnabled` <a name="resetZoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.resetZoneRedundancyEnabled"></a>

```java
public void resetZoneRedundancyEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAppEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironment;

ContainerAppEnvironment.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironment;

ContainerAppEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironment;

ContainerAppEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironment;

ContainerAppEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerAppEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerAppEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerAppEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerAppEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.defaultDomain">defaultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dockerBridgeCidr">dockerBridgeCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedCidr">platformReservedCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedDnsIpAddress">platformReservedDnsIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.staticIpAddress">staticIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference">ContainerAppEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.workloadProfile">workloadProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList">ContainerAppEnvironmentWorkloadProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.daprApplicationInsightsConnectionStringInput">daprApplicationInsightsConnectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureResourceGroupNameInput">infrastructureResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetIdInput">infrastructureSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabledInput">internalLoadBalancerEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.mutualTlsEnabledInput">mutualTlsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.workloadProfileInput">workloadProfileInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.zoneRedundancyEnabledInput">zoneRedundancyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.daprApplicationInsightsConnectionString">daprApplicationInsightsConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureResourceGroupName">infrastructureResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetId">infrastructureSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabled">internalLoadBalancerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.mutualTlsEnabled">mutualTlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.customDomainVerificationId"></a>

```java
public java.lang.String getCustomDomainVerificationId();
```

- *Type:* java.lang.String

---

##### `defaultDomain`<sup>Required</sup> <a name="defaultDomain" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.defaultDomain"></a>

```java
public java.lang.String getDefaultDomain();
```

- *Type:* java.lang.String

---

##### `dockerBridgeCidr`<sup>Required</sup> <a name="dockerBridgeCidr" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.dockerBridgeCidr"></a>

```java
public java.lang.String getDockerBridgeCidr();
```

- *Type:* java.lang.String

---

##### `platformReservedCidr`<sup>Required</sup> <a name="platformReservedCidr" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedCidr"></a>

```java
public java.lang.String getPlatformReservedCidr();
```

- *Type:* java.lang.String

---

##### `platformReservedDnsIpAddress`<sup>Required</sup> <a name="platformReservedDnsIpAddress" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.platformReservedDnsIpAddress"></a>

```java
public java.lang.String getPlatformReservedDnsIpAddress();
```

- *Type:* java.lang.String

---

##### `staticIpAddress`<sup>Required</sup> <a name="staticIpAddress" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.staticIpAddress"></a>

```java
public java.lang.String getStaticIpAddress();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeouts"></a>

```java
public ContainerAppEnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference">ContainerAppEnvironmentTimeoutsOutputReference</a>

---

##### `workloadProfile`<sup>Required</sup> <a name="workloadProfile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.workloadProfile"></a>

```java
public ContainerAppEnvironmentWorkloadProfileList getWorkloadProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList">ContainerAppEnvironmentWorkloadProfileList</a>

---

##### `daprApplicationInsightsConnectionStringInput`<sup>Optional</sup> <a name="daprApplicationInsightsConnectionStringInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.daprApplicationInsightsConnectionStringInput"></a>

```java
public java.lang.String getDaprApplicationInsightsConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `infrastructureResourceGroupNameInput`<sup>Optional</sup> <a name="infrastructureResourceGroupNameInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureResourceGroupNameInput"></a>

```java
public java.lang.String getInfrastructureResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `infrastructureSubnetIdInput`<sup>Optional</sup> <a name="infrastructureSubnetIdInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetIdInput"></a>

```java
public java.lang.String getInfrastructureSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `internalLoadBalancerEnabledInput`<sup>Optional</sup> <a name="internalLoadBalancerEnabledInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabledInput"></a>

```java
public java.lang.Object getInternalLoadBalancerEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `mutualTlsEnabledInput`<sup>Optional</sup> <a name="mutualTlsEnabledInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.mutualTlsEnabledInput"></a>

```java
public java.lang.Object getMutualTlsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

---

##### `workloadProfileInput`<sup>Optional</sup> <a name="workloadProfileInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.workloadProfileInput"></a>

```java
public java.lang.Object getWorkloadProfileInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>>

---

##### `zoneRedundancyEnabledInput`<sup>Optional</sup> <a name="zoneRedundancyEnabledInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.zoneRedundancyEnabledInput"></a>

```java
public java.lang.Object getZoneRedundancyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `daprApplicationInsightsConnectionString`<sup>Required</sup> <a name="daprApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.daprApplicationInsightsConnectionString"></a>

```java
public java.lang.String getDaprApplicationInsightsConnectionString();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `infrastructureResourceGroupName`<sup>Required</sup> <a name="infrastructureResourceGroupName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureResourceGroupName"></a>

```java
public java.lang.String getInfrastructureResourceGroupName();
```

- *Type:* java.lang.String

---

##### `infrastructureSubnetId`<sup>Required</sup> <a name="infrastructureSubnetId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.infrastructureSubnetId"></a>

```java
public java.lang.String getInfrastructureSubnetId();
```

- *Type:* java.lang.String

---

##### `internalLoadBalancerEnabled`<sup>Required</sup> <a name="internalLoadBalancerEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.internalLoadBalancerEnabled"></a>

```java
public java.lang.Object getInternalLoadBalancerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `mutualTlsEnabled`<sup>Required</sup> <a name="mutualTlsEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.mutualTlsEnabled"></a>

```java
public java.lang.Object getMutualTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zoneRedundancyEnabled`<sup>Required</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.zoneRedundancyEnabled"></a>

```java
public java.lang.Object getZoneRedundancyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentConfig <a name="ContainerAppEnvironmentConfig" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironmentConfig;

ContainerAppEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .daprApplicationInsightsConnectionString(java.lang.String)
//  .id(java.lang.String)
//  .infrastructureResourceGroupName(java.lang.String)
//  .infrastructureSubnetId(java.lang.String)
//  .internalLoadBalancerEnabled(java.lang.Boolean)
//  .internalLoadBalancerEnabled(IResolvable)
//  .logAnalyticsWorkspaceId(java.lang.String)
//  .mutualTlsEnabled(java.lang.Boolean)
//  .mutualTlsEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerAppEnvironmentTimeouts)
//  .workloadProfile(IResolvable)
//  .workloadProfile(java.util.List<ContainerAppEnvironmentWorkloadProfile>)
//  .zoneRedundancyEnabled(java.lang.Boolean)
//  .zoneRedundancyEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Container Apps Managed Environment. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.daprApplicationInsightsConnectionString">daprApplicationInsightsConnectionString</a></code> | <code>java.lang.String</code> | Application Insights connection string used by Dapr to export Service to Service communication telemetry. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureResourceGroupName">infrastructureResourceGroupName</a></code> | <code>java.lang.String</code> | Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureSubnetId">infrastructureSubnetId</a></code> | <code>java.lang.String</code> | The existing Subnet to use for the Container Apps Control Plane. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.internalLoadBalancerEnabled">internalLoadBalancerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Container Environment operate in Internal Load Balancing Mode? |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.mutualTlsEnabled">mutualTlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should mutual transport layer security (mTLS) be enabled? |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.workloadProfile">workloadProfile</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>></code> | workload_profile block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#zone_redundancy_enabled ContainerAppEnvironment#zone_redundancy_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#location ContainerAppEnvironment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Container Apps Managed Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#resource_group_name ContainerAppEnvironment#resource_group_name}.

---

##### `daprApplicationInsightsConnectionString`<sup>Optional</sup> <a name="daprApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.daprApplicationInsightsConnectionString"></a>

```java
public java.lang.String getDaprApplicationInsightsConnectionString();
```

- *Type:* java.lang.String

Application Insights connection string used by Dapr to export Service to Service communication telemetry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#dapr_application_insights_connection_string ContainerAppEnvironment#dapr_application_insights_connection_string}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#id ContainerAppEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureResourceGroupName`<sup>Optional</sup> <a name="infrastructureResourceGroupName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureResourceGroupName"></a>

```java
public java.lang.String getInfrastructureResourceGroupName();
```

- *Type:* java.lang.String

Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources.

**Note:** Only valid if a `workload_profile` is specified. If `infrastructure_subnet_id` is specified, this resource group will be created in the same subscription as `infrastructure_subnet_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#infrastructure_resource_group_name ContainerAppEnvironment#infrastructure_resource_group_name}

---

##### `infrastructureSubnetId`<sup>Optional</sup> <a name="infrastructureSubnetId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.infrastructureSubnetId"></a>

```java
public java.lang.String getInfrastructureSubnetId();
```

- *Type:* java.lang.String

The existing Subnet to use for the Container Apps Control Plane.

**NOTE:** The Subnet must have a `/21` or larger address space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#infrastructure_subnet_id ContainerAppEnvironment#infrastructure_subnet_id}

---

##### `internalLoadBalancerEnabled`<sup>Optional</sup> <a name="internalLoadBalancerEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.internalLoadBalancerEnabled"></a>

```java
public java.lang.Object getInternalLoadBalancerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Container Environment operate in Internal Load Balancing Mode?

Defaults to `false`. **Note:** can only be set to `true` if `infrastructure_subnet_id` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#internal_load_balancer_enabled ContainerAppEnvironment#internal_load_balancer_enabled}

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

The ID for the Log Analytics Workspace to link this Container Apps Managed Environment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#log_analytics_workspace_id ContainerAppEnvironment#log_analytics_workspace_id}

---

##### `mutualTlsEnabled`<sup>Optional</sup> <a name="mutualTlsEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.mutualTlsEnabled"></a>

```java
public java.lang.Object getMutualTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should mutual transport layer security (mTLS) be enabled?

Defaults to `false`. **Note:** This feature is in public preview. Enabling mTLS for your applications may increase response latency and reduce maximum throughput in high-load scenarios.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#mutual_tls_enabled ContainerAppEnvironment#mutual_tls_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#tags ContainerAppEnvironment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.timeouts"></a>

```java
public ContainerAppEnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#timeouts ContainerAppEnvironment#timeouts}

---

##### `workloadProfile`<sup>Optional</sup> <a name="workloadProfile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.workloadProfile"></a>

```java
public java.lang.Object getWorkloadProfile();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>>

workload_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#workload_profile ContainerAppEnvironment#workload_profile}

---

##### `zoneRedundancyEnabled`<sup>Optional</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentConfig.property.zoneRedundancyEnabled"></a>

```java
public java.lang.Object getZoneRedundancyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#zone_redundancy_enabled ContainerAppEnvironment#zone_redundancy_enabled}.

---

### ContainerAppEnvironmentTimeouts <a name="ContainerAppEnvironmentTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironmentTimeouts;

ContainerAppEnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#create ContainerAppEnvironment#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#delete ContainerAppEnvironment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#read ContainerAppEnvironment#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#update ContainerAppEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#create ContainerAppEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#delete ContainerAppEnvironment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#read ContainerAppEnvironment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#update ContainerAppEnvironment#update}.

---

### ContainerAppEnvironmentWorkloadProfile <a name="ContainerAppEnvironmentWorkloadProfile" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironmentWorkloadProfile;

ContainerAppEnvironmentWorkloadProfile.builder()
    .name(java.lang.String)
    .workloadProfileType(java.lang.String)
//  .maximumCount(java.lang.Number)
//  .minimumCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.workloadProfileType">workloadProfileType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#workload_profile_type ContainerAppEnvironment#workload_profile_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.maximumCount">maximumCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#maximum_count ContainerAppEnvironment#maximum_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.minimumCount">minimumCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#minimum_count ContainerAppEnvironment#minimum_count}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#name ContainerAppEnvironment#name}.

---

##### `workloadProfileType`<sup>Required</sup> <a name="workloadProfileType" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.workloadProfileType"></a>

```java
public java.lang.String getWorkloadProfileType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#workload_profile_type ContainerAppEnvironment#workload_profile_type}.

---

##### `maximumCount`<sup>Optional</sup> <a name="maximumCount" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.maximumCount"></a>

```java
public java.lang.Number getMaximumCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#maximum_count ContainerAppEnvironment#maximum_count}.

---

##### `minimumCount`<sup>Optional</sup> <a name="minimumCount" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile.property.minimumCount"></a>

```java
public java.lang.Number getMinimumCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment#minimum_count ContainerAppEnvironment#minimum_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentTimeoutsOutputReference <a name="ContainerAppEnvironmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironmentTimeoutsOutputReference;

new ContainerAppEnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentTimeouts">ContainerAppEnvironmentTimeouts</a>

---


### ContainerAppEnvironmentWorkloadProfileList <a name="ContainerAppEnvironmentWorkloadProfileList" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironmentWorkloadProfileList;

new ContainerAppEnvironmentWorkloadProfileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.get"></a>

```java
public ContainerAppEnvironmentWorkloadProfileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>>

---


### ContainerAppEnvironmentWorkloadProfileOutputReference <a name="ContainerAppEnvironmentWorkloadProfileOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment.ContainerAppEnvironmentWorkloadProfileOutputReference;

new ContainerAppEnvironmentWorkloadProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resetMaximumCount">resetMaximumCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resetMinimumCount">resetMinimumCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumCount` <a name="resetMaximumCount" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resetMaximumCount"></a>

```java
public void resetMaximumCount()
```

##### `resetMinimumCount` <a name="resetMinimumCount" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.resetMinimumCount"></a>

```java
public void resetMinimumCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.maximumCountInput">maximumCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.minimumCountInput">minimumCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.workloadProfileTypeInput">workloadProfileTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.maximumCount">maximumCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.minimumCount">minimumCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.workloadProfileType">workloadProfileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumCountInput`<sup>Optional</sup> <a name="maximumCountInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.maximumCountInput"></a>

```java
public java.lang.Number getMaximumCountInput();
```

- *Type:* java.lang.Number

---

##### `minimumCountInput`<sup>Optional</sup> <a name="minimumCountInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.minimumCountInput"></a>

```java
public java.lang.Number getMinimumCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `workloadProfileTypeInput`<sup>Optional</sup> <a name="workloadProfileTypeInput" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.workloadProfileTypeInput"></a>

```java
public java.lang.String getWorkloadProfileTypeInput();
```

- *Type:* java.lang.String

---

##### `maximumCount`<sup>Required</sup> <a name="maximumCount" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.maximumCount"></a>

```java
public java.lang.Number getMaximumCount();
```

- *Type:* java.lang.Number

---

##### `minimumCount`<sup>Required</sup> <a name="minimumCount" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.minimumCount"></a>

```java
public java.lang.Number getMinimumCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workloadProfileType`<sup>Required</sup> <a name="workloadProfileType" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.workloadProfileType"></a>

```java
public java.lang.String getWorkloadProfileType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfileOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironment.ContainerAppEnvironmentWorkloadProfile">ContainerAppEnvironmentWorkloadProfile</a>

---



