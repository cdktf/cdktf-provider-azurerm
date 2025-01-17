# `signalrService` Submodule <a name="`signalrService` Submodule" id="@cdktf/provider-azurerm.signalrService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrService <a name="SignalrService" id="@cdktf/provider-azurerm.signalrService.SignalrService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service azurerm_signalr_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrService(
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
  sku: SignalrServiceSku,
  aad_auth_enabled: typing.Union[bool, IResolvable] = None,
  connectivity_logs_enabled: typing.Union[bool, IResolvable] = None,
  cors: typing.Union[IResolvable, typing.List[SignalrServiceCors]] = None,
  http_request_logs_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: SignalrServiceIdentity = None,
  live_trace: SignalrServiceLiveTrace = None,
  live_trace_enabled: typing.Union[bool, IResolvable] = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  messaging_logs_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  serverless_connection_timeout_in_seconds: typing.Union[int, float] = None,
  service_mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SignalrServiceTimeouts = None,
  tls_client_cert_enabled: typing.Union[bool, IResolvable] = None,
  upstream_endpoint: typing.Union[IResolvable, typing.List[SignalrServiceUpstreamEndpoint]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#location SignalrService#location}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#name SignalrService#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.aadAuthEnabled">aad_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.connectivityLogsEnabled">connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.cors">cors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]]</code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.httpRequestLogsEnabled">http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#id SignalrService#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.liveTrace">live_trace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.liveTraceEnabled">live_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.messagingLogsEnabled">messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.serverlessConnectionTimeoutInSeconds">serverless_connection_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.serviceMode">service_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#service_mode SignalrService#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#tags SignalrService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.tlsClientCertEnabled">tls_client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.upstreamEndpoint">upstream_endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]]</code> | upstream_endpoint block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#location SignalrService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#name SignalrService#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#sku SignalrService#sku}

---

##### `aad_auth_enabled`<sup>Optional</sup> <a name="aad_auth_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.aadAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}.

---

##### `connectivity_logs_enabled`<sup>Optional</sup> <a name="connectivity_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.connectivityLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.cors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]]

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#cors SignalrService#cors}

---

##### `http_request_logs_enabled`<sup>Optional</sup> <a name="http_request_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.httpRequestLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#id SignalrService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#identity SignalrService#identity}

---

##### `live_trace`<sup>Optional</sup> <a name="live_trace" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.liveTrace"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#live_trace SignalrService#live_trace}

---

##### `live_trace_enabled`<sup>Optional</sup> <a name="live_trace_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.liveTraceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}.

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.localAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}.

---

##### `messaging_logs_enabled`<sup>Optional</sup> <a name="messaging_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.messagingLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}.

---

##### `serverless_connection_timeout_in_seconds`<sup>Optional</sup> <a name="serverless_connection_timeout_in_seconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.serverlessConnectionTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}.

---

##### `service_mode`<sup>Optional</sup> <a name="service_mode" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.serviceMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#service_mode SignalrService#service_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#tags SignalrService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#timeouts SignalrService#timeouts}

---

##### `tls_client_cert_enabled`<sup>Optional</sup> <a name="tls_client_cert_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.tlsClientCertEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}.

---

##### `upstream_endpoint`<sup>Optional</sup> <a name="upstream_endpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.upstreamEndpoint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]]

upstream_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#upstream_endpoint SignalrService#upstream_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace">put_live_trace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putSku">put_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint">put_upstream_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetAadAuthEnabled">reset_aad_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetConnectivityLogsEnabled">reset_connectivity_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetHttpRequestLogsEnabled">reset_http_request_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTrace">reset_live_trace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTraceEnabled">reset_live_trace_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLocalAuthEnabled">reset_local_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetMessagingLogsEnabled">reset_messaging_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetServerlessConnectionTimeoutInSeconds">reset_serverless_connection_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetServiceMode">reset_service_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTlsClientCertEnabled">reset_tls_client_cert_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetUpstreamEndpoint">reset_upstream_endpoint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrService.SignalrService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.signalrService.SignalrService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.signalrService.SignalrService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.signalrService.SignalrService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.signalrService.SignalrService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.signalrService.SignalrService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.signalrService.SignalrService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.signalrService.SignalrService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cors` <a name="put_cors" id="@cdktf/provider-azurerm.signalrService.SignalrService.putCors"></a>

```python
def put_cors(
  value: typing.Union[IResolvable, typing.List[SignalrServiceCors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putCors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#type SignalrService#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}.

---

##### `put_live_trace` <a name="put_live_trace" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace"></a>

```python
def put_live_trace(
  connectivity_logs_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  http_request_logs_enabled: typing.Union[bool, IResolvable] = None,
  messaging_logs_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `connectivity_logs_enabled`<sup>Optional</sup> <a name="connectivity_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace.parameter.connectivityLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#enabled SignalrService#enabled}.

---

###### `http_request_logs_enabled`<sup>Optional</sup> <a name="http_request_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace.parameter.httpRequestLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

###### `messaging_logs_enabled`<sup>Optional</sup> <a name="messaging_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace.parameter.messagingLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

##### `put_sku` <a name="put_sku" id="@cdktf/provider-azurerm.signalrService.SignalrService.putSku"></a>

```python
def put_sku(
  capacity: typing.Union[int, float],
  name: str
) -> None
```

###### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.signalrService.SignalrService.putSku.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#capacity SignalrService#capacity}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrService.putSku.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#name SignalrService#name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#create SignalrService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#delete SignalrService#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#read SignalrService#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#update SignalrService#update}.

---

##### `put_upstream_endpoint` <a name="put_upstream_endpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint"></a>

```python
def put_upstream_endpoint(
  value: typing.Union[IResolvable, typing.List[SignalrServiceUpstreamEndpoint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]]

---

##### `reset_aad_auth_enabled` <a name="reset_aad_auth_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetAadAuthEnabled"></a>

```python
def reset_aad_auth_enabled() -> None
```

##### `reset_connectivity_logs_enabled` <a name="reset_connectivity_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetConnectivityLogsEnabled"></a>

```python
def reset_connectivity_logs_enabled() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_http_request_logs_enabled` <a name="reset_http_request_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetHttpRequestLogsEnabled"></a>

```python
def reset_http_request_logs_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_live_trace` <a name="reset_live_trace" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTrace"></a>

```python
def reset_live_trace() -> None
```

##### `reset_live_trace_enabled` <a name="reset_live_trace_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTraceEnabled"></a>

```python
def reset_live_trace_enabled() -> None
```

##### `reset_local_auth_enabled` <a name="reset_local_auth_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLocalAuthEnabled"></a>

```python
def reset_local_auth_enabled() -> None
```

##### `reset_messaging_logs_enabled` <a name="reset_messaging_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetMessagingLogsEnabled"></a>

```python
def reset_messaging_logs_enabled() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_serverless_connection_timeout_in_seconds` <a name="reset_serverless_connection_timeout_in_seconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetServerlessConnectionTimeoutInSeconds"></a>

```python
def reset_serverless_connection_timeout_in_seconds() -> None
```

##### `reset_service_mode` <a name="reset_service_mode" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetServiceMode"></a>

```python
def reset_service_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_client_cert_enabled` <a name="reset_tls_client_cert_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTlsClientCertEnabled"></a>

```python
def reset_tls_client_cert_enabled() -> None
```

##### `reset_upstream_endpoint` <a name="reset_upstream_endpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetUpstreamEndpoint"></a>

```python
def reset_upstream_endpoint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SignalrService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SignalrService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SignalrService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SignalrService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SignalrService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList">SignalrServiceCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference">SignalrServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTrace">live_trace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference">SignalrServiceLiveTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicPort">public_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference">SignalrServiceSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference">SignalrServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpoint">upstream_endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList">SignalrServiceUpstreamEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabledInput">aad_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabledInput">connectivity_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.corsInput">cors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabledInput">http_request_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabledInput">live_trace_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceInput">live_trace_input</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabledInput">local_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabledInput">messaging_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSecondsInput">serverless_connection_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceModeInput">service_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.skuInput">sku_input</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabledInput">tls_client_cert_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpointInput">upstream_endpoint_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabled">aad_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabled">connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabled">http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabled">live_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabled">messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSeconds">serverless_connection_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceMode">service_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabled">tls_client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.cors"></a>

```python
cors: SignalrServiceCorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList">SignalrServiceCorsList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.identity"></a>

```python
identity: SignalrServiceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference">SignalrServiceIdentityOutputReference</a>

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `live_trace`<sup>Required</sup> <a name="live_trace" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTrace"></a>

```python
live_trace: SignalrServiceLiveTraceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference">SignalrServiceLiveTraceOutputReference</a>

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `public_port`<sup>Required</sup> <a name="public_port" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicPort"></a>

```python
public_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `server_port`<sup>Required</sup> <a name="server_port" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.sku"></a>

```python
sku: SignalrServiceSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference">SignalrServiceSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.timeouts"></a>

```python
timeouts: SignalrServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference">SignalrServiceTimeoutsOutputReference</a>

---

##### `upstream_endpoint`<sup>Required</sup> <a name="upstream_endpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpoint"></a>

```python
upstream_endpoint: SignalrServiceUpstreamEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList">SignalrServiceUpstreamEndpointList</a>

---

##### `aad_auth_enabled_input`<sup>Optional</sup> <a name="aad_auth_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabledInput"></a>

```python
aad_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connectivity_logs_enabled_input`<sup>Optional</sup> <a name="connectivity_logs_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabledInput"></a>

```python
connectivity_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.corsInput"></a>

```python
cors_input: typing.Union[IResolvable, typing.List[SignalrServiceCors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]]

---

##### `http_request_logs_enabled_input`<sup>Optional</sup> <a name="http_request_logs_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabledInput"></a>

```python
http_request_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.identityInput"></a>

```python
identity_input: SignalrServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `live_trace_enabled_input`<sup>Optional</sup> <a name="live_trace_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabledInput"></a>

```python
live_trace_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_trace_input`<sup>Optional</sup> <a name="live_trace_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceInput"></a>

```python
live_trace_input: SignalrServiceLiveTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---

##### `local_auth_enabled_input`<sup>Optional</sup> <a name="local_auth_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabledInput"></a>

```python
local_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `messaging_logs_enabled_input`<sup>Optional</sup> <a name="messaging_logs_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabledInput"></a>

```python
messaging_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `serverless_connection_timeout_in_seconds_input`<sup>Optional</sup> <a name="serverless_connection_timeout_in_seconds_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSecondsInput"></a>

```python
serverless_connection_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_mode_input`<sup>Optional</sup> <a name="service_mode_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceModeInput"></a>

```python
service_mode_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.skuInput"></a>

```python
sku_input: SignalrServiceSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SignalrServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>]

---

##### `tls_client_cert_enabled_input`<sup>Optional</sup> <a name="tls_client_cert_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabledInput"></a>

```python
tls_client_cert_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upstream_endpoint_input`<sup>Optional</sup> <a name="upstream_endpoint_input" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpointInput"></a>

```python
upstream_endpoint_input: typing.Union[IResolvable, typing.List[SignalrServiceUpstreamEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]]

---

##### `aad_auth_enabled`<sup>Required</sup> <a name="aad_auth_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabled"></a>

```python
aad_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connectivity_logs_enabled`<sup>Required</sup> <a name="connectivity_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabled"></a>

```python
connectivity_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_request_logs_enabled`<sup>Required</sup> <a name="http_request_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabled"></a>

```python
http_request_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `live_trace_enabled`<sup>Required</sup> <a name="live_trace_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabled"></a>

```python
live_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_auth_enabled`<sup>Required</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `messaging_logs_enabled`<sup>Required</sup> <a name="messaging_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabled"></a>

```python
messaging_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `serverless_connection_timeout_in_seconds`<sup>Required</sup> <a name="serverless_connection_timeout_in_seconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSeconds"></a>

```python
serverless_connection_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_mode`<sup>Required</sup> <a name="service_mode" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceMode"></a>

```python
service_mode: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tls_client_cert_enabled`<sup>Required</sup> <a name="tls_client_cert_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabled"></a>

```python
tls_client_cert_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrServiceConfig <a name="SignalrServiceConfig" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceConfig(
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
  sku: SignalrServiceSku,
  aad_auth_enabled: typing.Union[bool, IResolvable] = None,
  connectivity_logs_enabled: typing.Union[bool, IResolvable] = None,
  cors: typing.Union[IResolvable, typing.List[SignalrServiceCors]] = None,
  http_request_logs_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: SignalrServiceIdentity = None,
  live_trace: SignalrServiceLiveTrace = None,
  live_trace_enabled: typing.Union[bool, IResolvable] = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  messaging_logs_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  serverless_connection_timeout_in_seconds: typing.Union[int, float] = None,
  service_mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SignalrServiceTimeouts = None,
  tls_client_cert_enabled: typing.Union[bool, IResolvable] = None,
  upstream_endpoint: typing.Union[IResolvable, typing.List[SignalrServiceUpstreamEndpoint]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#location SignalrService#location}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#name SignalrService#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.aadAuthEnabled">aad_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connectivityLogsEnabled">connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.cors">cors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]]</code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.httpRequestLogsEnabled">http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#id SignalrService#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTrace">live_trace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTraceEnabled">live_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.messagingLogsEnabled">messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serverlessConnectionTimeoutInSeconds">serverless_connection_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serviceMode">service_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#service_mode SignalrService#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#tags SignalrService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tlsClientCertEnabled">tls_client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.upstreamEndpoint">upstream_endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]]</code> | upstream_endpoint block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#location SignalrService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#name SignalrService#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.sku"></a>

```python
sku: SignalrServiceSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#sku SignalrService#sku}

---

##### `aad_auth_enabled`<sup>Optional</sup> <a name="aad_auth_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.aadAuthEnabled"></a>

```python
aad_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}.

---

##### `connectivity_logs_enabled`<sup>Optional</sup> <a name="connectivity_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connectivityLogsEnabled"></a>

```python
connectivity_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.cors"></a>

```python
cors: typing.Union[IResolvable, typing.List[SignalrServiceCors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]]

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#cors SignalrService#cors}

---

##### `http_request_logs_enabled`<sup>Optional</sup> <a name="http_request_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.httpRequestLogsEnabled"></a>

```python
http_request_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#id SignalrService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.identity"></a>

```python
identity: SignalrServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#identity SignalrService#identity}

---

##### `live_trace`<sup>Optional</sup> <a name="live_trace" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTrace"></a>

```python
live_trace: SignalrServiceLiveTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#live_trace SignalrService#live_trace}

---

##### `live_trace_enabled`<sup>Optional</sup> <a name="live_trace_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTraceEnabled"></a>

```python
live_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}.

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}.

---

##### `messaging_logs_enabled`<sup>Optional</sup> <a name="messaging_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.messagingLogsEnabled"></a>

```python
messaging_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}.

---

##### `serverless_connection_timeout_in_seconds`<sup>Optional</sup> <a name="serverless_connection_timeout_in_seconds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serverlessConnectionTimeoutInSeconds"></a>

```python
serverless_connection_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}.

---

##### `service_mode`<sup>Optional</sup> <a name="service_mode" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serviceMode"></a>

```python
service_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#service_mode SignalrService#service_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#tags SignalrService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.timeouts"></a>

```python
timeouts: SignalrServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#timeouts SignalrService#timeouts}

---

##### `tls_client_cert_enabled`<sup>Optional</sup> <a name="tls_client_cert_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tlsClientCertEnabled"></a>

```python
tls_client_cert_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}.

---

##### `upstream_endpoint`<sup>Optional</sup> <a name="upstream_endpoint" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.upstreamEndpoint"></a>

```python
upstream_endpoint: typing.Union[IResolvable, typing.List[SignalrServiceUpstreamEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]]

upstream_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#upstream_endpoint SignalrService#upstream_endpoint}

---

### SignalrServiceCors <a name="SignalrServiceCors" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceCors(
  allowed_origins: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#allowed_origins SignalrService#allowed_origins}. |

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#allowed_origins SignalrService#allowed_origins}.

---

### SignalrServiceIdentity <a name="SignalrServiceIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#type SignalrService#type}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#type SignalrService#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}.

---

### SignalrServiceLiveTrace <a name="SignalrServiceLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceLiveTrace(
  connectivity_logs_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  http_request_logs_enabled: typing.Union[bool, IResolvable] = None,
  messaging_logs_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.connectivityLogsEnabled">connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#enabled SignalrService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.httpRequestLogsEnabled">http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.messagingLogsEnabled">messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |

---

##### `connectivity_logs_enabled`<sup>Optional</sup> <a name="connectivity_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.connectivityLogsEnabled"></a>

```python
connectivity_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#enabled SignalrService#enabled}.

---

##### `http_request_logs_enabled`<sup>Optional</sup> <a name="http_request_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.httpRequestLogsEnabled"></a>

```python
http_request_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `messaging_logs_enabled`<sup>Optional</sup> <a name="messaging_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.messagingLogsEnabled"></a>

```python
messaging_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

### SignalrServiceSku <a name="SignalrServiceSku" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceSku(
  capacity: typing.Union[int, float],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#capacity SignalrService#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#name SignalrService#name}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#capacity SignalrService#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#name SignalrService#name}.

---

### SignalrServiceTimeouts <a name="SignalrServiceTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#create SignalrService#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#delete SignalrService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#read SignalrService#read}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#update SignalrService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#create SignalrService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#delete SignalrService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#read SignalrService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#update SignalrService#update}.

---

### SignalrServiceUpstreamEndpoint <a name="SignalrServiceUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceUpstreamEndpoint(
  category_pattern: typing.List[str],
  event_pattern: typing.List[str],
  hub_pattern: typing.List[str],
  url_template: str,
  user_assigned_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.categoryPattern">category_pattern</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#category_pattern SignalrService#category_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.eventPattern">event_pattern</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#event_pattern SignalrService#event_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.hubPattern">hub_pattern</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#hub_pattern SignalrService#hub_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.urlTemplate">url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#url_template SignalrService#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#user_assigned_identity_id SignalrService#user_assigned_identity_id}. |

---

##### `category_pattern`<sup>Required</sup> <a name="category_pattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.categoryPattern"></a>

```python
category_pattern: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#category_pattern SignalrService#category_pattern}.

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.eventPattern"></a>

```python
event_pattern: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#event_pattern SignalrService#event_pattern}.

---

##### `hub_pattern`<sup>Required</sup> <a name="hub_pattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.hubPattern"></a>

```python
hub_pattern: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#hub_pattern SignalrService#hub_pattern}.

---

##### `url_template`<sup>Required</sup> <a name="url_template" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.urlTemplate"></a>

```python
url_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#url_template SignalrService#url_template}.

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/signalr_service#user_assigned_identity_id SignalrService#user_assigned_identity_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrServiceCorsList <a name="SignalrServiceCorsList" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceCorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SignalrServiceCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SignalrServiceCors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]]

---


### SignalrServiceCorsOutputReference <a name="SignalrServiceCorsOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SignalrServiceCors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors">SignalrServiceCors</a>]

---


### SignalrServiceIdentityOutputReference <a name="SignalrServiceIdentityOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.internalValue"></a>

```python
internal_value: SignalrServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---


### SignalrServiceLiveTraceOutputReference <a name="SignalrServiceLiveTraceOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceLiveTraceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetConnectivityLogsEnabled">reset_connectivity_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetHttpRequestLogsEnabled">reset_http_request_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetMessagingLogsEnabled">reset_messaging_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connectivity_logs_enabled` <a name="reset_connectivity_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetConnectivityLogsEnabled"></a>

```python
def reset_connectivity_logs_enabled() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_http_request_logs_enabled` <a name="reset_http_request_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetHttpRequestLogsEnabled"></a>

```python
def reset_http_request_logs_enabled() -> None
```

##### `reset_messaging_logs_enabled` <a name="reset_messaging_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetMessagingLogsEnabled"></a>

```python
def reset_messaging_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabledInput">connectivity_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabledInput">http_request_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabledInput">messaging_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled">connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled">http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled">messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connectivity_logs_enabled_input`<sup>Optional</sup> <a name="connectivity_logs_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabledInput"></a>

```python
connectivity_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_request_logs_enabled_input`<sup>Optional</sup> <a name="http_request_logs_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabledInput"></a>

```python
http_request_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `messaging_logs_enabled_input`<sup>Optional</sup> <a name="messaging_logs_enabled_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabledInput"></a>

```python
messaging_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connectivity_logs_enabled`<sup>Required</sup> <a name="connectivity_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled"></a>

```python
connectivity_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_request_logs_enabled`<sup>Required</sup> <a name="http_request_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled"></a>

```python
http_request_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `messaging_logs_enabled`<sup>Required</sup> <a name="messaging_logs_enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled"></a>

```python
messaging_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.internalValue"></a>

```python
internal_value: SignalrServiceLiveTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---


### SignalrServiceSkuOutputReference <a name="SignalrServiceSkuOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceSkuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.internalValue"></a>

```python
internal_value: SignalrServiceSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---


### SignalrServiceTimeoutsOutputReference <a name="SignalrServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SignalrServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>]

---


### SignalrServiceUpstreamEndpointList <a name="SignalrServiceUpstreamEndpointList" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceUpstreamEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SignalrServiceUpstreamEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SignalrServiceUpstreamEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]]

---


### SignalrServiceUpstreamEndpointOutputReference <a name="SignalrServiceUpstreamEndpointOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service

signalrService.SignalrServiceUpstreamEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPatternInput">category_pattern_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPatternInput">event_pattern_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPatternInput">hub_pattern_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplateInput">url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPattern">category_pattern</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPattern">event_pattern</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPattern">hub_pattern</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplate">url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_pattern_input`<sup>Optional</sup> <a name="category_pattern_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPatternInput"></a>

```python
category_pattern_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_pattern_input`<sup>Optional</sup> <a name="event_pattern_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPatternInput"></a>

```python
event_pattern_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hub_pattern_input`<sup>Optional</sup> <a name="hub_pattern_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPatternInput"></a>

```python
hub_pattern_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_template_input`<sup>Optional</sup> <a name="url_template_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplateInput"></a>

```python
url_template_input: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `category_pattern`<sup>Required</sup> <a name="category_pattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPattern"></a>

```python
category_pattern: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPattern"></a>

```python
event_pattern: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hub_pattern`<sup>Required</sup> <a name="hub_pattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPattern"></a>

```python
hub_pattern: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_template`<sup>Required</sup> <a name="url_template" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplate"></a>

```python
url_template: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SignalrServiceUpstreamEndpoint]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint">SignalrServiceUpstreamEndpoint</a>]

---



