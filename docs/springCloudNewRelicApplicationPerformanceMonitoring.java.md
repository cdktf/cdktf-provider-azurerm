# `springCloudNewRelicApplicationPerformanceMonitoring` Submodule <a name="`springCloudNewRelicApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudNewRelicApplicationPerformanceMonitoring <a name="SpringCloudNewRelicApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring azurerm_spring_cloud_new_relic_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_new_relic_application_performance_monitoring.SpringCloudNewRelicApplicationPerformanceMonitoring;

SpringCloudNewRelicApplicationPerformanceMonitoring.Builder.create(Construct scope, java.lang.String id)
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
    .appName(java.lang.String)
    .licenseKey(java.lang.String)
    .name(java.lang.String)
    .springCloudServiceId(java.lang.String)
//  .agentEnabled(java.lang.Boolean)
//  .agentEnabled(IResolvable)
//  .appServerPort(java.lang.Number)
//  .auditModeEnabled(java.lang.Boolean)
//  .auditModeEnabled(IResolvable)
//  .autoAppNamingEnabled(java.lang.Boolean)
//  .autoAppNamingEnabled(IResolvable)
//  .autoTransactionNamingEnabled(java.lang.Boolean)
//  .autoTransactionNamingEnabled(IResolvable)
//  .customTracingEnabled(java.lang.Boolean)
//  .customTracingEnabled(IResolvable)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.appName">appName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.licenseKey">licenseKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.agentEnabled">agentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.appServerPort">appServerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.auditModeEnabled">auditModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.autoAppNamingEnabled">autoAppNamingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.autoTransactionNamingEnabled">autoTransactionNamingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.customTracingEnabled">customTracingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.appName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}.

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.licenseKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `agentEnabled`<sup>Optional</sup> <a name="agentEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.agentEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}.

---

##### `appServerPort`<sup>Optional</sup> <a name="appServerPort" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.appServerPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}.

---

##### `auditModeEnabled`<sup>Optional</sup> <a name="auditModeEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.auditModeEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}.

---

##### `autoAppNamingEnabled`<sup>Optional</sup> <a name="autoAppNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.autoAppNamingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}.

---

##### `autoTransactionNamingEnabled`<sup>Optional</sup> <a name="autoTransactionNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.autoTransactionNamingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}.

---

##### `customTracingEnabled`<sup>Optional</sup> <a name="customTracingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.customTracingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#timeouts SpringCloudNewRelicApplicationPerformanceMonitoring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAgentEnabled">resetAgentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAppServerPort">resetAppServerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAuditModeEnabled">resetAuditModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoAppNamingEnabled">resetAutoAppNamingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoTransactionNamingEnabled">resetAutoTransactionNamingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetCustomTracingEnabled">resetCustomTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetGloballyEnabled">resetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>

---

##### `resetAgentEnabled` <a name="resetAgentEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAgentEnabled"></a>

```java
public void resetAgentEnabled()
```

##### `resetAppServerPort` <a name="resetAppServerPort" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAppServerPort"></a>

```java
public void resetAppServerPort()
```

##### `resetAuditModeEnabled` <a name="resetAuditModeEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAuditModeEnabled"></a>

```java
public void resetAuditModeEnabled()
```

##### `resetAutoAppNamingEnabled` <a name="resetAutoAppNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoAppNamingEnabled"></a>

```java
public void resetAutoAppNamingEnabled()
```

##### `resetAutoTransactionNamingEnabled` <a name="resetAutoTransactionNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoTransactionNamingEnabled"></a>

```java
public void resetAutoTransactionNamingEnabled()
```

##### `resetCustomTracingEnabled` <a name="resetCustomTracingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetCustomTracingEnabled"></a>

```java
public void resetCustomTracingEnabled()
```

##### `resetGloballyEnabled` <a name="resetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```java
public void resetGloballyEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudNewRelicApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_new_relic_application_performance_monitoring.SpringCloudNewRelicApplicationPerformanceMonitoring;

SpringCloudNewRelicApplicationPerformanceMonitoring.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_new_relic_application_performance_monitoring.SpringCloudNewRelicApplicationPerformanceMonitoring;

SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_new_relic_application_performance_monitoring.SpringCloudNewRelicApplicationPerformanceMonitoring;

SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_new_relic_application_performance_monitoring.SpringCloudNewRelicApplicationPerformanceMonitoring;

SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpringCloudNewRelicApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpringCloudNewRelicApplicationPerformanceMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpringCloudNewRelicApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudNewRelicApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabledInput">agentEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appNameInput">appNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPortInput">appServerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabledInput">auditModeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabledInput">autoAppNamingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabledInput">autoTransactionNamingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabledInput">customTracingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabledInput">globallyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKeyInput">licenseKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabled">agentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPort">appServerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabled">auditModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabled">autoAppNamingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabled">autoTransactionNamingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabled">customTracingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKey">licenseKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeouts"></a>

```java
public SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `agentEnabledInput`<sup>Optional</sup> <a name="agentEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabledInput"></a>

```java
public java.lang.Object getAgentEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appNameInput"></a>

```java
public java.lang.String getAppNameInput();
```

- *Type:* java.lang.String

---

##### `appServerPortInput`<sup>Optional</sup> <a name="appServerPortInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPortInput"></a>

```java
public java.lang.Number getAppServerPortInput();
```

- *Type:* java.lang.Number

---

##### `auditModeEnabledInput`<sup>Optional</sup> <a name="auditModeEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabledInput"></a>

```java
public java.lang.Object getAuditModeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAppNamingEnabledInput`<sup>Optional</sup> <a name="autoAppNamingEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabledInput"></a>

```java
public java.lang.Object getAutoAppNamingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoTransactionNamingEnabledInput`<sup>Optional</sup> <a name="autoTransactionNamingEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabledInput"></a>

```java
public java.lang.Object getAutoTransactionNamingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customTracingEnabledInput`<sup>Optional</sup> <a name="customTracingEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabledInput"></a>

```java
public java.lang.Object getCustomTracingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globallyEnabledInput`<sup>Optional</sup> <a name="globallyEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```java
public java.lang.Object getGloballyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `licenseKeyInput`<sup>Optional</sup> <a name="licenseKeyInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKeyInput"></a>

```java
public java.lang.String getLicenseKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```java
public java.lang.String getSpringCloudServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>

---

##### `agentEnabled`<sup>Required</sup> <a name="agentEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabled"></a>

```java
public java.lang.Object getAgentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `appServerPort`<sup>Required</sup> <a name="appServerPort" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPort"></a>

```java
public java.lang.Number getAppServerPort();
```

- *Type:* java.lang.Number

---

##### `auditModeEnabled`<sup>Required</sup> <a name="auditModeEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabled"></a>

```java
public java.lang.Object getAuditModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAppNamingEnabled`<sup>Required</sup> <a name="autoAppNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabled"></a>

```java
public java.lang.Object getAutoAppNamingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoTransactionNamingEnabled`<sup>Required</sup> <a name="autoTransactionNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabled"></a>

```java
public java.lang.Object getAutoTransactionNamingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customTracingEnabled`<sup>Required</sup> <a name="customTracingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabled"></a>

```java
public java.lang.Object getCustomTracingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `globallyEnabled`<sup>Required</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKey"></a>

```java
public java.lang.String getLicenseKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudNewRelicApplicationPerformanceMonitoringConfig <a name="SpringCloudNewRelicApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_new_relic_application_performance_monitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig;

SpringCloudNewRelicApplicationPerformanceMonitoringConfig.builder()
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
    .appName(java.lang.String)
    .licenseKey(java.lang.String)
    .name(java.lang.String)
    .springCloudServiceId(java.lang.String)
//  .agentEnabled(java.lang.Boolean)
//  .agentEnabled(IResolvable)
//  .appServerPort(java.lang.Number)
//  .auditModeEnabled(java.lang.Boolean)
//  .auditModeEnabled(IResolvable)
//  .autoAppNamingEnabled(java.lang.Boolean)
//  .autoAppNamingEnabled(IResolvable)
//  .autoTransactionNamingEnabled(java.lang.Boolean)
//  .autoTransactionNamingEnabled(IResolvable)
//  .customTracingEnabled(java.lang.Boolean)
//  .customTracingEnabled(IResolvable)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appName">appName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.licenseKey">licenseKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.agentEnabled">agentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appServerPort">appServerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.auditModeEnabled">auditModeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoAppNamingEnabled">autoAppNamingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoTransactionNamingEnabled">autoTransactionNamingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.customTracingEnabled">customTracingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}.

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.licenseKey"></a>

```java
public java.lang.String getLicenseKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `agentEnabled`<sup>Optional</sup> <a name="agentEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.agentEnabled"></a>

```java
public java.lang.Object getAgentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}.

---

##### `appServerPort`<sup>Optional</sup> <a name="appServerPort" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appServerPort"></a>

```java
public java.lang.Number getAppServerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}.

---

##### `auditModeEnabled`<sup>Optional</sup> <a name="auditModeEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.auditModeEnabled"></a>

```java
public java.lang.Object getAuditModeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}.

---

##### `autoAppNamingEnabled`<sup>Optional</sup> <a name="autoAppNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoAppNamingEnabled"></a>

```java
public java.lang.Object getAutoAppNamingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}.

---

##### `autoTransactionNamingEnabled`<sup>Optional</sup> <a name="autoTransactionNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoTransactionNamingEnabled"></a>

```java
public java.lang.Object getAutoTransactionNamingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}.

---

##### `customTracingEnabled`<sup>Optional</sup> <a name="customTracingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.customTracingEnabled"></a>

```java
public java.lang.Object getCustomTracingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```java
public SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#timeouts SpringCloudNewRelicApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts <a name="SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_new_relic_application_performance_monitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts;

SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#create SpringCloudNewRelicApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#delete SpringCloudNewRelicApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#read SpringCloudNewRelicApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#update SpringCloudNewRelicApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#create SpringCloudNewRelicApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#delete SpringCloudNewRelicApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#read SpringCloudNewRelicApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#update SpringCloudNewRelicApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_new_relic_application_performance_monitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference;

new SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>

---



