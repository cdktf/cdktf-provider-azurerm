# `azurerm_spring_cloud_gateway`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_gateway`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway).

# `springCloudGateway` Submodule <a name="`springCloudGateway` Submodule" id="@cdktf/provider-azurerm.springCloudGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudGateway <a name="SpringCloudGateway" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway azurerm_spring_cloud_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGateway;

SpringCloudGateway.Builder.create(Construct scope, java.lang.String id)
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
//  .apiMetadata(SpringCloudGatewayApiMetadata)
//  .applicationPerformanceMonitoringTypes(java.util.List<java.lang.String>)
//  .clientAuthorization(SpringCloudGatewayClientAuthorization)
//  .cors(SpringCloudGatewayCors)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .quota(SpringCloudGatewayQuota)
//  .sensitiveEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .sso(SpringCloudGatewaySso)
//  .timeouts(SpringCloudGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.apiMetadata">apiMetadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | api_metadata block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.applicationPerformanceMonitoringTypes">applicationPerformanceMonitoringTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.clientAuthorization">clientAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | client_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.sensitiveEnvironmentVariables">sensitiveEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.springCloudServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}.

---

##### `apiMetadata`<sup>Optional</sup> <a name="apiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.apiMetadata"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

api_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#api_metadata SpringCloudGateway#api_metadata}

---

##### `applicationPerformanceMonitoringTypes`<sup>Optional</sup> <a name="applicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.applicationPerformanceMonitoringTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}.

---

##### `clientAuthorization`<sup>Optional</sup> <a name="clientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.clientAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

client_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#client_authorization SpringCloudGateway#client_authorization}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#cors SpringCloudGateway#cors}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.environmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.httpsOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.instanceCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.quota"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#quota SpringCloudGateway#quota}

---

##### `sensitiveEnvironmentVariables`<sup>Optional</sup> <a name="sensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.sensitiveEnvironmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}.

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.sso"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#sso SpringCloudGateway#sso}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#timeouts SpringCloudGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata">putApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization">putClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso">putSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApiMetadata">resetApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringTypes">resetApplicationPerformanceMonitoringTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetClientAuthorization">resetClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSensitiveEnvironmentVariables">resetSensitiveEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSso">resetSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putApiMetadata` <a name="putApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata"></a>

```java
public void putApiMetadata(SpringCloudGatewayApiMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---

##### `putClientAuthorization` <a name="putClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization"></a>

```java
public void putClientAuthorization(SpringCloudGatewayClientAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors"></a>

```java
public void putCors(SpringCloudGatewayCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota"></a>

```java
public void putQuota(SpringCloudGatewayQuota value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---

##### `putSso` <a name="putSso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso"></a>

```java
public void putSso(SpringCloudGatewaySso value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

---

##### `resetApiMetadata` <a name="resetApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApiMetadata"></a>

```java
public void resetApiMetadata()
```

##### `resetApplicationPerformanceMonitoringTypes` <a name="resetApplicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringTypes"></a>

```java
public void resetApplicationPerformanceMonitoringTypes()
```

##### `resetClientAuthorization` <a name="resetClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetClientAuthorization"></a>

```java
public void resetClientAuthorization()
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetCors"></a>

```java
public void resetCors()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetHttpsOnly"></a>

```java
public void resetHttpsOnly()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetSensitiveEnvironmentVariables` <a name="resetSensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSensitiveEnvironmentVariables"></a>

```java
public void resetSensitiveEnvironmentVariables()
```

##### `resetSso` <a name="resetSso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSso"></a>

```java
public void resetSso()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGateway;

SpringCloudGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGateway;

SpringCloudGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGateway;

SpringCloudGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadata">apiMetadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference">SpringCloudGatewayApiMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorization">clientAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference">SpringCloudGatewayClientAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference">SpringCloudGatewayCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference">SpringCloudGatewayQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference">SpringCloudGatewaySsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference">SpringCloudGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadataInput">apiMetadataInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypesInput">applicationPerformanceMonitoringTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorizationInput">clientAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariablesInput">sensitiveEnvironmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.ssoInput">ssoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypes">applicationPerformanceMonitoringTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariables">sensitiveEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiMetadata`<sup>Required</sup> <a name="apiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadata"></a>

```java
public SpringCloudGatewayApiMetadataOutputReference getApiMetadata();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference">SpringCloudGatewayApiMetadataOutputReference</a>

---

##### `clientAuthorization`<sup>Required</sup> <a name="clientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorization"></a>

```java
public SpringCloudGatewayClientAuthorizationOutputReference getClientAuthorization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference">SpringCloudGatewayClientAuthorizationOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cors"></a>

```java
public SpringCloudGatewayCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference">SpringCloudGatewayCorsOutputReference</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quota"></a>

```java
public SpringCloudGatewayQuotaOutputReference getQuota();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference">SpringCloudGatewayQuotaOutputReference</a>

---

##### `sso`<sup>Required</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sso"></a>

```java
public SpringCloudGatewaySsoOutputReference getSso();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference">SpringCloudGatewaySsoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeouts"></a>

```java
public SpringCloudGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference">SpringCloudGatewayTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `apiMetadataInput`<sup>Optional</sup> <a name="apiMetadataInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadataInput"></a>

```java
public SpringCloudGatewayApiMetadata getApiMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---

##### `applicationPerformanceMonitoringTypesInput`<sup>Optional</sup> <a name="applicationPerformanceMonitoringTypesInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypesInput"></a>

```java
public java.util.List<java.lang.String> getApplicationPerformanceMonitoringTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientAuthorizationInput`<sup>Optional</sup> <a name="clientAuthorizationInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorizationInput"></a>

```java
public SpringCloudGatewayClientAuthorization getClientAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.corsInput"></a>

```java
public SpringCloudGatewayCors getCorsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnlyInput"></a>

```java
public java.lang.Object getHttpsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quotaInput"></a>

```java
public SpringCloudGatewayQuota getQuotaInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---

##### `sensitiveEnvironmentVariablesInput`<sup>Optional</sup> <a name="sensitiveEnvironmentVariablesInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceIdInput"></a>

```java
public java.lang.String getSpringCloudServiceIdInput();
```

- *Type:* java.lang.String

---

##### `ssoInput`<sup>Optional</sup> <a name="ssoInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.ssoInput"></a>

```java
public SpringCloudGatewaySso getSsoInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

---

##### `applicationPerformanceMonitoringTypes`<sup>Required</sup> <a name="applicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypes"></a>

```java
public java.util.List<java.lang.String> getApplicationPerformanceMonitoringTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sensitiveEnvironmentVariables`<sup>Required</sup> <a name="sensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudGatewayApiMetadata <a name="SpringCloudGatewayApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayApiMetadata;

SpringCloudGatewayApiMetadata.builder()
//  .description(java.lang.String)
//  .documentationUrl(java.lang.String)
//  .serverUrl(java.lang.String)
//  .title(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.documentationUrl">documentationUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}.

---

##### `documentationUrl`<sup>Optional</sup> <a name="documentationUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.documentationUrl"></a>

```java
public java.lang.String getDocumentationUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}.

---

##### `serverUrl`<sup>Optional</sup> <a name="serverUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}.

---

### SpringCloudGatewayClientAuthorization <a name="SpringCloudGatewayClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayClientAuthorization;

SpringCloudGatewayClientAuthorization.builder()
//  .certificateIds(java.util.List<java.lang.String>)
//  .verificationEnabled(java.lang.Boolean)
//  .verificationEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.certificateIds">certificateIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.verificationEnabled">verificationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}. |

---

##### `certificateIds`<sup>Optional</sup> <a name="certificateIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.certificateIds"></a>

```java
public java.util.List<java.lang.String> getCertificateIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}.

---

##### `verificationEnabled`<sup>Optional</sup> <a name="verificationEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.verificationEnabled"></a>

```java
public java.lang.Object getVerificationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}.

---

### SpringCloudGatewayConfig <a name="SpringCloudGatewayConfig" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayConfig;

SpringCloudGatewayConfig.builder()
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
//  .apiMetadata(SpringCloudGatewayApiMetadata)
//  .applicationPerformanceMonitoringTypes(java.util.List<java.lang.String>)
//  .clientAuthorization(SpringCloudGatewayClientAuthorization)
//  .cors(SpringCloudGatewayCors)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .quota(SpringCloudGatewayQuota)
//  .sensitiveEnvironmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .sso(SpringCloudGatewaySso)
//  .timeouts(SpringCloudGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.apiMetadata">apiMetadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | api_metadata block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringTypes">applicationPerformanceMonitoringTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.clientAuthorization">clientAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | client_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sensitiveEnvironmentVariables">sensitiveEnvironmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.springCloudServiceId"></a>

```java
public java.lang.String getSpringCloudServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}.

---

##### `apiMetadata`<sup>Optional</sup> <a name="apiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.apiMetadata"></a>

```java
public SpringCloudGatewayApiMetadata getApiMetadata();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

api_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#api_metadata SpringCloudGateway#api_metadata}

---

##### `applicationPerformanceMonitoringTypes`<sup>Optional</sup> <a name="applicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringTypes"></a>

```java
public java.util.List<java.lang.String> getApplicationPerformanceMonitoringTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}.

---

##### `clientAuthorization`<sup>Optional</sup> <a name="clientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.clientAuthorization"></a>

```java
public SpringCloudGatewayClientAuthorization getClientAuthorization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

client_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#client_authorization SpringCloudGateway#client_authorization}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.cors"></a>

```java
public SpringCloudGatewayCors getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#cors SpringCloudGateway#cors}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.quota"></a>

```java
public SpringCloudGatewayQuota getQuota();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#quota SpringCloudGateway#quota}

---

##### `sensitiveEnvironmentVariables`<sup>Optional</sup> <a name="sensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sensitiveEnvironmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}.

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sso"></a>

```java
public SpringCloudGatewaySso getSso();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#sso SpringCloudGateway#sso}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.timeouts"></a>

```java
public SpringCloudGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#timeouts SpringCloudGateway#timeouts}

---

### SpringCloudGatewayCors <a name="SpringCloudGatewayCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayCors;

SpringCloudGatewayCors.builder()
//  .allowedHeaders(java.util.List<java.lang.String>)
//  .allowedMethods(java.util.List<java.lang.String>)
//  .allowedOrigins(java.util.List<java.lang.String>)
//  .credentialsAllowed(java.lang.Boolean)
//  .credentialsAllowed(IResolvable)
//  .exposedHeaders(java.util.List<java.lang.String>)
//  .maxAgeSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.credentialsAllowed">credentialsAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}. |

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}.

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}.

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}.

---

##### `credentialsAllowed`<sup>Optional</sup> <a name="credentialsAllowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.credentialsAllowed"></a>

```java
public java.lang.Object getCredentialsAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}.

---

##### `exposedHeaders`<sup>Optional</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}.

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}.

---

### SpringCloudGatewayQuota <a name="SpringCloudGatewayQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayQuota;

SpringCloudGatewayQuota.builder()
//  .cpu(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.cpu">cpu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.memory">memory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}.

---

### SpringCloudGatewaySso <a name="SpringCloudGatewaySso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewaySso;

SpringCloudGatewaySso.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .issuerUri(java.lang.String)
//  .scope(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}.

---

##### `issuerUri`<sup>Optional</sup> <a name="issuerUri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}.

---

### SpringCloudGatewayTimeouts <a name="SpringCloudGatewayTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayTimeouts;

SpringCloudGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudGatewayApiMetadataOutputReference <a name="SpringCloudGatewayApiMetadataOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayApiMetadataOutputReference;

new SpringCloudGatewayApiMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDocumentationUrl">resetDocumentationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetServerUrl">resetServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentationUrl` <a name="resetDocumentationUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDocumentationUrl"></a>

```java
public void resetDocumentationUrl()
```

##### `resetServerUrl` <a name="resetServerUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetServerUrl"></a>

```java
public void resetServerUrl()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrlInput">documentationUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrlInput">serverUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrl">documentationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `documentationUrlInput`<sup>Optional</sup> <a name="documentationUrlInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrlInput"></a>

```java
public java.lang.String getDocumentationUrlInput();
```

- *Type:* java.lang.String

---

##### `serverUrlInput`<sup>Optional</sup> <a name="serverUrlInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrlInput"></a>

```java
public java.lang.String getServerUrlInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `documentationUrl`<sup>Required</sup> <a name="documentationUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrl"></a>

```java
public java.lang.String getDocumentationUrl();
```

- *Type:* java.lang.String

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.internalValue"></a>

```java
public SpringCloudGatewayApiMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---


### SpringCloudGatewayClientAuthorizationOutputReference <a name="SpringCloudGatewayClientAuthorizationOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayClientAuthorizationOutputReference;

new SpringCloudGatewayClientAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetCertificateIds">resetCertificateIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetVerificationEnabled">resetVerificationEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIds` <a name="resetCertificateIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetCertificateIds"></a>

```java
public void resetCertificateIds()
```

##### `resetVerificationEnabled` <a name="resetVerificationEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetVerificationEnabled"></a>

```java
public void resetVerificationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIdsInput">certificateIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabledInput">verificationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIds">certificateIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabled">verificationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateIdsInput`<sup>Optional</sup> <a name="certificateIdsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIdsInput"></a>

```java
public java.util.List<java.lang.String> getCertificateIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verificationEnabledInput`<sup>Optional</sup> <a name="verificationEnabledInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabledInput"></a>

```java
public java.lang.Object getVerificationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificateIds`<sup>Required</sup> <a name="certificateIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIds"></a>

```java
public java.util.List<java.lang.String> getCertificateIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verificationEnabled`<sup>Required</sup> <a name="verificationEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabled"></a>

```java
public java.lang.Object getVerificationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.internalValue"></a>

```java
public SpringCloudGatewayClientAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---


### SpringCloudGatewayCorsOutputReference <a name="SpringCloudGatewayCorsOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayCorsOutputReference;

new SpringCloudGatewayCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetCredentialsAllowed">resetCredentialsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetExposedHeaders">resetExposedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedHeaders"></a>

```java
public void resetAllowedHeaders()
```

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedMethods"></a>

```java
public void resetAllowedMethods()
```

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOrigins"></a>

```java
public void resetAllowedOrigins()
```

##### `resetCredentialsAllowed` <a name="resetCredentialsAllowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetCredentialsAllowed"></a>

```java
public void resetCredentialsAllowed()
```

##### `resetExposedHeaders` <a name="resetExposedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetExposedHeaders"></a>

```java
public void resetExposedHeaders()
```

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetMaxAgeSeconds"></a>

```java
public void resetMaxAgeSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowedInput">credentialsAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowed">credentialsAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `credentialsAllowedInput`<sup>Optional</sup> <a name="credentialsAllowedInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowedInput"></a>

```java
public java.lang.Object getCredentialsAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSecondsInput"></a>

```java
public java.lang.Number getMaxAgeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `credentialsAllowed`<sup>Required</sup> <a name="credentialsAllowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowed"></a>

```java
public java.lang.Object getCredentialsAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.internalValue"></a>

```java
public SpringCloudGatewayCors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---


### SpringCloudGatewayQuotaOutputReference <a name="SpringCloudGatewayQuotaOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayQuotaOutputReference;

new SpringCloudGatewayQuotaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.internalValue"></a>

```java
public SpringCloudGatewayQuota getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---


### SpringCloudGatewaySsoOutputReference <a name="SpringCloudGatewaySsoOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewaySsoOutputReference;

new SpringCloudGatewaySsoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetIssuerUri">resetIssuerUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetIssuerUri` <a name="resetIssuerUri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetIssuerUri"></a>

```java
public void resetIssuerUri()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUriInput"></a>

```java
public java.lang.String getIssuerUriInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scopeInput"></a>

```java
public java.util.List<java.lang.String> getScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.internalValue"></a>

```java
public SpringCloudGatewaySso getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---


### SpringCloudGatewayTimeoutsOutputReference <a name="SpringCloudGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway.SpringCloudGatewayTimeoutsOutputReference;

new SpringCloudGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

---



