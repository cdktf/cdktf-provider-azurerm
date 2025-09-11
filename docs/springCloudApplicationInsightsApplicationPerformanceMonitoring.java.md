# `springCloudApplicationInsightsApplicationPerformanceMonitoring` Submodule <a name="`springCloudApplicationInsightsApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApplicationInsightsApplicationPerformanceMonitoring <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring azurerm_spring_cloud_application_insights_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_application_insights_application_performance_monitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring;

SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .springCloudServiceId(java.lang.String)
//  .connectionString(java.lang.String)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .roleInstance(java.lang.String)
//  .roleName(java.lang.String)
//  .samplingPercentage(java.lang.Number)
//  .samplingRequestsPerSecond(java.lang.Number)
//  .timeouts(SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#spring_cloud_service_id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#connection_string SpringCloudApplicationInsightsApplicationPerformanceMonitoring#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#globally_enabled SpringCloudApplicationInsightsApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.roleInstance">roleInstance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_instance SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_instance}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_percentage SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.samplingRequestsPerSecond">samplingRequestsPerSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_requests_per_second SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_requests_per_second}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#spring_cloud_service_id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#connection_string SpringCloudApplicationInsightsApplicationPerformanceMonitoring#connection_string}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#globally_enabled SpringCloudApplicationInsightsApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roleInstance`<sup>Optional</sup> <a name="roleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.roleInstance"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_instance SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_instance}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_name}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.samplingPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_percentage SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_percentage}.

---

##### `samplingRequestsPerSecond`<sup>Optional</sup> <a name="samplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.samplingRequestsPerSecond"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_requests_per_second SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_requests_per_second}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#timeouts SpringCloudApplicationInsightsApplicationPerformanceMonitoring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetGloballyEnabled">resetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleInstance">resetRoleInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingPercentage">resetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingRequestsPerSecond">resetSamplingRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

---

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetGloballyEnabled` <a name="resetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```java
public void resetGloballyEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetId"></a>

```java
public void resetId()
```

##### `resetRoleInstance` <a name="resetRoleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleInstance"></a>

```java
public void resetRoleInstance()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleName"></a>

```java
public void resetRoleName()
```

##### `resetSamplingPercentage` <a name="resetSamplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingPercentage"></a>

```java
public void resetSamplingPercentage()
```

##### `resetSamplingRequestsPerSecond` <a name="resetSamplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingRequestsPerSecond"></a>

```java
public void resetSamplingRequestsPerSecond()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudApplicationInsightsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_application_insights_application_performance_monitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring;

SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_application_insights_application_performance_monitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring;

SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_application_insights_application_performance_monitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring;

SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_application_insights_application_performance_monitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring;

SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpringCloudApplicationInsightsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpringCloudApplicationInsightsApplicationPerformanceMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpringCloudApplicationInsightsApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudApplicationInsightsApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabledInput">globallyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstanceInput">roleInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecondInput">samplingRequestsPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstance">roleInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecond">samplingRequestsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeouts"></a>

```java
public SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `globallyEnabledInput`<sup>Optional</sup> <a name="globallyEnabledInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```java
public java.lang.Object getGloballyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleInstanceInput`<sup>Optional</sup> <a name="roleInstanceInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstanceInput"></a>

```java
public java.lang.String getRoleInstanceInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentageInput"></a>

```java
public java.lang.Number getSamplingPercentageInput();
```

- *Type:* java.lang.Number

---

##### `samplingRequestsPerSecondInput`<sup>Optional</sup> <a name="samplingRequestsPerSecondInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecondInput"></a>

```java
public java.lang.Number getSamplingRequestsPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```java
public java.lang.String getSpringCloudServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `globallyEnabled`<sup>Required</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleInstance`<sup>Required</sup> <a name="roleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstance"></a>

```java
public java.lang.String getRoleInstance();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentage"></a>

```java
public java.lang.Number getSamplingPercentage();
```

- *Type:* java.lang.Number

---

##### `samplingRequestsPerSecond`<sup>Required</sup> <a name="samplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecond"></a>

```java
public java.lang.Number getSamplingRequestsPerSecond();
```

- *Type:* java.lang.Number

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_application_insights_application_performance_monitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig;

SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.builder()
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
    .name(java.lang.String)
    .springCloudServiceId(java.lang.String)
//  .connectionString(java.lang.String)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .roleInstance(java.lang.String)
//  .roleName(java.lang.String)
//  .samplingPercentage(java.lang.Number)
//  .samplingRequestsPerSecond(java.lang.Number)
//  .timeouts(SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#spring_cloud_service_id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#connection_string SpringCloudApplicationInsightsApplicationPerformanceMonitoring#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#globally_enabled SpringCloudApplicationInsightsApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleInstance">roleInstance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_instance SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_instance}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_percentage SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingRequestsPerSecond">samplingRequestsPerSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_requests_per_second SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_requests_per_second}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#spring_cloud_service_id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#connection_string SpringCloudApplicationInsightsApplicationPerformanceMonitoring#connection_string}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#globally_enabled SpringCloudApplicationInsightsApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roleInstance`<sup>Optional</sup> <a name="roleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleInstance"></a>

```java
public java.lang.String getRoleInstance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_instance SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_instance}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_name}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingPercentage"></a>

```java
public java.lang.Number getSamplingPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_percentage SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_percentage}.

---

##### `samplingRequestsPerSecond`<sup>Optional</sup> <a name="samplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingRequestsPerSecond"></a>

```java
public java.lang.Number getSamplingRequestsPerSecond();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_requests_per_second SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_requests_per_second}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```java
public SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#timeouts SpringCloudApplicationInsightsApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_application_insights_application_performance_monitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts;

SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#create SpringCloudApplicationInsightsApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#delete SpringCloudApplicationInsightsApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#read SpringCloudApplicationInsightsApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#update SpringCloudApplicationInsightsApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#create SpringCloudApplicationInsightsApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#delete SpringCloudApplicationInsightsApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#read SpringCloudApplicationInsightsApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#update SpringCloudApplicationInsightsApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_application_insights_application_performance_monitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference;

new SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

---



