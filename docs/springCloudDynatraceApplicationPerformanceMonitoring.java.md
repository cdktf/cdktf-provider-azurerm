# `springCloudDynatraceApplicationPerformanceMonitoring` Submodule <a name="`springCloudDynatraceApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoring <a name="SpringCloudDynatraceApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring azurerm_spring_cloud_dynatrace_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_dynatrace_application_performance_monitoring.SpringCloudDynatraceApplicationPerformanceMonitoring;

SpringCloudDynatraceApplicationPerformanceMonitoring.Builder.create(Construct scope, java.lang.String id)
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
    .connectionPoint(java.lang.String)
    .name(java.lang.String)
    .springCloudServiceId(java.lang.String)
    .tenant(java.lang.String)
    .tenantToken(java.lang.String)
//  .apiToken(java.lang.String)
//  .apiUrl(java.lang.String)
//  .environmentId(java.lang.String)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.connectionPoint">connectionPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.tenant">tenant</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.tenantToken">tenantToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.apiToken">apiToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionPoint`<sup>Required</sup> <a name="connectionPoint" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.connectionPoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.tenant"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}.

---

##### `tenantToken`<sup>Required</sup> <a name="tenantToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.tenantToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}.

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.apiToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}.

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.apiUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}.

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#timeouts SpringCloudDynatraceApplicationPerformanceMonitoring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetGloballyEnabled">resetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

---

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiToken"></a>

```java
public void resetApiToken()
```

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiUrl"></a>

```java
public void resetApiUrl()
```

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetEnvironmentId"></a>

```java
public void resetEnvironmentId()
```

##### `resetGloballyEnabled` <a name="resetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```java
public void resetGloballyEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudDynatraceApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_dynatrace_application_performance_monitoring.SpringCloudDynatraceApplicationPerformanceMonitoring;

SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_dynatrace_application_performance_monitoring.SpringCloudDynatraceApplicationPerformanceMonitoring;

SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_dynatrace_application_performance_monitoring.SpringCloudDynatraceApplicationPerformanceMonitoring;

SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_dynatrace_application_performance_monitoring.SpringCloudDynatraceApplicationPerformanceMonitoring;

SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpringCloudDynatraceApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpringCloudDynatraceApplicationPerformanceMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpringCloudDynatraceApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudDynatraceApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiTokenInput">apiTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrlInput">apiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPointInput">connectionPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabledInput">globallyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantInput">tenantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantTokenInput">tenantTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPoint">connectionPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenant">tenant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantToken">tenantToken</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeouts"></a>

```java
public SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiTokenInput"></a>

```java
public java.lang.String getApiTokenInput();
```

- *Type:* java.lang.String

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrlInput"></a>

```java
public java.lang.String getApiUrlInput();
```

- *Type:* java.lang.String

---

##### `connectionPointInput`<sup>Optional</sup> <a name="connectionPointInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPointInput"></a>

```java
public java.lang.String getConnectionPointInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `globallyEnabledInput`<sup>Optional</sup> <a name="globallyEnabledInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```java
public java.lang.Object getGloballyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```java
public java.lang.String getSpringCloudServiceIdInput();
```

- *Type:* java.lang.String

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantInput"></a>

```java
public java.lang.String getTenantInput();
```

- *Type:* java.lang.String

---

##### `tenantTokenInput`<sup>Optional</sup> <a name="tenantTokenInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantTokenInput"></a>

```java
public java.lang.String getTenantTokenInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

---

##### `connectionPoint`<sup>Required</sup> <a name="connectionPoint" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPoint"></a>

```java
public java.lang.String getConnectionPoint();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `globallyEnabled`<sup>Required</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

---

##### `tenantToken`<sup>Required</sup> <a name="tenantToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantToken"></a>

```java
public java.lang.String getTenantToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoringConfig <a name="SpringCloudDynatraceApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_dynatrace_application_performance_monitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig;

SpringCloudDynatraceApplicationPerformanceMonitoringConfig.builder()
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
    .connectionPoint(java.lang.String)
    .name(java.lang.String)
    .springCloudServiceId(java.lang.String)
    .tenant(java.lang.String)
    .tenantToken(java.lang.String)
//  .apiToken(java.lang.String)
//  .apiUrl(java.lang.String)
//  .environmentId(java.lang.String)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connectionPoint">connectionPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenant">tenant</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenantToken">tenantToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionPoint`<sup>Required</sup> <a name="connectionPoint" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connectionPoint"></a>

```java
public java.lang.String getConnectionPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}.

---

##### `tenantToken`<sup>Required</sup> <a name="tenantToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenantToken"></a>

```java
public java.lang.String getTenantToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}.

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}.

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}.

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```java
public SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#timeouts SpringCloudDynatraceApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts <a name="SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_dynatrace_application_performance_monitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts;

SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#create SpringCloudDynatraceApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#delete SpringCloudDynatraceApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#read SpringCloudDynatraceApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#update SpringCloudDynatraceApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#create SpringCloudDynatraceApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#delete SpringCloudDynatraceApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#read SpringCloudDynatraceApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#update SpringCloudDynatraceApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_dynatrace_application_performance_monitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference;

new SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

---



