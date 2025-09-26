# `springCloudAppDynamicsApplicationPerformanceMonitoring` Submodule <a name="`springCloudAppDynamicsApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudAppDynamicsApplicationPerformanceMonitoring <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring azurerm_spring_cloud_app_dynamics_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app_dynamics_application_performance_monitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring;

SpringCloudAppDynamicsApplicationPerformanceMonitoring.Builder.create(Construct scope, java.lang.String id)
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
    .agentAccountAccessKey(java.lang.String)
    .agentAccountName(java.lang.String)
    .controllerHostName(java.lang.String)
    .name(java.lang.String)
    .springCloudServiceId(java.lang.String)
//  .agentApplicationName(java.lang.String)
//  .agentNodeName(java.lang.String)
//  .agentTierName(java.lang.String)
//  .agentUniqueHostId(java.lang.String)
//  .controllerPort(java.lang.Number)
//  .controllerSslEnabled(java.lang.Boolean)
//  .controllerSslEnabled(IResolvable)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentAccountAccessKey">agentAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentAccountName">agentAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerHostName">controllerHostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentApplicationName">agentApplicationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentNodeName">agentNodeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentTierName">agentTierName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentUniqueHostId">agentUniqueHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerPort">controllerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerSslEnabled">controllerSslEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentAccountAccessKey`<sup>Required</sup> <a name="agentAccountAccessKey" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentAccountAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}.

---

##### `agentAccountName`<sup>Required</sup> <a name="agentAccountName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}.

---

##### `controllerHostName`<sup>Required</sup> <a name="controllerHostName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerHostName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `agentApplicationName`<sup>Optional</sup> <a name="agentApplicationName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentApplicationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}.

---

##### `agentNodeName`<sup>Optional</sup> <a name="agentNodeName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentNodeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}.

---

##### `agentTierName`<sup>Optional</sup> <a name="agentTierName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentTierName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}.

---

##### `agentUniqueHostId`<sup>Optional</sup> <a name="agentUniqueHostId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.agentUniqueHostId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}.

---

##### `controllerPort`<sup>Optional</sup> <a name="controllerPort" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}.

---

##### `controllerSslEnabled`<sup>Optional</sup> <a name="controllerSslEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.controllerSslEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#timeouts SpringCloudAppDynamicsApplicationPerformanceMonitoring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentApplicationName">resetAgentApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentNodeName">resetAgentNodeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentTierName">resetAgentTierName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentUniqueHostId">resetAgentUniqueHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerPort">resetControllerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerSslEnabled">resetControllerSslEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetGloballyEnabled">resetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>

---

##### `resetAgentApplicationName` <a name="resetAgentApplicationName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentApplicationName"></a>

```java
public void resetAgentApplicationName()
```

##### `resetAgentNodeName` <a name="resetAgentNodeName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentNodeName"></a>

```java
public void resetAgentNodeName()
```

##### `resetAgentTierName` <a name="resetAgentTierName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentTierName"></a>

```java
public void resetAgentTierName()
```

##### `resetAgentUniqueHostId` <a name="resetAgentUniqueHostId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentUniqueHostId"></a>

```java
public void resetAgentUniqueHostId()
```

##### `resetControllerPort` <a name="resetControllerPort" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerPort"></a>

```java
public void resetControllerPort()
```

##### `resetControllerSslEnabled` <a name="resetControllerSslEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerSslEnabled"></a>

```java
public void resetControllerSslEnabled()
```

##### `resetGloballyEnabled` <a name="resetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```java
public void resetGloballyEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudAppDynamicsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app_dynamics_application_performance_monitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring;

SpringCloudAppDynamicsApplicationPerformanceMonitoring.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app_dynamics_application_performance_monitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring;

SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app_dynamics_application_performance_monitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring;

SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app_dynamics_application_performance_monitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring;

SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpringCloudAppDynamicsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpringCloudAppDynamicsApplicationPerformanceMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpringCloudAppDynamicsApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudAppDynamicsApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKeyInput">agentAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountNameInput">agentAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationNameInput">agentApplicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeNameInput">agentNodeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierNameInput">agentTierNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostIdInput">agentUniqueHostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostNameInput">controllerHostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPortInput">controllerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabledInput">controllerSslEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabledInput">globallyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKey">agentAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountName">agentAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationName">agentApplicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeName">agentNodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierName">agentTierName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostId">agentUniqueHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostName">controllerHostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPort">controllerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabled">controllerSslEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeouts"></a>

```java
public SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `agentAccountAccessKeyInput`<sup>Optional</sup> <a name="agentAccountAccessKeyInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKeyInput"></a>

```java
public java.lang.String getAgentAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `agentAccountNameInput`<sup>Optional</sup> <a name="agentAccountNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountNameInput"></a>

```java
public java.lang.String getAgentAccountNameInput();
```

- *Type:* java.lang.String

---

##### `agentApplicationNameInput`<sup>Optional</sup> <a name="agentApplicationNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationNameInput"></a>

```java
public java.lang.String getAgentApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `agentNodeNameInput`<sup>Optional</sup> <a name="agentNodeNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeNameInput"></a>

```java
public java.lang.String getAgentNodeNameInput();
```

- *Type:* java.lang.String

---

##### `agentTierNameInput`<sup>Optional</sup> <a name="agentTierNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierNameInput"></a>

```java
public java.lang.String getAgentTierNameInput();
```

- *Type:* java.lang.String

---

##### `agentUniqueHostIdInput`<sup>Optional</sup> <a name="agentUniqueHostIdInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostIdInput"></a>

```java
public java.lang.String getAgentUniqueHostIdInput();
```

- *Type:* java.lang.String

---

##### `controllerHostNameInput`<sup>Optional</sup> <a name="controllerHostNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostNameInput"></a>

```java
public java.lang.String getControllerHostNameInput();
```

- *Type:* java.lang.String

---

##### `controllerPortInput`<sup>Optional</sup> <a name="controllerPortInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPortInput"></a>

```java
public java.lang.Number getControllerPortInput();
```

- *Type:* java.lang.Number

---

##### `controllerSslEnabledInput`<sup>Optional</sup> <a name="controllerSslEnabledInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabledInput"></a>

```java
public java.lang.Object getControllerSslEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globallyEnabledInput`<sup>Optional</sup> <a name="globallyEnabledInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```java
public java.lang.Object getGloballyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```java
public java.lang.String getSpringCloudServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>

---

##### `agentAccountAccessKey`<sup>Required</sup> <a name="agentAccountAccessKey" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKey"></a>

```java
public java.lang.String getAgentAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `agentAccountName`<sup>Required</sup> <a name="agentAccountName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountName"></a>

```java
public java.lang.String getAgentAccountName();
```

- *Type:* java.lang.String

---

##### `agentApplicationName`<sup>Required</sup> <a name="agentApplicationName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationName"></a>

```java
public java.lang.String getAgentApplicationName();
```

- *Type:* java.lang.String

---

##### `agentNodeName`<sup>Required</sup> <a name="agentNodeName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeName"></a>

```java
public java.lang.String getAgentNodeName();
```

- *Type:* java.lang.String

---

##### `agentTierName`<sup>Required</sup> <a name="agentTierName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierName"></a>

```java
public java.lang.String getAgentTierName();
```

- *Type:* java.lang.String

---

##### `agentUniqueHostId`<sup>Required</sup> <a name="agentUniqueHostId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostId"></a>

```java
public java.lang.String getAgentUniqueHostId();
```

- *Type:* java.lang.String

---

##### `controllerHostName`<sup>Required</sup> <a name="controllerHostName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostName"></a>

```java
public java.lang.String getControllerHostName();
```

- *Type:* java.lang.String

---

##### `controllerPort`<sup>Required</sup> <a name="controllerPort" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPort"></a>

```java
public java.lang.Number getControllerPort();
```

- *Type:* java.lang.Number

---

##### `controllerSslEnabled`<sup>Required</sup> <a name="controllerSslEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabled"></a>

```java
public java.lang.Object getControllerSslEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globallyEnabled`<sup>Required</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app_dynamics_application_performance_monitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig;

SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.builder()
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
    .agentAccountAccessKey(java.lang.String)
    .agentAccountName(java.lang.String)
    .controllerHostName(java.lang.String)
    .name(java.lang.String)
    .springCloudServiceId(java.lang.String)
//  .agentApplicationName(java.lang.String)
//  .agentNodeName(java.lang.String)
//  .agentTierName(java.lang.String)
//  .agentUniqueHostId(java.lang.String)
//  .controllerPort(java.lang.Number)
//  .controllerSslEnabled(java.lang.Boolean)
//  .controllerSslEnabled(IResolvable)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountAccessKey">agentAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountName">agentAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerHostName">controllerHostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentApplicationName">agentApplicationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentNodeName">agentNodeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentTierName">agentTierName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentUniqueHostId">agentUniqueHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerPort">controllerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerSslEnabled">controllerSslEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentAccountAccessKey`<sup>Required</sup> <a name="agentAccountAccessKey" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountAccessKey"></a>

```java
public java.lang.String getAgentAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}.

---

##### `agentAccountName`<sup>Required</sup> <a name="agentAccountName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountName"></a>

```java
public java.lang.String getAgentAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}.

---

##### `controllerHostName`<sup>Required</sup> <a name="controllerHostName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerHostName"></a>

```java
public java.lang.String getControllerHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `agentApplicationName`<sup>Optional</sup> <a name="agentApplicationName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentApplicationName"></a>

```java
public java.lang.String getAgentApplicationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}.

---

##### `agentNodeName`<sup>Optional</sup> <a name="agentNodeName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentNodeName"></a>

```java
public java.lang.String getAgentNodeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}.

---

##### `agentTierName`<sup>Optional</sup> <a name="agentTierName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentTierName"></a>

```java
public java.lang.String getAgentTierName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}.

---

##### `agentUniqueHostId`<sup>Optional</sup> <a name="agentUniqueHostId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentUniqueHostId"></a>

```java
public java.lang.String getAgentUniqueHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}.

---

##### `controllerPort`<sup>Optional</sup> <a name="controllerPort" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerPort"></a>

```java
public java.lang.Number getControllerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}.

---

##### `controllerSslEnabled`<sup>Optional</sup> <a name="controllerSslEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerSslEnabled"></a>

```java
public java.lang.Object getControllerSslEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```java
public SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#timeouts SpringCloudAppDynamicsApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app_dynamics_application_performance_monitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts;

SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#create SpringCloudAppDynamicsApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#delete SpringCloudAppDynamicsApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#read SpringCloudAppDynamicsApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#update SpringCloudAppDynamicsApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#create SpringCloudAppDynamicsApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#delete SpringCloudAppDynamicsApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#read SpringCloudAppDynamicsApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#update SpringCloudAppDynamicsApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_app_dynamics_application_performance_monitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference;

new SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>

---



