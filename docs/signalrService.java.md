# `azurerm_signalr_service`

Refer to the Terraform Registory for docs: [`azurerm_signalr_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service).

# `signalrService` Submodule <a name="`signalrService` Submodule" id="@cdktf/provider-azurerm.signalrService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrService <a name="SignalrService" id="@cdktf/provider-azurerm.signalrService.SignalrService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service azurerm_signalr_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrService;

SignalrService.Builder.create(Construct scope, java.lang.String id)
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
    .sku(SignalrServiceSku)
//  .aadAuthEnabled(java.lang.Boolean)
//  .aadAuthEnabled(IResolvable)
//  .connectivityLogsEnabled(java.lang.Boolean)
//  .connectivityLogsEnabled(IResolvable)
//  .cors(IResolvable)
//  .cors(java.util.List<SignalrServiceCors>)
//  .httpRequestLogsEnabled(java.lang.Boolean)
//  .httpRequestLogsEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(SignalrServiceIdentity)
//  .liveTrace(SignalrServiceLiveTrace)
//  .liveTraceEnabled(java.lang.Boolean)
//  .liveTraceEnabled(IResolvable)
//  .localAuthEnabled(java.lang.Boolean)
//  .localAuthEnabled(IResolvable)
//  .messagingLogsEnabled(java.lang.Boolean)
//  .messagingLogsEnabled(IResolvable)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .serverlessConnectionTimeoutInSeconds(java.lang.Number)
//  .serviceMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SignalrServiceTimeouts)
//  .tlsClientCertEnabled(java.lang.Boolean)
//  .tlsClientCertEnabled(IResolvable)
//  .upstreamEndpoint(IResolvable)
//  .upstreamEndpoint(java.util.List<SignalrServiceUpstreamEndpoint>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#location SignalrService#location}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#name SignalrService#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.aadAuthEnabled">aadAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.connectivityLogsEnabled">connectivityLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.cors">cors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.httpRequestLogsEnabled">httpRequestLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#id SignalrService#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.liveTrace">liveTrace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.liveTraceEnabled">liveTraceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.localAuthEnabled">localAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.messagingLogsEnabled">messagingLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.serverlessConnectionTimeoutInSeconds">serverlessConnectionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.serviceMode">serviceMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#service_mode SignalrService#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#tags SignalrService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.upstreamEndpoint">upstreamEndpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>></code> | upstream_endpoint block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#location SignalrService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#name SignalrService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#sku SignalrService#sku}

---

##### `aadAuthEnabled`<sup>Optional</sup> <a name="aadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.aadAuthEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}.

---

##### `connectivityLogsEnabled`<sup>Optional</sup> <a name="connectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.connectivityLogsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.cors"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#cors SignalrService#cors}

---

##### `httpRequestLogsEnabled`<sup>Optional</sup> <a name="httpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.httpRequestLogsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#id SignalrService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#identity SignalrService#identity}

---

##### `liveTrace`<sup>Optional</sup> <a name="liveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.liveTrace"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#live_trace SignalrService#live_trace}

---

##### `liveTraceEnabled`<sup>Optional</sup> <a name="liveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.liveTraceEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}.

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.localAuthEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}.

---

##### `messagingLogsEnabled`<sup>Optional</sup> <a name="messagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.messagingLogsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}.

---

##### `serverlessConnectionTimeoutInSeconds`<sup>Optional</sup> <a name="serverlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.serverlessConnectionTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}.

---

##### `serviceMode`<sup>Optional</sup> <a name="serviceMode" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.serviceMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#service_mode SignalrService#service_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#tags SignalrService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#timeouts SignalrService#timeouts}

---

##### `tlsClientCertEnabled`<sup>Optional</sup> <a name="tlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.tlsClientCertEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}.

---

##### `upstreamEndpoint`<sup>Optional</sup> <a name="upstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.upstreamEndpoint"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>>

upstream_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#upstream_endpoint SignalrService#upstream_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace">putLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putSku">putSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint">putUpstreamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetAadAuthEnabled">resetAadAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetConnectivityLogsEnabled">resetConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetHttpRequestLogsEnabled">resetHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTrace">resetLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTraceEnabled">resetLiveTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLocalAuthEnabled">resetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetMessagingLogsEnabled">resetMessagingLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetServerlessConnectionTimeoutInSeconds">resetServerlessConnectionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetServiceMode">resetServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTlsClientCertEnabled">resetTlsClientCertEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetUpstreamEndpoint">resetUpstreamEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrService.SignalrService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.signalrService.SignalrService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.signalrService.SignalrService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.signalrService.SignalrService.putCors"></a>

```java
public void putCors(IResolvable OR java.util.List<SignalrServiceCors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putCors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity"></a>

```java
public void putIdentity(SignalrServiceIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---

##### `putLiveTrace` <a name="putLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace"></a>

```java
public void putLiveTrace(SignalrServiceLiveTrace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---

##### `putSku` <a name="putSku" id="@cdktf/provider-azurerm.signalrService.SignalrService.putSku"></a>

```java
public void putSku(SignalrServiceSku value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts"></a>

```java
public void putTimeouts(SignalrServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

---

##### `putUpstreamEndpoint` <a name="putUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint"></a>

```java
public void putUpstreamEndpoint(IResolvable OR java.util.List<SignalrServiceUpstreamEndpoint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>>

---

##### `resetAadAuthEnabled` <a name="resetAadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetAadAuthEnabled"></a>

```java
public void resetAadAuthEnabled()
```

##### `resetConnectivityLogsEnabled` <a name="resetConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetConnectivityLogsEnabled"></a>

```java
public void resetConnectivityLogsEnabled()
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetCors"></a>

```java
public void resetCors()
```

##### `resetHttpRequestLogsEnabled` <a name="resetHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetHttpRequestLogsEnabled"></a>

```java
public void resetHttpRequestLogsEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLiveTrace` <a name="resetLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTrace"></a>

```java
public void resetLiveTrace()
```

##### `resetLiveTraceEnabled` <a name="resetLiveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTraceEnabled"></a>

```java
public void resetLiveTraceEnabled()
```

##### `resetLocalAuthEnabled` <a name="resetLocalAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLocalAuthEnabled"></a>

```java
public void resetLocalAuthEnabled()
```

##### `resetMessagingLogsEnabled` <a name="resetMessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetMessagingLogsEnabled"></a>

```java
public void resetMessagingLogsEnabled()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetServerlessConnectionTimeoutInSeconds` <a name="resetServerlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetServerlessConnectionTimeoutInSeconds"></a>

```java
public void resetServerlessConnectionTimeoutInSeconds()
```

##### `resetServiceMode` <a name="resetServiceMode" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetServiceMode"></a>

```java
public void resetServiceMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsClientCertEnabled` <a name="resetTlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTlsClientCertEnabled"></a>

```java
public void resetTlsClientCertEnabled()
```

##### `resetUpstreamEndpoint` <a name="resetUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetUpstreamEndpoint"></a>

```java
public void resetUpstreamEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrService;

SignalrService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrService;

SignalrService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrService;

SignalrService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList">SignalrServiceCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference">SignalrServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTrace">liveTrace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference">SignalrServiceLiveTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryAccessKey">primaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryConnectionString">primaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicPort">publicPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverPort">serverPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference">SignalrServiceSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference">SignalrServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpoint">upstreamEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList">SignalrServiceUpstreamEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabledInput">aadAuthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabledInput">connectivityLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.corsInput">corsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabledInput">httpRequestLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabledInput">liveTraceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceInput">liveTraceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabledInput">localAuthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabledInput">messagingLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSecondsInput">serverlessConnectionTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceModeInput">serviceModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.skuInput">skuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabledInput">tlsClientCertEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpointInput">upstreamEndpointInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabled">aadAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabled">connectivityLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabled">httpRequestLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabled">liveTraceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabled">localAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabled">messagingLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSeconds">serverlessConnectionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceMode">serviceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.cors"></a>

```java
public SignalrServiceCorsList getCors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList">SignalrServiceCorsList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.identity"></a>

```java
public SignalrServiceIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference">SignalrServiceIdentityOutputReference</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `liveTrace`<sup>Required</sup> <a name="liveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTrace"></a>

```java
public SignalrServiceLiveTraceOutputReference getLiveTrace();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference">SignalrServiceLiveTraceOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryAccessKey"></a>

```java
public java.lang.String getPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryConnectionString"></a>

```java
public java.lang.String getPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `publicPort`<sup>Required</sup> <a name="publicPort" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicPort"></a>

```java
public java.lang.Number getPublicPort();
```

- *Type:* java.lang.Number

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryAccessKey"></a>

```java
public java.lang.String getSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryConnectionString"></a>

```java
public java.lang.String getSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverPort"></a>

```java
public java.lang.Number getServerPort();
```

- *Type:* java.lang.Number

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.sku"></a>

```java
public SignalrServiceSkuOutputReference getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference">SignalrServiceSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.timeouts"></a>

```java
public SignalrServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference">SignalrServiceTimeoutsOutputReference</a>

---

##### `upstreamEndpoint`<sup>Required</sup> <a name="upstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpoint"></a>

```java
public SignalrServiceUpstreamEndpointList getUpstreamEndpoint();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList">SignalrServiceUpstreamEndpointList</a>

---

##### `aadAuthEnabledInput`<sup>Optional</sup> <a name="aadAuthEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabledInput"></a>

```java
public java.lang.Object getAadAuthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectivityLogsEnabledInput`<sup>Optional</sup> <a name="connectivityLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabledInput"></a>

```java
public java.lang.Object getConnectivityLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.corsInput"></a>

```java
public java.lang.Object getCorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>>

---

##### `httpRequestLogsEnabledInput`<sup>Optional</sup> <a name="httpRequestLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabledInput"></a>

```java
public java.lang.Object getHttpRequestLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.identityInput"></a>

```java
public SignalrServiceIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `liveTraceEnabledInput`<sup>Optional</sup> <a name="liveTraceEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabledInput"></a>

```java
public java.lang.Object getLiveTraceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `liveTraceInput`<sup>Optional</sup> <a name="liveTraceInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceInput"></a>

```java
public SignalrServiceLiveTrace getLiveTraceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---

##### `localAuthEnabledInput`<sup>Optional</sup> <a name="localAuthEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabledInput"></a>

```java
public java.lang.Object getLocalAuthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `messagingLogsEnabledInput`<sup>Optional</sup> <a name="messagingLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabledInput"></a>

```java
public java.lang.Object getMessagingLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serverlessConnectionTimeoutInSecondsInput`<sup>Optional</sup> <a name="serverlessConnectionTimeoutInSecondsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSecondsInput"></a>

```java
public java.lang.Number getServerlessConnectionTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `serviceModeInput`<sup>Optional</sup> <a name="serviceModeInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceModeInput"></a>

```java
public java.lang.String getServiceModeInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.skuInput"></a>

```java
public SignalrServiceSku getSkuInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

---

##### `tlsClientCertEnabledInput`<sup>Optional</sup> <a name="tlsClientCertEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabledInput"></a>

```java
public java.lang.Object getTlsClientCertEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upstreamEndpointInput`<sup>Optional</sup> <a name="upstreamEndpointInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpointInput"></a>

```java
public java.lang.Object getUpstreamEndpointInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>>

---

##### `aadAuthEnabled`<sup>Required</sup> <a name="aadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabled"></a>

```java
public java.lang.Object getAadAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectivityLogsEnabled`<sup>Required</sup> <a name="connectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabled"></a>

```java
public java.lang.Object getConnectivityLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpRequestLogsEnabled`<sup>Required</sup> <a name="httpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabled"></a>

```java
public java.lang.Object getHttpRequestLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `liveTraceEnabled`<sup>Required</sup> <a name="liveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabled"></a>

```java
public java.lang.Object getLiveTraceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localAuthEnabled`<sup>Required</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabled"></a>

```java
public java.lang.Object getLocalAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `messagingLogsEnabled`<sup>Required</sup> <a name="messagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabled"></a>

```java
public java.lang.Object getMessagingLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `serverlessConnectionTimeoutInSeconds`<sup>Required</sup> <a name="serverlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSeconds"></a>

```java
public java.lang.Number getServerlessConnectionTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `serviceMode`<sup>Required</sup> <a name="serviceMode" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceMode"></a>

```java
public java.lang.String getServiceMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tlsClientCertEnabled`<sup>Required</sup> <a name="tlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabled"></a>

```java
public java.lang.Object getTlsClientCertEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrServiceConfig <a name="SignalrServiceConfig" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceConfig;

SignalrServiceConfig.builder()
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
    .sku(SignalrServiceSku)
//  .aadAuthEnabled(java.lang.Boolean)
//  .aadAuthEnabled(IResolvable)
//  .connectivityLogsEnabled(java.lang.Boolean)
//  .connectivityLogsEnabled(IResolvable)
//  .cors(IResolvable)
//  .cors(java.util.List<SignalrServiceCors>)
//  .httpRequestLogsEnabled(java.lang.Boolean)
//  .httpRequestLogsEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(SignalrServiceIdentity)
//  .liveTrace(SignalrServiceLiveTrace)
//  .liveTraceEnabled(java.lang.Boolean)
//  .liveTraceEnabled(IResolvable)
//  .localAuthEnabled(java.lang.Boolean)
//  .localAuthEnabled(IResolvable)
//  .messagingLogsEnabled(java.lang.Boolean)
//  .messagingLogsEnabled(IResolvable)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .serverlessConnectionTimeoutInSeconds(java.lang.Number)
//  .serviceMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SignalrServiceTimeouts)
//  .tlsClientCertEnabled(java.lang.Boolean)
//  .tlsClientCertEnabled(IResolvable)
//  .upstreamEndpoint(IResolvable)
//  .upstreamEndpoint(java.util.List<SignalrServiceUpstreamEndpoint>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#location SignalrService#location}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#name SignalrService#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.aadAuthEnabled">aadAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connectivityLogsEnabled">connectivityLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.cors">cors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.httpRequestLogsEnabled">httpRequestLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#id SignalrService#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTrace">liveTrace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTraceEnabled">liveTraceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.localAuthEnabled">localAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.messagingLogsEnabled">messagingLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serverlessConnectionTimeoutInSeconds">serverlessConnectionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serviceMode">serviceMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#service_mode SignalrService#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#tags SignalrService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.upstreamEndpoint">upstreamEndpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>></code> | upstream_endpoint block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#location SignalrService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#name SignalrService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.sku"></a>

```java
public SignalrServiceSku getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#sku SignalrService#sku}

---

##### `aadAuthEnabled`<sup>Optional</sup> <a name="aadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.aadAuthEnabled"></a>

```java
public java.lang.Object getAadAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}.

---

##### `connectivityLogsEnabled`<sup>Optional</sup> <a name="connectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connectivityLogsEnabled"></a>

```java
public java.lang.Object getConnectivityLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.cors"></a>

```java
public java.lang.Object getCors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#cors SignalrService#cors}

---

##### `httpRequestLogsEnabled`<sup>Optional</sup> <a name="httpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.httpRequestLogsEnabled"></a>

```java
public java.lang.Object getHttpRequestLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#id SignalrService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.identity"></a>

```java
public SignalrServiceIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#identity SignalrService#identity}

---

##### `liveTrace`<sup>Optional</sup> <a name="liveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTrace"></a>

```java
public SignalrServiceLiveTrace getLiveTrace();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#live_trace SignalrService#live_trace}

---

##### `liveTraceEnabled`<sup>Optional</sup> <a name="liveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTraceEnabled"></a>

```java
public java.lang.Object getLiveTraceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}.

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.localAuthEnabled"></a>

```java
public java.lang.Object getLocalAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}.

---

##### `messagingLogsEnabled`<sup>Optional</sup> <a name="messagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.messagingLogsEnabled"></a>

```java
public java.lang.Object getMessagingLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}.

---

##### `serverlessConnectionTimeoutInSeconds`<sup>Optional</sup> <a name="serverlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serverlessConnectionTimeoutInSeconds"></a>

```java
public java.lang.Number getServerlessConnectionTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}.

---

##### `serviceMode`<sup>Optional</sup> <a name="serviceMode" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serviceMode"></a>

```java
public java.lang.String getServiceMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#service_mode SignalrService#service_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#tags SignalrService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.timeouts"></a>

```java
public SignalrServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#timeouts SignalrService#timeouts}

---

##### `tlsClientCertEnabled`<sup>Optional</sup> <a name="tlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tlsClientCertEnabled"></a>

```java
public java.lang.Object getTlsClientCertEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}.

---

##### `upstreamEndpoint`<sup>Optional</sup> <a name="upstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.upstreamEndpoint"></a>

```java
public java.lang.Object getUpstreamEndpoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>>

upstream_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#upstream_endpoint SignalrService#upstream_endpoint}

---

### SignalrServiceCors <a name="SignalrServiceCors" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceCors;

SignalrServiceCors.builder()
    .allowedOrigins(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#allowed_origins SignalrService#allowed_origins}. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#allowed_origins SignalrService#allowed_origins}.

---

### SignalrServiceIdentity <a name="SignalrServiceIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceIdentity;

SignalrServiceIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#type SignalrService#type}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#type SignalrService#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}.

---

### SignalrServiceLiveTrace <a name="SignalrServiceLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceLiveTrace;

SignalrServiceLiveTrace.builder()
//  .connectivityLogsEnabled(java.lang.Boolean)
//  .connectivityLogsEnabled(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .httpRequestLogsEnabled(java.lang.Boolean)
//  .httpRequestLogsEnabled(IResolvable)
//  .messagingLogsEnabled(java.lang.Boolean)
//  .messagingLogsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.connectivityLogsEnabled">connectivityLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#enabled SignalrService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.httpRequestLogsEnabled">httpRequestLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.messagingLogsEnabled">messagingLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |

---

##### `connectivityLogsEnabled`<sup>Optional</sup> <a name="connectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.connectivityLogsEnabled"></a>

```java
public java.lang.Object getConnectivityLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#enabled SignalrService#enabled}.

---

##### `httpRequestLogsEnabled`<sup>Optional</sup> <a name="httpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.httpRequestLogsEnabled"></a>

```java
public java.lang.Object getHttpRequestLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `messagingLogsEnabled`<sup>Optional</sup> <a name="messagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.messagingLogsEnabled"></a>

```java
public java.lang.Object getMessagingLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

### SignalrServiceSku <a name="SignalrServiceSku" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceSku;

SignalrServiceSku.builder()
    .capacity(java.lang.Number)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#capacity SignalrService#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#name SignalrService#name}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#capacity SignalrService#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#name SignalrService#name}.

---

### SignalrServiceTimeouts <a name="SignalrServiceTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceTimeouts;

SignalrServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#create SignalrService#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#delete SignalrService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#read SignalrService#read}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#update SignalrService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#create SignalrService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#delete SignalrService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#read SignalrService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#update SignalrService#update}.

---

### SignalrServiceUpstreamEndpoint <a name="SignalrServiceUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceUpstreamEndpoint;

SignalrServiceUpstreamEndpoint.builder()
    .categoryPattern(java.util.List<java.lang.String>)
    .eventPattern(java.util.List<java.lang.String>)
    .hubPattern(java.util.List<java.lang.String>)
    .urlTemplate(java.lang.String)
//  .userAssignedIdentityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.categoryPattern">categoryPattern</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#category_pattern SignalrService#category_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.eventPattern">eventPattern</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#event_pattern SignalrService#event_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.hubPattern">hubPattern</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#hub_pattern SignalrService#hub_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.urlTemplate">urlTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#url_template SignalrService#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#user_assigned_identity_id SignalrService#user_assigned_identity_id}. |

---

##### `categoryPattern`<sup>Required</sup> <a name="categoryPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.categoryPattern"></a>

```java
public java.util.List<java.lang.String> getCategoryPattern();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#category_pattern SignalrService#category_pattern}.

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.eventPattern"></a>

```java
public java.util.List<java.lang.String> getEventPattern();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#event_pattern SignalrService#event_pattern}.

---

##### `hubPattern`<sup>Required</sup> <a name="hubPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.hubPattern"></a>

```java
public java.util.List<java.lang.String> getHubPattern();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#hub_pattern SignalrService#hub_pattern}.

---

##### `urlTemplate`<sup>Required</sup> <a name="urlTemplate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.urlTemplate"></a>

```java
public java.lang.String getUrlTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#url_template SignalrService#url_template}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/signalr_service#user_assigned_identity_id SignalrService#user_assigned_identity_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrServiceCorsList <a name="SignalrServiceCorsList" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceCorsList;

new SignalrServiceCorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get"></a>

```java
public SignalrServiceCorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>>

---


### SignalrServiceCorsOutputReference <a name="SignalrServiceCorsOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceCorsOutputReference;

new SignalrServiceCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>

---


### SignalrServiceIdentityOutputReference <a name="SignalrServiceIdentityOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceIdentityOutputReference;

new SignalrServiceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.internalValue"></a>

```java
public SignalrServiceIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---


### SignalrServiceLiveTraceOutputReference <a name="SignalrServiceLiveTraceOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceLiveTraceOutputReference;

new SignalrServiceLiveTraceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetConnectivityLogsEnabled">resetConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetHttpRequestLogsEnabled">resetHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetMessagingLogsEnabled">resetMessagingLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectivityLogsEnabled` <a name="resetConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetConnectivityLogsEnabled"></a>

```java
public void resetConnectivityLogsEnabled()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHttpRequestLogsEnabled` <a name="resetHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetHttpRequestLogsEnabled"></a>

```java
public void resetHttpRequestLogsEnabled()
```

##### `resetMessagingLogsEnabled` <a name="resetMessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetMessagingLogsEnabled"></a>

```java
public void resetMessagingLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabledInput">connectivityLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabledInput">httpRequestLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabledInput">messagingLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled">connectivityLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled">httpRequestLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled">messagingLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectivityLogsEnabledInput`<sup>Optional</sup> <a name="connectivityLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabledInput"></a>

```java
public java.lang.Object getConnectivityLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpRequestLogsEnabledInput`<sup>Optional</sup> <a name="httpRequestLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabledInput"></a>

```java
public java.lang.Object getHttpRequestLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messagingLogsEnabledInput`<sup>Optional</sup> <a name="messagingLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabledInput"></a>

```java
public java.lang.Object getMessagingLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectivityLogsEnabled`<sup>Required</sup> <a name="connectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled"></a>

```java
public java.lang.Object getConnectivityLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpRequestLogsEnabled`<sup>Required</sup> <a name="httpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled"></a>

```java
public java.lang.Object getHttpRequestLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messagingLogsEnabled`<sup>Required</sup> <a name="messagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled"></a>

```java
public java.lang.Object getMessagingLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.internalValue"></a>

```java
public SignalrServiceLiveTrace getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---


### SignalrServiceSkuOutputReference <a name="SignalrServiceSkuOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceSkuOutputReference;

new SignalrServiceSkuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.internalValue"></a>

```java
public SignalrServiceSku getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---


### SignalrServiceTimeoutsOutputReference <a name="SignalrServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceTimeoutsOutputReference;

new SignalrServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

---


### SignalrServiceUpstreamEndpointList <a name="SignalrServiceUpstreamEndpointList" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceUpstreamEndpointList;

new SignalrServiceUpstreamEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get"></a>

```java
public SignalrServiceUpstreamEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>>

---


### SignalrServiceUpstreamEndpointOutputReference <a name="SignalrServiceUpstreamEndpointOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service.SignalrServiceUpstreamEndpointOutputReference;

new SignalrServiceUpstreamEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resetUserAssignedIdentityId"></a>

```java
public void resetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPatternInput">categoryPatternInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPatternInput">eventPatternInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPatternInput">hubPatternInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplateInput">urlTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPattern">categoryPattern</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPattern">eventPattern</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPattern">hubPattern</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplate">urlTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryPatternInput`<sup>Optional</sup> <a name="categoryPatternInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPatternInput"></a>

```java
public java.util.List<java.lang.String> getCategoryPatternInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventPatternInput`<sup>Optional</sup> <a name="eventPatternInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPatternInput"></a>

```java
public java.util.List<java.lang.String> getEventPatternInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hubPatternInput`<sup>Optional</sup> <a name="hubPatternInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPatternInput"></a>

```java
public java.util.List<java.lang.String> getHubPatternInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlTemplateInput`<sup>Optional</sup> <a name="urlTemplateInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplateInput"></a>

```java
public java.lang.String getUrlTemplateInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `categoryPattern`<sup>Required</sup> <a name="categoryPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPattern"></a>

```java
public java.util.List<java.lang.String> getCategoryPattern();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPattern"></a>

```java
public java.util.List<java.lang.String> getEventPattern();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hubPattern`<sup>Required</sup> <a name="hubPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPattern"></a>

```java
public java.util.List<java.lang.String> getHubPattern();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlTemplate`<sup>Required</sup> <a name="urlTemplate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplate"></a>

```java
public java.lang.String getUrlTemplate();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>

---



