# `webPubsubSocketio` Submodule <a name="`webPubsubSocketio` Submodule" id="@cdktf/provider-azurerm.webPubsubSocketio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubSocketio <a name="WebPubsubSocketio" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio azurerm_web_pubsub_socketio}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketio(
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
  sku: WebPubsubSocketioSku,
  aad_auth_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: WebPubsubSocketioIdentity = None,
  live_trace_connectivity_logs_enabled: typing.Union[bool, IResolvable] = None,
  live_trace_enabled: typing.Union[bool, IResolvable] = None,
  live_trace_http_request_logs_enabled: typing.Union[bool, IResolvable] = None,
  live_trace_messaging_logs_enabled: typing.Union[bool, IResolvable] = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access: str = None,
  service_mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WebPubsubSocketioTimeouts = None,
  tls_client_cert_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.aadAuthEnabled">aad_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceConnectivityLogsEnabled">live_trace_connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceEnabled">live_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceHttpRequestLogsEnabled">live_trace_http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceMessagingLogsEnabled">live_trace_messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.serviceMode">service_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.tlsClientCertEnabled">tls_client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#sku WebPubsubSocketio#sku}

---

##### `aad_auth_enabled`<sup>Optional</sup> <a name="aad_auth_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.aadAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#identity WebPubsubSocketio#identity}

---

##### `live_trace_connectivity_logs_enabled`<sup>Optional</sup> <a name="live_trace_connectivity_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceConnectivityLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}.

---

##### `live_trace_enabled`<sup>Optional</sup> <a name="live_trace_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}.

---

##### `live_trace_http_request_logs_enabled`<sup>Optional</sup> <a name="live_trace_http_request_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceHttpRequestLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}.

---

##### `live_trace_messaging_logs_enabled`<sup>Optional</sup> <a name="live_trace_messaging_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.liveTraceMessagingLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}.

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.localAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}.

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.publicNetworkAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}.

---

##### `service_mode`<sup>Optional</sup> <a name="service_mode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.serviceMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#timeouts WebPubsubSocketio#timeouts}

---

##### `tls_client_cert_enabled`<sup>Optional</sup> <a name="tls_client_cert_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.tlsClientCertEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku">put_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetAadAuthEnabled">reset_aad_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceConnectivityLogsEnabled">reset_live_trace_connectivity_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceEnabled">reset_live_trace_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceHttpRequestLogsEnabled">reset_live_trace_http_request_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceMessagingLogsEnabled">reset_live_trace_messaging_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLocalAuthEnabled">reset_local_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetPublicNetworkAccess">reset_public_network_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetServiceMode">reset_service_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTlsClientCertEnabled">reset_tls_client_cert_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}.

---

##### `put_sku` <a name="put_sku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku"></a>

```python
def put_sku(
  name: str,
  capacity: typing.Union[int, float] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

###### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}.

---

##### `reset_aad_auth_enabled` <a name="reset_aad_auth_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetAadAuthEnabled"></a>

```python
def reset_aad_auth_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_live_trace_connectivity_logs_enabled` <a name="reset_live_trace_connectivity_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceConnectivityLogsEnabled"></a>

```python
def reset_live_trace_connectivity_logs_enabled() -> None
```

##### `reset_live_trace_enabled` <a name="reset_live_trace_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceEnabled"></a>

```python
def reset_live_trace_enabled() -> None
```

##### `reset_live_trace_http_request_logs_enabled` <a name="reset_live_trace_http_request_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceHttpRequestLogsEnabled"></a>

```python
def reset_live_trace_http_request_logs_enabled() -> None
```

##### `reset_live_trace_messaging_logs_enabled` <a name="reset_live_trace_messaging_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceMessagingLogsEnabled"></a>

```python
def reset_live_trace_messaging_logs_enabled() -> None
```

##### `reset_local_auth_enabled` <a name="reset_local_auth_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLocalAuthEnabled"></a>

```python
def reset_local_auth_enabled() -> None
```

##### `reset_public_network_access` <a name="reset_public_network_access" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetPublicNetworkAccess"></a>

```python
def reset_public_network_access() -> None
```

##### `reset_service_mode` <a name="reset_service_mode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetServiceMode"></a>

```python
def reset_service_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_client_cert_enabled` <a name="reset_tls_client_cert_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTlsClientCertEnabled"></a>

```python
def reset_tls_client_cert_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WebPubsubSocketio resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketio.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketio.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketio.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketio.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WebPubsubSocketio resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WebPubsubSocketio to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WebPubsubSocketio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WebPubsubSocketio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.externalIp">external_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference">WebPubsubSocketioIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicPort">public_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference">WebPubsubSocketioSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference">WebPubsubSocketioTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabledInput">aad_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabledInput">live_trace_connectivity_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabledInput">live_trace_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabledInput">live_trace_http_request_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabledInput">live_trace_messaging_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabledInput">local_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccessInput">public_network_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceModeInput">service_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.skuInput">sku_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabledInput">tls_client_cert_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabled">aad_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabled">live_trace_connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabled">live_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabled">live_trace_http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabled">live_trace_messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceMode">service_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabled">tls_client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.externalIp"></a>

```python
external_ip: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identity"></a>

```python
identity: WebPubsubSocketioIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference">WebPubsubSocketioIdentityOutputReference</a>

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `public_port`<sup>Required</sup> <a name="public_port" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicPort"></a>

```python
public_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `server_port`<sup>Required</sup> <a name="server_port" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.sku"></a>

```python
sku: WebPubsubSocketioSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference">WebPubsubSocketioSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeouts"></a>

```python
timeouts: WebPubsubSocketioTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference">WebPubsubSocketioTimeoutsOutputReference</a>

---

##### `aad_auth_enabled_input`<sup>Optional</sup> <a name="aad_auth_enabled_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabledInput"></a>

```python
aad_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identityInput"></a>

```python
identity_input: WebPubsubSocketioIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `live_trace_connectivity_logs_enabled_input`<sup>Optional</sup> <a name="live_trace_connectivity_logs_enabled_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabledInput"></a>

```python
live_trace_connectivity_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_trace_enabled_input`<sup>Optional</sup> <a name="live_trace_enabled_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabledInput"></a>

```python
live_trace_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_trace_http_request_logs_enabled_input`<sup>Optional</sup> <a name="live_trace_http_request_logs_enabled_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabledInput"></a>

```python
live_trace_http_request_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_trace_messaging_logs_enabled_input`<sup>Optional</sup> <a name="live_trace_messaging_logs_enabled_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabledInput"></a>

```python
live_trace_messaging_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_auth_enabled_input`<sup>Optional</sup> <a name="local_auth_enabled_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabledInput"></a>

```python
local_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_input`<sup>Optional</sup> <a name="public_network_access_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccessInput"></a>

```python
public_network_access_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `service_mode_input`<sup>Optional</sup> <a name="service_mode_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceModeInput"></a>

```python
service_mode_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.skuInput"></a>

```python
sku_input: WebPubsubSocketioSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WebPubsubSocketioTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>]

---

##### `tls_client_cert_enabled_input`<sup>Optional</sup> <a name="tls_client_cert_enabled_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabledInput"></a>

```python
tls_client_cert_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aad_auth_enabled`<sup>Required</sup> <a name="aad_auth_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabled"></a>

```python
aad_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `live_trace_connectivity_logs_enabled`<sup>Required</sup> <a name="live_trace_connectivity_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabled"></a>

```python
live_trace_connectivity_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_trace_enabled`<sup>Required</sup> <a name="live_trace_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabled"></a>

```python
live_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_trace_http_request_logs_enabled`<sup>Required</sup> <a name="live_trace_http_request_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabled"></a>

```python
live_trace_http_request_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_trace_messaging_logs_enabled`<sup>Required</sup> <a name="live_trace_messaging_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabled"></a>

```python
live_trace_messaging_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_auth_enabled`<sup>Required</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access`<sup>Required</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `service_mode`<sup>Required</sup> <a name="service_mode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceMode"></a>

```python
service_mode: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tls_client_cert_enabled`<sup>Required</sup> <a name="tls_client_cert_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabled"></a>

```python
tls_client_cert_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubSocketioConfig <a name="WebPubsubSocketioConfig" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketioConfig(
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
  sku: WebPubsubSocketioSku,
  aad_auth_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: WebPubsubSocketioIdentity = None,
  live_trace_connectivity_logs_enabled: typing.Union[bool, IResolvable] = None,
  live_trace_enabled: typing.Union[bool, IResolvable] = None,
  live_trace_http_request_logs_enabled: typing.Union[bool, IResolvable] = None,
  live_trace_messaging_logs_enabled: typing.Union[bool, IResolvable] = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access: str = None,
  service_mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WebPubsubSocketioTimeouts = None,
  tls_client_cert_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.aadAuthEnabled">aad_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceConnectivityLogsEnabled">live_trace_connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceEnabled">live_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceHttpRequestLogsEnabled">live_trace_http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceMessagingLogsEnabled">live_trace_messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.serviceMode">service_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tlsClientCertEnabled">tls_client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.sku"></a>

```python
sku: WebPubsubSocketioSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#sku WebPubsubSocketio#sku}

---

##### `aad_auth_enabled`<sup>Optional</sup> <a name="aad_auth_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.aadAuthEnabled"></a>

```python
aad_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.identity"></a>

```python
identity: WebPubsubSocketioIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#identity WebPubsubSocketio#identity}

---

##### `live_trace_connectivity_logs_enabled`<sup>Optional</sup> <a name="live_trace_connectivity_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceConnectivityLogsEnabled"></a>

```python
live_trace_connectivity_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}.

---

##### `live_trace_enabled`<sup>Optional</sup> <a name="live_trace_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceEnabled"></a>

```python
live_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}.

---

##### `live_trace_http_request_logs_enabled`<sup>Optional</sup> <a name="live_trace_http_request_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceHttpRequestLogsEnabled"></a>

```python
live_trace_http_request_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}.

---

##### `live_trace_messaging_logs_enabled`<sup>Optional</sup> <a name="live_trace_messaging_logs_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceMessagingLogsEnabled"></a>

```python
live_trace_messaging_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}.

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}.

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}.

---

##### `service_mode`<sup>Optional</sup> <a name="service_mode" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.serviceMode"></a>

```python
service_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.timeouts"></a>

```python
timeouts: WebPubsubSocketioTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#timeouts WebPubsubSocketio#timeouts}

---

##### `tls_client_cert_enabled`<sup>Optional</sup> <a name="tls_client_cert_enabled" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tlsClientCertEnabled"></a>

```python
tls_client_cert_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}.

---

### WebPubsubSocketioIdentity <a name="WebPubsubSocketioIdentity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketioIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}.

---

### WebPubsubSocketioSku <a name="WebPubsubSocketioSku" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketioSku(
  name: str,
  capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}.

---

### WebPubsubSocketioTimeouts <a name="WebPubsubSocketioTimeouts" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketioTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubSocketioIdentityOutputReference <a name="WebPubsubSocketioIdentityOutputReference" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketioIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.internalValue"></a>

```python
internal_value: WebPubsubSocketioIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---


### WebPubsubSocketioSkuOutputReference <a name="WebPubsubSocketioSkuOutputReference" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketioSkuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resetCapacity">reset_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resetCapacity"></a>

```python
def reset_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.internalValue"></a>

```python
internal_value: WebPubsubSocketioSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---


### WebPubsubSocketioTimeoutsOutputReference <a name="WebPubsubSocketioTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_socketio

webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebPubsubSocketioTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>]

---



