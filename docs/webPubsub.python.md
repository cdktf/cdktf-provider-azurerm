# `webPubsub` Submodule <a name="`webPubsub` Submodule" id="@cdktf/provider-azurerm.webPubsub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsub <a name="WebPubsub" id="@cdktf/provider-azurerm.webPubsub.WebPubsub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub azurerm_web_pubsub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsub(
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
  sku: str,
  aad_auth_enabled: typing.Union[bool, IResolvable] = None,
  capacity: typing.Union[int, float] = None,
  id: str = None,
  identity: WebPubsubIdentity = None,
  live_trace: WebPubsubLiveTrace = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: WebPubsubTimeouts = None,
  tls_client_cert_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#location WebPubsub#location}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#name WebPubsub#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#sku WebPubsub#sku}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.aadAuthEnabled">aad_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#id WebPubsub#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.liveTrace">live_trace</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#tags WebPubsub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.tlsClientCertEnabled">tls_client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#location WebPubsub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#name WebPubsub#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#sku WebPubsub#sku}.

---

##### `aad_auth_enabled`<sup>Optional</sup> <a name="aad_auth_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.aadAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#id WebPubsub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#identity WebPubsub#identity}

---

##### `live_trace`<sup>Optional</sup> <a name="live_trace" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.liveTrace"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#live_trace WebPubsub#live_trace}

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.localAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#tags WebPubsub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#timeouts WebPubsub#timeouts}

---

##### `tls_client_cert_enabled`<sup>Optional</sup> <a name="tls_client_cert_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.tlsClientCertEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.putLiveTrace">put_live_trace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetAadAuthEnabled">reset_aad_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetLiveTrace">reset_live_trace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetLocalAuthEnabled">reset_local_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTlsClientCertEnabled">reset_tls_client_cert_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#type WebPubsub#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#identity_ids WebPubsub#identity_ids}.

---

##### `put_live_trace` <a name="put_live_trace" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putLiveTrace"></a>

```python
def put_live_trace(
  connectivity_logs_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  http_request_logs_enabled: typing.Union[bool, IResolvable] = None,
  messaging_logs_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `connectivity_logs_enabled`<sup>Optional</sup> <a name="connectivity_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putLiveTrace.parameter.connectivityLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putLiveTrace.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#enabled WebPubsub#enabled}.

---

###### `http_request_logs_enabled`<sup>Optional</sup> <a name="http_request_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putLiveTrace.parameter.httpRequestLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}.

---

###### `messaging_logs_enabled`<sup>Optional</sup> <a name="messaging_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putLiveTrace.parameter.messagingLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#create WebPubsub#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#delete WebPubsub#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#read WebPubsub#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#update WebPubsub#update}.

---

##### `reset_aad_auth_enabled` <a name="reset_aad_auth_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetAadAuthEnabled"></a>

```python
def reset_aad_auth_enabled() -> None
```

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_live_trace` <a name="reset_live_trace" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetLiveTrace"></a>

```python
def reset_live_trace() -> None
```

##### `reset_local_auth_enabled` <a name="reset_local_auth_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetLocalAuthEnabled"></a>

```python
def reset_local_auth_enabled() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_client_cert_enabled` <a name="reset_tls_client_cert_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTlsClientCertEnabled"></a>

```python
def reset_tls_client_cert_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WebPubsub resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsub.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsub.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsub.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsub.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WebPubsub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WebPubsub to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WebPubsub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WebPubsub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.externalIp">external_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference">WebPubsubIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.liveTrace">live_trace</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference">WebPubsubLiveTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicPort">public_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference">WebPubsubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabledInput">aad_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.liveTraceInput">live_trace_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabledInput">local_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabledInput">tls_client_cert_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabled">aad_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabled">tls_client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.externalIp"></a>

```python
external_ip: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.identity"></a>

```python
identity: WebPubsubIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference">WebPubsubIdentityOutputReference</a>

---

##### `live_trace`<sup>Required</sup> <a name="live_trace" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.liveTrace"></a>

```python
live_trace: WebPubsubLiveTraceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference">WebPubsubLiveTraceOutputReference</a>

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `public_port`<sup>Required</sup> <a name="public_port" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicPort"></a>

```python
public_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `server_port`<sup>Required</sup> <a name="server_port" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.timeouts"></a>

```python
timeouts: WebPubsubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference">WebPubsubTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `aad_auth_enabled_input`<sup>Optional</sup> <a name="aad_auth_enabled_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabledInput"></a>

```python
aad_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.identityInput"></a>

```python
identity_input: WebPubsubIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `live_trace_input`<sup>Optional</sup> <a name="live_trace_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.liveTraceInput"></a>

```python
live_trace_input: WebPubsubLiveTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---

##### `local_auth_enabled_input`<sup>Optional</sup> <a name="local_auth_enabled_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabledInput"></a>

```python
local_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WebPubsubTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>]

---

##### `tls_client_cert_enabled_input`<sup>Optional</sup> <a name="tls_client_cert_enabled_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabledInput"></a>

```python
tls_client_cert_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aad_auth_enabled`<sup>Required</sup> <a name="aad_auth_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabled"></a>

```python
aad_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_auth_enabled`<sup>Required</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tls_client_cert_enabled`<sup>Required</sup> <a name="tls_client_cert_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabled"></a>

```python
tls_client_cert_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubConfig <a name="WebPubsubConfig" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsubConfig(
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
  sku: str,
  aad_auth_enabled: typing.Union[bool, IResolvable] = None,
  capacity: typing.Union[int, float] = None,
  id: str = None,
  identity: WebPubsubIdentity = None,
  live_trace: WebPubsubLiveTrace = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: WebPubsubTimeouts = None,
  tls_client_cert_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#location WebPubsub#location}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#name WebPubsub#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#sku WebPubsub#sku}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.aadAuthEnabled">aad_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#id WebPubsub#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.liveTrace">live_trace</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#tags WebPubsub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.tlsClientCertEnabled">tls_client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#location WebPubsub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#name WebPubsub#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#sku WebPubsub#sku}.

---

##### `aad_auth_enabled`<sup>Optional</sup> <a name="aad_auth_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.aadAuthEnabled"></a>

```python
aad_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#id WebPubsub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.identity"></a>

```python
identity: WebPubsubIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#identity WebPubsub#identity}

---

##### `live_trace`<sup>Optional</sup> <a name="live_trace" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.liveTrace"></a>

```python
live_trace: WebPubsubLiveTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#live_trace WebPubsub#live_trace}

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#tags WebPubsub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.timeouts"></a>

```python
timeouts: WebPubsubTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#timeouts WebPubsub#timeouts}

---

##### `tls_client_cert_enabled`<sup>Optional</sup> <a name="tls_client_cert_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.tlsClientCertEnabled"></a>

```python
tls_client_cert_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}.

---

### WebPubsubIdentity <a name="WebPubsubIdentity" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsubIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#type WebPubsub#type}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#identity_ids WebPubsub#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#type WebPubsub#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#identity_ids WebPubsub#identity_ids}.

---

### WebPubsubLiveTrace <a name="WebPubsubLiveTrace" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsubLiveTrace(
  connectivity_logs_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  http_request_logs_enabled: typing.Union[bool, IResolvable] = None,
  messaging_logs_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.connectivityLogsEnabled">connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#enabled WebPubsub#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.httpRequestLogsEnabled">http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.messagingLogsEnabled">messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}. |

---

##### `connectivity_logs_enabled`<sup>Optional</sup> <a name="connectivity_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.connectivityLogsEnabled"></a>

```python
connectivity_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#enabled WebPubsub#enabled}.

---

##### `http_request_logs_enabled`<sup>Optional</sup> <a name="http_request_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.httpRequestLogsEnabled"></a>

```python
http_request_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}.

---

##### `messaging_logs_enabled`<sup>Optional</sup> <a name="messaging_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.messagingLogsEnabled"></a>

```python
messaging_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}.

---

### WebPubsubTimeouts <a name="WebPubsubTimeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsubTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#create WebPubsub#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#delete WebPubsub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#read WebPubsub#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#update WebPubsub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#create WebPubsub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#delete WebPubsub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#read WebPubsub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/web_pubsub#update WebPubsub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubIdentityOutputReference <a name="WebPubsubIdentityOutputReference" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsubIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.internalValue"></a>

```python
internal_value: WebPubsubIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---


### WebPubsubLiveTraceOutputReference <a name="WebPubsubLiveTraceOutputReference" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsubLiveTraceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetConnectivityLogsEnabled">reset_connectivity_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetHttpRequestLogsEnabled">reset_http_request_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetMessagingLogsEnabled">reset_messaging_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connectivity_logs_enabled` <a name="reset_connectivity_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetConnectivityLogsEnabled"></a>

```python
def reset_connectivity_logs_enabled() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_http_request_logs_enabled` <a name="reset_http_request_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetHttpRequestLogsEnabled"></a>

```python
def reset_http_request_logs_enabled() -> None
```

##### `reset_messaging_logs_enabled` <a name="reset_messaging_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetMessagingLogsEnabled"></a>

```python
def reset_messaging_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabledInput">connectivity_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabledInput">http_request_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabledInput">messaging_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabled">connectivity_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabled">http_request_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabled">messaging_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connectivity_logs_enabled_input`<sup>Optional</sup> <a name="connectivity_logs_enabled_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabledInput"></a>

```python
connectivity_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_request_logs_enabled_input`<sup>Optional</sup> <a name="http_request_logs_enabled_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabledInput"></a>

```python
http_request_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `messaging_logs_enabled_input`<sup>Optional</sup> <a name="messaging_logs_enabled_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabledInput"></a>

```python
messaging_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connectivity_logs_enabled`<sup>Required</sup> <a name="connectivity_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabled"></a>

```python
connectivity_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_request_logs_enabled`<sup>Required</sup> <a name="http_request_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabled"></a>

```python
http_request_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `messaging_logs_enabled`<sup>Required</sup> <a name="messaging_logs_enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabled"></a>

```python
messaging_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.internalValue"></a>

```python
internal_value: WebPubsubLiveTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---


### WebPubsubTimeoutsOutputReference <a name="WebPubsubTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub

webPubsub.WebPubsubTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebPubsubTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>]

---



