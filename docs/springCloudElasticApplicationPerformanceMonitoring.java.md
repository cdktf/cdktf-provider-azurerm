# `springCloudElasticApplicationPerformanceMonitoring` Submodule <a name="`springCloudElasticApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudElasticApplicationPerformanceMonitoring <a name="SpringCloudElasticApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring azurerm_spring_cloud_elastic_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_elastic_application_performance_monitoring.SpringCloudElasticApplicationPerformanceMonitoring;

SpringCloudElasticApplicationPerformanceMonitoring.Builder.create(Construct scope, java.lang.String id)
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
    .applicationPackages(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .serverUrl(java.lang.String)
    .serviceName(java.lang.String)
    .springCloudServiceId(java.lang.String)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SpringCloudElasticApplicationPerformanceMonitoringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.applicationPackages">applicationPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationPackages`<sup>Required</sup> <a name="applicationPackages" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.applicationPackages"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}.

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.serverUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.springCloudServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.globallyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#timeouts SpringCloudElasticApplicationPerformanceMonitoring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetGloballyEnabled">resetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudElasticApplicationPerformanceMonitoringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>

---

##### `resetGloballyEnabled` <a name="resetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```java
public void resetGloballyEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudElasticApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_elastic_application_performance_monitoring.SpringCloudElasticApplicationPerformanceMonitoring;

SpringCloudElasticApplicationPerformanceMonitoring.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_elastic_application_performance_monitoring.SpringCloudElasticApplicationPerformanceMonitoring;

SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_elastic_application_performance_monitoring.SpringCloudElasticApplicationPerformanceMonitoring;

SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_elastic_application_performance_monitoring.SpringCloudElasticApplicationPerformanceMonitoring;

SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpringCloudElasticApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpringCloudElasticApplicationPerformanceMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpringCloudElasticApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudElasticApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackagesInput">applicationPackagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabledInput">globallyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrlInput">serverUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackages">applicationPackages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeouts"></a>

```java
public SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `applicationPackagesInput`<sup>Optional</sup> <a name="applicationPackagesInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackagesInput"></a>

```java
public java.util.List<java.lang.String> getApplicationPackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `globallyEnabledInput`<sup>Optional</sup> <a name="globallyEnabledInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```java
public java.lang.Object getGloballyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serverUrlInput`<sup>Optional</sup> <a name="serverUrlInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrlInput"></a>

```java
public java.lang.String getServerUrlInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```java
public java.lang.String getSpringCloudServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>

---

##### `applicationPackages`<sup>Required</sup> <a name="applicationPackages" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackages"></a>

```java
public java.util.List<java.lang.String> getApplicationPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `globallyEnabled`<sup>Required</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudElasticApplicationPerformanceMonitoringConfig <a name="SpringCloudElasticApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_elastic_application_performance_monitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig;

SpringCloudElasticApplicationPerformanceMonitoringConfig.builder()
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
    .applicationPackages(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .serverUrl(java.lang.String)
    .serviceName(java.lang.String)
    .springCloudServiceId(java.lang.String)
//  .globallyEnabled(java.lang.Boolean)
//  .globallyEnabled(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SpringCloudElasticApplicationPerformanceMonitoringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.applicationPackages">applicationPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.globallyEnabled">globallyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationPackages`<sup>Required</sup> <a name="applicationPackages" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.applicationPackages"></a>

```java
public java.util.List<java.lang.String> getApplicationPackages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}.

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```java
public java.lang.Object getGloballyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```java
public SpringCloudElasticApplicationPerformanceMonitoringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#timeouts SpringCloudElasticApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudElasticApplicationPerformanceMonitoringTimeouts <a name="SpringCloudElasticApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_elastic_application_performance_monitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts;

SpringCloudElasticApplicationPerformanceMonitoringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#create SpringCloudElasticApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#delete SpringCloudElasticApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#read SpringCloudElasticApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#update SpringCloudElasticApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#create SpringCloudElasticApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#delete SpringCloudElasticApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#read SpringCloudElasticApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#update SpringCloudElasticApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_elastic_application_performance_monitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference;

new SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>

---



