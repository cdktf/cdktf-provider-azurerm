# `webPubsubSocketio` Submodule <a name="`webPubsubSocketio` Submodule" id="@cdktf/provider-azurerm.webPubsubSocketio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubSocketio <a name="WebPubsubSocketio" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio azurerm_web_pubsub_socketio}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketio;

WebPubsubSocketio.Builder.create(Construct scope, java.lang.String id)
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
    .sku(WebPubsubSocketioSku)
//  .aadAuthEnabled(java.lang.Boolean)
//  .aadAuthEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(WebPubsubSocketioIdentity)
//  .liveTraceConnectivityLogsEnabled(java.lang.Boolean)
//  .liveTraceConnectivityLogsEnabled(IResolvable)
//  .liveTraceEnabled(java.lang.Boolean)
//  .liveTraceEnabled(IResolvable)
//  .liveTraceHttpRequestLogsEnabled(java.lang.Boolean)
//  .liveTraceHttpRequestLogsEnabled(IResolvable)
//  .liveTraceMessagingLogsEnabled(java.lang.Boolean)
//  .liveTraceMessagingLogsEnabled(IResolvable)
//  .localAuthEnabled(java.lang.Boolean)
//  .localAuthEnabled(IResolvable)
//  .publicNetworkAccess(java.lang.String)
//  .serviceMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WebPubsubSocketioTimeouts)
//  .tlsClientCertEnabled(java.lang.Boolean)
//  .tlsClientCertEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.aadAuthEnabled">aadAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceConnectivityLogsEnabled">liveTraceConnectivityLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceEnabled">liveTraceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceHttpRequestLogsEnabled">liveTraceHttpRequestLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceMessagingLogsEnabled">liveTraceMessagingLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.localAuthEnabled">localAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.serviceMode">serviceMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#sku WebPubsubSocketio#sku}

---

##### `aadAuthEnabled`<sup>Optional</sup> <a name="aadAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.aadAuthEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#identity WebPubsubSocketio#identity}

---

##### `liveTraceConnectivityLogsEnabled`<sup>Optional</sup> <a name="liveTraceConnectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceConnectivityLogsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}.

---

##### `liveTraceEnabled`<sup>Optional</sup> <a name="liveTraceEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}.

---

##### `liveTraceHttpRequestLogsEnabled`<sup>Optional</sup> <a name="liveTraceHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceHttpRequestLogsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}.

---

##### `liveTraceMessagingLogsEnabled`<sup>Optional</sup> <a name="liveTraceMessagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceMessagingLogsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}.

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.localAuthEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.publicNetworkAccess"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}.

---

##### `serviceMode`<sup>Optional</sup> <a name="serviceMode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.serviceMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#timeouts WebPubsubSocketio#timeouts}

---

##### `tlsClientCertEnabled`<sup>Optional</sup> <a name="tlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.tlsClientCertEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku">putSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetAadAuthEnabled">resetAadAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceConnectivityLogsEnabled">resetLiveTraceConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceEnabled">resetLiveTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceHttpRequestLogsEnabled">resetLiveTraceHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceMessagingLogsEnabled">resetLiveTraceMessagingLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLocalAuthEnabled">resetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetPublicNetworkAccess">resetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetServiceMode">resetServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTlsClientCertEnabled">resetTlsClientCertEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity"></a>

```java
public void putIdentity(WebPubsubSocketioIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---

##### `putSku` <a name="putSku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku"></a>

```java
public void putSku(WebPubsubSocketioSku value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts"></a>

```java
public void putTimeouts(WebPubsubSocketioTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

---

##### `resetAadAuthEnabled` <a name="resetAadAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetAadAuthEnabled"></a>

```java
public void resetAadAuthEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLiveTraceConnectivityLogsEnabled` <a name="resetLiveTraceConnectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceConnectivityLogsEnabled"></a>

```java
public void resetLiveTraceConnectivityLogsEnabled()
```

##### `resetLiveTraceEnabled` <a name="resetLiveTraceEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceEnabled"></a>

```java
public void resetLiveTraceEnabled()
```

##### `resetLiveTraceHttpRequestLogsEnabled` <a name="resetLiveTraceHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceHttpRequestLogsEnabled"></a>

```java
public void resetLiveTraceHttpRequestLogsEnabled()
```

##### `resetLiveTraceMessagingLogsEnabled` <a name="resetLiveTraceMessagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceMessagingLogsEnabled"></a>

```java
public void resetLiveTraceMessagingLogsEnabled()
```

##### `resetLocalAuthEnabled` <a name="resetLocalAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLocalAuthEnabled"></a>

```java
public void resetLocalAuthEnabled()
```

##### `resetPublicNetworkAccess` <a name="resetPublicNetworkAccess" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetPublicNetworkAccess"></a>

```java
public void resetPublicNetworkAccess()
```

##### `resetServiceMode` <a name="resetServiceMode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetServiceMode"></a>

```java
public void resetServiceMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsClientCertEnabled` <a name="resetTlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTlsClientCertEnabled"></a>

```java
public void resetTlsClientCertEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WebPubsubSocketio resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketio;

WebPubsubSocketio.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketio;

WebPubsubSocketio.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketio;

WebPubsubSocketio.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketio;

WebPubsubSocketio.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WebPubsubSocketio.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WebPubsubSocketio resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WebPubsubSocketio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WebPubsubSocketio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WebPubsubSocketio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.externalIp">externalIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference">WebPubsubSocketioIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryAccessKey">primaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryConnectionString">primaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicPort">publicPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serverPort">serverPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference">WebPubsubSocketioSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference">WebPubsubSocketioTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabledInput">aadAuthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabledInput">liveTraceConnectivityLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabledInput">liveTraceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabledInput">liveTraceHttpRequestLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabledInput">liveTraceMessagingLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabledInput">localAuthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccessInput">publicNetworkAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceModeInput">serviceModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.skuInput">skuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabledInput">tlsClientCertEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabled">aadAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabled">liveTraceConnectivityLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabled">liveTraceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabled">liveTraceHttpRequestLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabled">liveTraceMessagingLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabled">localAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceMode">serviceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.externalIp"></a>

```java
public java.lang.String getExternalIp();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identity"></a>

```java
public WebPubsubSocketioIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference">WebPubsubSocketioIdentityOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryAccessKey"></a>

```java
public java.lang.String getPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryConnectionString"></a>

```java
public java.lang.String getPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `publicPort`<sup>Required</sup> <a name="publicPort" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicPort"></a>

```java
public java.lang.Number getPublicPort();
```

- *Type:* java.lang.Number

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryAccessKey"></a>

```java
public java.lang.String getSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryConnectionString"></a>

```java
public java.lang.String getSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serverPort"></a>

```java
public java.lang.Number getServerPort();
```

- *Type:* java.lang.Number

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.sku"></a>

```java
public WebPubsubSocketioSkuOutputReference getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference">WebPubsubSocketioSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeouts"></a>

```java
public WebPubsubSocketioTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference">WebPubsubSocketioTimeoutsOutputReference</a>

---

##### `aadAuthEnabledInput`<sup>Optional</sup> <a name="aadAuthEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabledInput"></a>

```java
public java.lang.Object getAadAuthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identityInput"></a>

```java
public WebPubsubSocketioIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `liveTraceConnectivityLogsEnabledInput`<sup>Optional</sup> <a name="liveTraceConnectivityLogsEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabledInput"></a>

```java
public java.lang.Object getLiveTraceConnectivityLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `liveTraceEnabledInput`<sup>Optional</sup> <a name="liveTraceEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabledInput"></a>

```java
public java.lang.Object getLiveTraceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `liveTraceHttpRequestLogsEnabledInput`<sup>Optional</sup> <a name="liveTraceHttpRequestLogsEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabledInput"></a>

```java
public java.lang.Object getLiveTraceHttpRequestLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `liveTraceMessagingLogsEnabledInput`<sup>Optional</sup> <a name="liveTraceMessagingLogsEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabledInput"></a>

```java
public java.lang.Object getLiveTraceMessagingLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localAuthEnabledInput`<sup>Optional</sup> <a name="localAuthEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabledInput"></a>

```java
public java.lang.Object getLocalAuthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessInput`<sup>Optional</sup> <a name="publicNetworkAccessInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccessInput"></a>

```java
public java.lang.String getPublicNetworkAccessInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serviceModeInput`<sup>Optional</sup> <a name="serviceModeInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceModeInput"></a>

```java
public java.lang.String getServiceModeInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.skuInput"></a>

```java
public WebPubsubSocketioSku getSkuInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

---

##### `tlsClientCertEnabledInput`<sup>Optional</sup> <a name="tlsClientCertEnabledInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabledInput"></a>

```java
public java.lang.Object getTlsClientCertEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `aadAuthEnabled`<sup>Required</sup> <a name="aadAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabled"></a>

```java
public java.lang.Object getAadAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `liveTraceConnectivityLogsEnabled`<sup>Required</sup> <a name="liveTraceConnectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabled"></a>

```java
public java.lang.Object getLiveTraceConnectivityLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `liveTraceEnabled`<sup>Required</sup> <a name="liveTraceEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabled"></a>

```java
public java.lang.Object getLiveTraceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `liveTraceHttpRequestLogsEnabled`<sup>Required</sup> <a name="liveTraceHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabled"></a>

```java
public java.lang.Object getLiveTraceHttpRequestLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `liveTraceMessagingLogsEnabled`<sup>Required</sup> <a name="liveTraceMessagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabled"></a>

```java
public java.lang.Object getLiveTraceMessagingLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localAuthEnabled`<sup>Required</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabled"></a>

```java
public java.lang.Object getLocalAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccess`<sup>Required</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccess"></a>

```java
public java.lang.String getPublicNetworkAccess();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `serviceMode`<sup>Required</sup> <a name="serviceMode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceMode"></a>

```java
public java.lang.String getServiceMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tlsClientCertEnabled`<sup>Required</sup> <a name="tlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabled"></a>

```java
public java.lang.Object getTlsClientCertEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubSocketioConfig <a name="WebPubsubSocketioConfig" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketioConfig;

WebPubsubSocketioConfig.builder()
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
    .sku(WebPubsubSocketioSku)
//  .aadAuthEnabled(java.lang.Boolean)
//  .aadAuthEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(WebPubsubSocketioIdentity)
//  .liveTraceConnectivityLogsEnabled(java.lang.Boolean)
//  .liveTraceConnectivityLogsEnabled(IResolvable)
//  .liveTraceEnabled(java.lang.Boolean)
//  .liveTraceEnabled(IResolvable)
//  .liveTraceHttpRequestLogsEnabled(java.lang.Boolean)
//  .liveTraceHttpRequestLogsEnabled(IResolvable)
//  .liveTraceMessagingLogsEnabled(java.lang.Boolean)
//  .liveTraceMessagingLogsEnabled(IResolvable)
//  .localAuthEnabled(java.lang.Boolean)
//  .localAuthEnabled(IResolvable)
//  .publicNetworkAccess(java.lang.String)
//  .serviceMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WebPubsubSocketioTimeouts)
//  .tlsClientCertEnabled(java.lang.Boolean)
//  .tlsClientCertEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.aadAuthEnabled">aadAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceConnectivityLogsEnabled">liveTraceConnectivityLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceEnabled">liveTraceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceHttpRequestLogsEnabled">liveTraceHttpRequestLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceMessagingLogsEnabled">liveTraceMessagingLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.localAuthEnabled">localAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.serviceMode">serviceMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.sku"></a>

```java
public WebPubsubSocketioSku getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#sku WebPubsubSocketio#sku}

---

##### `aadAuthEnabled`<sup>Optional</sup> <a name="aadAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.aadAuthEnabled"></a>

```java
public java.lang.Object getAadAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.identity"></a>

```java
public WebPubsubSocketioIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#identity WebPubsubSocketio#identity}

---

##### `liveTraceConnectivityLogsEnabled`<sup>Optional</sup> <a name="liveTraceConnectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceConnectivityLogsEnabled"></a>

```java
public java.lang.Object getLiveTraceConnectivityLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}.

---

##### `liveTraceEnabled`<sup>Optional</sup> <a name="liveTraceEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceEnabled"></a>

```java
public java.lang.Object getLiveTraceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}.

---

##### `liveTraceHttpRequestLogsEnabled`<sup>Optional</sup> <a name="liveTraceHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceHttpRequestLogsEnabled"></a>

```java
public java.lang.Object getLiveTraceHttpRequestLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}.

---

##### `liveTraceMessagingLogsEnabled`<sup>Optional</sup> <a name="liveTraceMessagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceMessagingLogsEnabled"></a>

```java
public java.lang.Object getLiveTraceMessagingLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}.

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.localAuthEnabled"></a>

```java
public java.lang.Object getLocalAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.publicNetworkAccess"></a>

```java
public java.lang.String getPublicNetworkAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}.

---

##### `serviceMode`<sup>Optional</sup> <a name="serviceMode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.serviceMode"></a>

```java
public java.lang.String getServiceMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.timeouts"></a>

```java
public WebPubsubSocketioTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#timeouts WebPubsubSocketio#timeouts}

---

##### `tlsClientCertEnabled`<sup>Optional</sup> <a name="tlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tlsClientCertEnabled"></a>

```java
public java.lang.Object getTlsClientCertEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}.

---

### WebPubsubSocketioIdentity <a name="WebPubsubSocketioIdentity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketioIdentity;

WebPubsubSocketioIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}.

---

### WebPubsubSocketioSku <a name="WebPubsubSocketioSku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketioSku;

WebPubsubSocketioSku.builder()
    .name(java.lang.String)
//  .capacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}.

---

### WebPubsubSocketioTimeouts <a name="WebPubsubSocketioTimeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketioTimeouts;

WebPubsubSocketioTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubSocketioIdentityOutputReference <a name="WebPubsubSocketioIdentityOutputReference" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketioIdentityOutputReference;

new WebPubsubSocketioIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.internalValue"></a>

```java
public WebPubsubSocketioIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---


### WebPubsubSocketioSkuOutputReference <a name="WebPubsubSocketioSkuOutputReference" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketioSkuOutputReference;

new WebPubsubSocketioSkuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resetCapacity"></a>

```java
public void resetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.internalValue"></a>

```java
public WebPubsubSocketioSku getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---


### WebPubsubSocketioTimeoutsOutputReference <a name="WebPubsubSocketioTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.web_pubsub_socketio.WebPubsubSocketioTimeoutsOutputReference;

new WebPubsubSocketioTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

---



